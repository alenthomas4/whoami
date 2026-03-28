export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  year?: string;
  href?: string;
  stars?: number;
  forks?: number;
};

function StatIcon({ kind }: { kind: 'star' | 'fork' }) {
  if (kind === 'star') {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path d="m12 3.7 2.34 4.74 5.22.76-3.78 3.68.9 5.2L12 15.6l-4.68 2.47.9-5.2L4.44 9.2l5.22-.76L12 3.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="7" cy="5" r="2" />
      <circle cx="17" cy="12" r="2" />
      <circle cx="7" cy="19" r="2" />
      <path d="M8.8 6.2 15.2 10.8" strokeLinecap="round" />
      <path d="M8.8 17.8 15.2 13.2" strokeLinecap="round" />
    </svg>
  );
}

function ProjectCard({ title, description, technologies, year, href, stars = 0, forks = 0 }: ProjectCardProps) {
  return (
    <article className="group relative flex min-h-[168px] flex-col justify-between rounded-[12px] border border-[#2a2a33]/35 bg-[rgba(250,250,248,0.96)] px-5 pb-4 pt-4 shadow-[0_1px_0_0_rgba(42,42,51,0.22)] transition duration-200 hover:-translate-y-0.5 hover:border-[#2a2a33]/80 hover:shadow-[0_7px_0_0_rgba(36,36,46,0.95)] focus-within:-translate-y-0.5 focus-within:border-[#2a2a33]/80 focus-within:shadow-[0_7px_0_0_rgba(36,36,46,0.95)]">
      <header className="mb-2.5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-transparent bg-transparent" aria-hidden="true" />
          <h3 className="m-0 text-[1.45rem] font-medium leading-none tracking-[-0.03em] text-[#1d1d21]">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-[0.88rem] font-medium text-[#a1a1a6]">
          {year && <span>{year}</span>}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title}`}
              className="inline-flex h-[1.9rem] w-[1.9rem] items-center justify-center rounded-full border border-[#c9c9cb] transition-colors hover:border-[#919197]"
            >
              <img src={`${import.meta.env.BASE_URL}gitcat.png`} alt="GitHub" className="h-4 w-4 object-contain" />
            </a>
          )}
        </div>
      </header>

      <div className="pointer-events-none absolute right-4 top-[3.1rem] rounded-[9px] border border-[#d1d1d2] bg-[rgba(255,255,255,0.92)] px-2.5 py-1.5 text-[#1f2024] opacity-0 shadow-[0_4px_14px_rgba(0,0,0,0.07)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 translate-y-1">
        <div className="flex items-center gap-3 text-[0.68rem] font-medium">
          <span className="inline-flex items-center gap-1.5">
            <StatIcon kind="star" />
            {stars}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <StatIcon kind="fork" />
            {forks}
          </span>
        </div>
      </div>

      <p className="m-0 max-w-[34ch] text-[clamp(0.92rem,1.15vw,1rem)] font-normal leading-[1.45] text-[#5b5b61]">
        {description}
      </p>

      <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0" aria-label={`${title} technologies`}>
        {technologies.map((technology) => (
          <li
            key={`${title}-${technology}`}
            className="rounded-[5px] bg-[#e7e7e8] px-2 py-1 text-[0.54rem] font-medium lowercase leading-none tracking-[0.04em] text-[#5d5d63]"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
