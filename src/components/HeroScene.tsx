"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { cn } from "@/lib/utils";

/**
 * Renders one GLB on a transparent canvas: fitted to the frame, a key and a rim
 * light in neutral white, a slow turn and a slight tilt towards the pointer.
 * Under reduced motion the object holds still. Rendering pauses off-screen.
 */
export function HeroScene({ src, onReady, className }: { src: string; onReady: () => void; className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  // Held in a ref so a new callback identity never tears the scene down.
  const onReadyRef = useRef(onReady);
  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 1.6);
    rim.position.set(-4, 2, -4);
    scene.add(rim);

    const pivot = new THREE.Group();
    scene.add(pivot);

    const resize = () => {
      const size = mount.clientWidth;
      renderer.setSize(size, size, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    if (!still) window.addEventListener("pointermove", onPointer);

    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    visibility.observe(mount);

    let disposed = false;
    new GLTFLoader().load(
      src,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        // Centre the model and scale it so its largest side fills the frame.
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const centre = box.getCenter(new THREE.Vector3());
        model.position.sub(centre);
        pivot.scale.setScalar(2.4 / Math.max(size.x, size.y, size.z));
        pivot.add(model);
        onReadyRef.current();
      },
      undefined,
      // No model yet: the placeholder frame stays up.
      () => {},
    );

    const clock = new THREE.Clock();
    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      const delta = clock.getDelta();
      if (!still) {
        pivot.rotation.y += delta * 0.25;
        pivot.rotation.x += (pointer.y * 0.2 - pivot.rotation.x) * 0.05;
        pivot.position.x += (pointer.x * 0.1 - pivot.position.x) * 0.05;
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointer);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [src]);

  return <div ref={mountRef} aria-hidden className={cn("absolute inset-0", className)} />;
}
