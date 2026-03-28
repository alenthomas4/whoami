import { useState } from 'react';
import ExperienceRow from './ExperienceRow';
import EducationRow from './EducationRow';

const EXPERIENCE = [
  {
    role: 'software engineering intern',
    company: 'nokia',
    location: 'calgary',
    period: 'summer 2025',
    summary:
      'built internal tooling to automate network diagnostics and cut manual triage effort by standardizing test workflows.',
  },
  {
    role: 'undergraduate research intern',
    company: 'university of calgary',
    location: 'dr. bin hu',
    period: 'jan 2025 - jul 2025',
    summary:
      'worked on retinal disease classification using resnet50 transfer learning, faiss vector indexing, and langchain rag integration.',
  },
  {
    role: 'honours researcher',
    company: 'university of calgary',
    location: 'dr. janet leahy',
    period: 'may 2026 - may 2027',
    summary:
      'building a git education game for cs students and studying gamification in computer science education research.',
  },
  {
    role: 'product lead',
    company: 'product management club',
    location: 'ucalgary',
    period: '2024 - now',
    summary:
      'led workshops and mentorship programs helping students ship practical portfolio projects with measurable outcomes.',
  },
];

const EDUCATION = [
  {
    title: 'bsc computer science (honours)',
    institution: 'university of calgary',
    period: '2022 - 2026',
    points: ['data concentration', 'minor in data science - gpa 3.68'],
    muted: true,
  },
  {
    title: 'western canada high school',
    institution: 'international baccalaureate (ib)',
    points: ['ib diploma programme'],
    muted: true,
  },
];

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="resume" className="mt-9 border-t border-[#c8c8c4] pt-6" aria-label="Experience and education">
      <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 rounded-full border border-[#d0d0cd] bg-[rgba(255,255,255,0.32)] p-1">
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`rounded-full px-4 py-2 text-[0.76rem] font-medium lowercase tracking-[0.12em] transition ${
              activeTab === 'experience'
                ? 'bg-[#1f2024] text-[#f4f4f1]'
                : 'text-[#66666c] hover:bg-[rgba(0,0,0,0.04)]'
            }`}
          >
            experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`rounded-full px-4 py-2 text-[0.76rem] font-medium lowercase tracking-[0.12em] transition ${
              activeTab === 'education'
                ? 'bg-[#1f2024] text-[#f4f4f1]'
                : 'text-[#66666c] hover:bg-[rgba(0,0,0,0.04)]'
            }`}
          >
            education
          </button>
        </div>

        <a href="#" className="text-[0.78rem] font-medium text-[#525259]">
          full resume {'->'}
        </a>
      </header>

      <div className="mb-6 text-[0.9rem] font-light uppercase tracking-[0.14em] text-[#a4a4aa]">
        {activeTab === 'experience' ? 'industry, research + leadership work' : 'school based work'}
      </div>

      {activeTab === 'experience' ? (
        <div className="grid gap-3">
          {EXPERIENCE.map((item) => (
            <ExperienceRow
              key={`${item.role}-${item.company}`}
              role={item.role}
              company={item.company}
              period={item.period}
              summary={item.summary}
              location={item.location}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {EDUCATION.map((item) => (
            <EducationRow
              key={`${item.title}-${item.period}`}
              title={item.title}
              institution={item.institution}
              advisor={item.advisor}
              period={item.period}
              points={item.points}
              muted={item.muted}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ExperienceSection;