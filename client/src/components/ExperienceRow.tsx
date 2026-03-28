type ExperienceRowProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
  location?: string;
};

function ExperienceRow({ role, company, period, summary, location }: ExperienceRowProps) {
  return (
    <article className="grid gap-x-3 gap-y-1 rounded-[10px] border border-[#9a9aa1] bg-[rgba(244,244,243,0.65)] px-4 py-4 shadow-[0_1px_0_0_rgba(48,48,56,0.2)] transition duration-200 hover:-translate-y-0.5 hover:border-[#303039] hover:shadow-[0_4px_0_0_rgba(34,34,42,0.55)] md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="m-0 text-base font-medium lowercase text-[#22232a]">{role}</h3>
        <p className="m-0 mt-0.5 text-[0.85rem] font-normal lowercase text-[#6c6c73]">
          {company}
          {location ? `, ${location}` : ''}
        </p>
      </div>
      <div className="self-start text-[0.72rem] font-medium lowercase text-[#9c9ca2] md:text-[0.76rem]">
        <span>{period}</span>
      </div>
      <p className="col-span-full m-0 mt-2 max-w-[72ch] text-[0.88rem] font-light leading-[1.6] text-[#5f5f65]">
        {summary}
      </p>
    </article>
  );
}

export default ExperienceRow;