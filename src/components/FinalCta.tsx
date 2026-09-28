import Image from "next/image";
import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { StartProject } from "@/components/StartProject";
import { finalCta, images, site } from "@/content/site";

/**
 * The close, and the one dark block on the page: a navy card with the question,
 * the orange call to action, the email, and who is behind the studio.
 */
export function FinalCta() {
  return (
    <section id="contact" className="py-28 lg:py-40">
      <Container>
        <Reveal className="relative isolate grid grid-cols-1 overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-12">
          <Image
            src={images.contact.src}
            alt=""
            width={images.contact.width}
            height={images.contact.height}
            sizes="560px"
            className="absolute inset-y-0 right-0 -z-20 hidden h-full w-[48%] object-cover lg:block"
          />
          {/* Solid navy over the text, fading out across the photo, so the card reads as one piece. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,var(--navy)_55%,rgb(11_31_58/0.25)_85%,rgb(11_31_58/0.1))] lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(47_107_255/0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgb(47_107_255/0.18)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black,transparent_50%)]"
          />
          <div className="flex flex-col gap-10 p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <p className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-[color-mix(in_srgb,var(--brand-blue),white_45%)] uppercase">
              <span aria-hidden className="h-px w-8 bg-current" />
              {finalCta.eyebrow}
            </p>
            <h2 className="max-w-[12ch] text-5xl leading-[0.95] font-semibold tracking-[-0.045em] text-balance sm:text-7xl lg:text-[88px]">
              {finalCta.headline}
            </h2>
            <p className="max-w-[44ch] text-lg leading-relaxed text-white/75">{finalCta.subline}</p>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <StartProject className="h-14 px-8 text-base" />
              <p className="text-white/60">
                {finalCta.emailLabel}{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <p id="about" className="max-w-[56ch] scroll-mt-40 border-t border-white/15 pt-8 leading-relaxed text-white/60">
              {finalCta.about}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
