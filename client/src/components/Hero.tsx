import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const tags = ['calgary', 'ucalgary', 'machine learning', 'hci', 'research'];

function HeroSubtitle() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        'Computer Science Student @ UCalgary, Software Engineering + Machine Learning.',
        'Building things that work.',
        'Open to Summer 2026 internships.',
      ],
      typeSpeed: 38,
      backSpeed: 18,
      backDelay: 2200,
      loop: true,
      cursorChar: '|',
    });
    return () => typed.destroy();
  }, []);

  return <span ref={el} />;
}

function Hero() {
  return (
    <>
      <section
        className="mb-[1.4rem] flex flex-col items-start justify-between gap-2 text-[0.63rem] font-light uppercase tracking-[0.16em] text-[#707076] sm:flex-row sm:items-center sm:gap-0 sm:mb-[2.2rem]"
        aria-label="Location and time"
      >
        <div>* Calgary, AB</div>
        <div>08:21 p.m. MST</div>
      </section>

      <section
        className="grid grid-cols-2 items-end gap-8 border-b border-[#c8c8c4] pb-10 lg:grid-cols-[1fr_minmax(260px,460px)] lg:gap-14"
        aria-label="Hero section"
      >
        <article>
          <h1 className="mb-7 leading-[0.85]">
            <span className="block font-['DM_Serif_Display'] text-[clamp(3rem,9vw,7rem)] font-normal tracking-[-0.03em]">
              Alen
            </span>
            <span className="block font-['DM_Serif_Display'] text-[clamp(3.1rem,9vw,7rem)] font-normal italic tracking-[-0.03em] text-[#78797f]">
              Thomas
            </span>
          </h1>
          <p className="mb-4 min-h-[1.6em] text-[clamp(0.95rem,1.4vw,1.3rem)] font-medium tracking-[0.02em]">
            <HeroSubtitle />
          </p>
          <p className="mb-4 max-w-[43ch] text-[0.95rem] font-light italic leading-[1.8] text-[#76767d]">
            I build things, research, and work on machine learning projects. Any
            other time: making pasta, playing piano, and hosting friends.
          </p>

        </article>

        <aside
          className="order-first relative h-[420px] lg:order-none lg:h-[480px]"
          aria-label="Feature visual panel"
        >
          <figure className="absolute left-0 top-8 z-20 w-[52%] -rotate-[8deg] cursor-pointer rounded-[3px] bg-[#f4f4f2] p-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition-[z-index,box-shadow] duration-150 hover:z-50 hover:shadow-[0_14px_28px_rgba(0,0,0,0.22)]">
            <img
              src={`${import.meta.env.BASE_URL}sunset.jpg`}
              alt="Sunset over mountains"
              className="polaroid-develop block h-[190px] w-full rounded-[1px] object-cover lg:h-[230px]"
            />
            <figcaption className="pt-2 text-center text-[0.7rem] font-medium italic lowercase tracking-[0.02em] text-[#8e8e92]">
              sunset at ucalgary
            </figcaption>
          </figure>

          <figure className="absolute right-0 top-0 z-10 w-[50%] rotate-[6deg] cursor-pointer rounded-[3px] bg-[#f4f4f2] p-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition-[z-index,box-shadow] duration-150 hover:z-50 hover:shadow-[0_14px_28px_rgba(0,0,0,0.22)]">
            <img
              src={`${import.meta.env.BASE_URL}binf.JPG`}
              alt="binf"
              className="polaroid-develop-2 block h-[190px] w-full rounded-[1px] object-cover lg:h-[230px]"
            />
            <figcaption className="pt-2 text-center text-[0.7rem] font-medium italic lowercase tracking-[0.02em] text-[#8e8e92]">
              july, 2025
            </figcaption>
          </figure>

          <figure className="absolute bottom-0 left-[24%] z-30 w-[52%] -rotate-[2deg] cursor-pointer rounded-[3px] bg-[#f4f4f2] p-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition-[z-index,box-shadow] duration-150 hover:z-50 hover:shadow-[0_14px_28px_rgba(0,0,0,0.22)]">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="profile"
              className="polaroid-develop-3 block h-[190px] w-full rounded-[1px] object-cover lg:h-[230px]"
            />
            <figcaption className="pt-2 text-center text-[0.7rem] font-medium italic lowercase tracking-[0.02em] text-[#8e8e92]">
              weekend builds
            </figcaption>
          </figure>
        </aside>
      </section>

      <section className="mb-6 mt-8 flex flex-wrap gap-3" aria-label="Tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#c7c7c4] px-3 py-1.5 text-[0.68rem] font-normal lowercase tracking-[0.09em] text-[#75757b]"
          >
            {tag}
          </span>
        ))}
      </section>

      <section className="mb-9 flex flex-wrap items-center gap-4" aria-label="Actions">
        <button
          type="button"
          className="flex h-[68px] w-[165px] flex-col items-center justify-center gap-1 bg-transparent text-[0.72rem] text-[#56565d] transition hover:-translate-y-0.5"
        >
          <span>scroll to see more</span>
          <span>v</span>
        </button>
      </section>
    </>
  );
}

export default Hero;