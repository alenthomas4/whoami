import { useState } from 'react';
import ExperienceRow from './ExperienceRow';
import EducationRow from './EducationRow';

const EXPERIENCE = [
  {
    role: 'Undergraduate Research Intern',
    company: 'University of Calgary',
    location: 'Dr. Bin Hu',
    period: 'Jan 2025 - Jul 2025',
    summary:
      'Worked on retinal disease classification using ResNet50 transfer learning, FAISS vector indexing, and LangChain RAG integration.',
  },
  {
    role: 'Honours Researcher',
    company: 'University of Calgary',
    location: 'Dr. Janet Leahy',
    period: 'May 2026 - May 2027',
    summary:
      'Building a Git education game for CS students and studying gamification in computer science education research.',
  },
  {
    role: 'Junior External',
    company: 'Product Management Club',
    location: 'UCalgary',
    period: '2024 - Now',
    summary:
      'Led workshops and mentorship programs helping students ship practical portfolio projects with measurable outcomes.',
  },
];

const EDUCATION = [
  {
    title: 'BSc Computer Science (Honours)',
    institution: 'University of Calgary',
    period: '2022 - 2026',
    points: ['Data Concentration', 'Minor in Data Science - GPA 3.68'],
    muted: true,
  },
  {
    title: 'Western Canada High School',
    institution: 'International Baccalaureate (IB)',
    points: ['IB Diploma Programme'],
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
              key={`${item.title}-${item.institution}`}
              title={item.title}
              institution={item.institution}
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