const tags = ['calgary', 'ucalgary', 'machine learning', 'hci', 'research'];

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
        className="grid grid-cols-2 items-end gap-8 border-b border-[#c8c8c4] pb-10 lg:grid-cols-[1fr_minmax(200px,360px)] lg:gap-14"
        aria-label="Hero section"
      >
        <article>
          <h1 className="mb-7 leading-[0.85]">
            <span className="block font-['DM_Serif_Display'] text-[clamp(3rem,9vw,7rem)] font-normal tracking-[-0.03em]">
              alen
            </span>
            <span className="block font-['DM_Serif_Display'] text-[clamp(3.1rem,9vw,7rem)] font-normal italic tracking-[-0.03em] text-[#78797f]">
              thomas.
            </span>
          </h1>
          <p className="mb-4 text-[clamp(0.95rem,1.4vw,1.3rem)] font-medium tracking-[0.02em]">
            cs student @ ucalgary, machine learning + hci.
          </p>
          <p className="mb-4 max-w-[43ch] text-[0.95rem] font-light italic leading-[1.8] text-[#76767d]">
            i build things, research, and work on machine learning projects. any
            other time: making pasta, playing piano, and hosting friends.
          </p>
          <p className="text-[0.8rem] font-light italic text-[#a0a0a5]">open to summer 2026 internships </p>
        </article>

        <aside
          className="order-first flex min-h-[120px] items-stretch overflow-hidden rounded-[22px] border border-[#b9b9b6] bg-[#b4b4b1] lg:order-none lg:min-h-[clamp(110px,16vw,200px)]"
          aria-label="Feature visual panel"
        >
          <img
            src={`${import.meta.env.BASE_URL}sunset.jpg`}
            alt="Sunset over mountains"
            className="block h-full w-full object-cover"
          />
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