function Nav() {
  return (
    <header className="sticky top-0 z-10 flex flex-col items-start justify-between gap-3 border-b border-[#c8c8c4] bg-[rgba(233,233,230,0.84)] px-6 py-4 backdrop-blur-[5px] sm:flex-row sm:items-center sm:gap-0">
      <div className="text-[1.4rem] font-medium tracking-[0.2px]">alen thomas</div>
      <nav className="flex flex-wrap items-center gap-4 text-[0.8rem] font-normal lowercase text-[#5f5f66] sm:gap-[1.4rem]" aria-label="Primary">
        <a href="mailto:alen@example.com" className="transition-colors duration-200 hover:text-[#191a1f]">email</a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#191a1f]"
        >
          twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#191a1f]"
        >
          linkedin
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 hover:text-[#191a1f]"
        >
          github
        </a>
        <a
          className="rounded-full border border-[#6c6c72] px-4 py-2 font-medium text-[#24252a] transition-colors duration-200 hover:border-[#4f4f55]"
          href="#resume"
        >
          resume {'->'}
        </a>
      </nav>
    </header>
  );
}

export default Nav;