type EducationRowProps = {
  title: string;
  institution: string;
  advisor?: string;
  period?: string;
  points: string[];
  muted?: boolean;
};

function EducationRow({ title, institution, advisor, period, points, muted = false }: EducationRowProps) {
  const dotClassName = muted ? 'bg-[#c9c9c8]' : 'bg-[#1d1e22]';

  return (
    <article className="grid grid-cols-[2rem_1fr] gap-x-4 pb-10 last:pb-0 md:grid-cols-[2.25rem_1fr_auto] md:gap-x-6">
      <div className="flex flex-col items-center">
        <span className={`mt-2 h-3 w-3 rounded-full ${dotClassName}`} aria-hidden="true" />
        <span className="mt-3 h-full w-px bg-[#d8d8d6] last:hidden" aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <h3 className="m-0 text-[1.05rem] font-medium text-[#202126] sm:text-[1.2rem]">{title}</h3>
        <p className="mt-1 text-[0.92rem] font-light italic text-[#9c9ca2] sm:text-[0.98rem]">
          {institution}
          {advisor ? ` - ${advisor}` : ''}
        </p>

        <ul className="mt-4 list-none space-y-2 p-0 text-[0.98rem] font-normal leading-[1.45] text-[#56565d] sm:text-[1.02rem]">
          {points.map((point) => (
            <li key={`${title}-${point}`} className="flex gap-3">
              <span className="text-[#b8b8bc]">-</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {period && (
        <div className="col-start-2 mt-2 text-[0.92rem] font-light text-[#b0b0b6] md:col-start-3 md:mt-1 md:text-right md:text-[0.98rem]">
          {period}
        </div>
      )}
    </article>
  );
}

export default EducationRow;