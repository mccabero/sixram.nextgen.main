"use client";

import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { studioGalleryImages } from "@/data/studio-gallery";
import { cn } from "@/lib/utils";

export function StudioGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = studioGalleryImages[activeIndex];
  const slideNumber = useMemo(
    () => String(activeIndex + 1).padStart(2, "0"),
    [activeIndex]
  );

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? studioGalleryImages.length - 1 : current - 1
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === studioGalleryImages.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="dark-feature">
      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="editorial-kicker text-cyan-200">Studio Gallery</p>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-black uppercase leading-[0.96] text-white sm:text-5xl">
              Room shots, live takes, and session energy.
            </h2>
            <p className="mt-5 max-w-lg border-l-2 border-cyan-300 pl-4 text-sm font-bold leading-6 text-slate-300">
              This gallery is ready for your uploaded studio photos. Replace the placeholder
              image paths in the gallery data when the final shots are available.
            </p>
          </div>

          <div className="relative">
            <figure className="relative aspect-[16/10] overflow-hidden border border-white/12 bg-slate-950 shadow-[0_34px_90px_rgba(2,6,23,0.42)]">
              <Image
                alt={activeImage.alt}
                className="h-full w-full object-cover"
                fill
                priority={activeIndex === 0}
                sizes="(min-width: 1024px) 650px, 100vw"
                src={activeImage.src}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100">
                    {slideNumber} / {String(studioGalleryImages.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase text-white">
                    {activeImage.caption}
                  </h3>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <button
                    aria-label="Previous studio photo"
                    className="grid h-11 w-11 place-items-center border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
                    onClick={showPrevious}
                    type="button"
                  >
                    <ChevronLeft aria-hidden="true" size={20} />
                  </button>
                  <button
                    aria-label="Next studio photo"
                    className="grid h-11 w-11 place-items-center border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
                    onClick={showNext}
                    type="button"
                  >
                    <ChevronRight aria-hidden="true" size={20} />
                  </button>
                </div>
              </figcaption>
            </figure>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {studioGalleryImages.map((image, index) => (
                <button
                  aria-label={`Show ${image.caption}`}
                  aria-pressed={index === activeIndex}
                  className={cn(
                    "group relative aspect-[4/3] overflow-hidden border bg-slate-950 text-left transition",
                    index === activeIndex
                      ? "border-cyan-300 shadow-[0_18px_48px_rgba(34,211,238,0.16)]"
                      : "border-white/12 hover:border-cyan-200/70"
                  )}
                  key={`${image.src}-${image.caption}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <Image
                    alt=""
                    className="h-full w-full object-cover opacity-72 transition group-hover:scale-105 group-hover:opacity-100"
                    fill
                    sizes="(min-width: 1024px) 200px, 33vw"
                    src={image.src}
                    unoptimized
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/76 to-transparent" />
                  <span className="absolute inset-x-3 bottom-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-white">
                    {index === activeIndex ? (
                      <ImagePlus aria-hidden="true" className="text-cyan-200" size={15} />
                    ) : null}
                    {image.caption}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 sm:hidden">
              <button
                className="grid h-11 flex-1 place-items-center border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
                onClick={showPrevious}
                type="button"
              >
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <button
                className="grid h-11 flex-1 place-items-center border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
                onClick={showNext}
                type="button"
              >
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
