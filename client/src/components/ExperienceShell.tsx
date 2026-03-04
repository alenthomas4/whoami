import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import JobCard from './JobCard';

const ExperienceShell = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [showContent, setShowContent] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const typedElement = useRef(null);
  const typedElement2 = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          'git pull alen-thomas'
        ],
        typeSpeed: 40,
        showCursor: true,
        cursorChar: '',
        onComplete: () => {
          setTimeout(() => setShowContent(true), 300);
        }
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (typedElement2.current && showContent) {
      const typed2 = new Typed(typedElement2.current, {
        strings: [
          `git show alen/${activeTab}`
        ],
        typeSpeed: 40,
        showCursor: true,
        cursorChar: '▋',
        onComplete: () => {
          setTimeout(() => setShowTabs(true), 300);
        }
      });

      return () => {
        typed2.destroy();
      };
    }
  }, [showContent, activeTab]);

  const experiences = [
    {
      company: 'Product Management Club',
      logo: '/calgary_product_project_management_club_logo%20(1).jpeg',
      title: 'Software ',
      location: 'Calgary, Canada',
      dateRange: 'Feb 2025 - Present',
      duration: '1 year 1 month',
      type: 'Full-time',
      tags: ['React', 'GCP', 'Framer Motion', 'Gitlab CI/CD', 'Agentic AI UI/UX'],
      description: [
        'Serving as Junior External for Product Management Club initiatives and outreach.',
        'Designed and developed the club website to improve member onboarding and event visibility.',
      ],
    },
    {
      company: 'University of Calgary - PA: Dr. Janet Leahy',
      logo: '/interlock.png',
      title: 'Undergraduate Honors Researcher',
      location: 'Calgary, AB',
      dateRange: 'Jan 2025 - Aug 2025',
      duration: '8 months',
      type: 'Research',
      tags: ['Game Development', 'Git', 'Educational Technology', 'Gamification', 'Learning Principles'],
      description: [
        'Developing educational game to teach Git version control through gamification for CS students',
        'Designing interactive gameplay mechanics mapping Git concepts to engaging challenges',
        'Implementing game-based learning principles to improve student understanding of version control',
      ],
    },
    {
      company: 'University of Calgary - Mentor: Dr. Bin Hu',
      logo: '/interlock.png',
      title: 'Undergraduate Research Assistant',
      location: 'Calgary, AB',
      dateRange: 'Sept 2024 - Dec 2024',
      duration: '4 months',
      type: 'Research',
      tags: ['Transfer Learning', 'Machine Learning', 'LLM', 'Medical AI', 'Hyperparameter Optimization'],
      description: [
        'Implemented transfer learning techniques and systematic hyperparameter optimization to achieve high accuracy across three diagnostic classes: diabetic macular edema, diabetic retinopathy, and healthy retinas',
        'Integrated large language models to generate clinical explanations by combining predicted classifications with bimodal data from similar cases',
      ],
    },
    
  ];

  const education = [
    {
      company: 'University of Calgary',
      logo: '/interlock.png',
      title: 'Bachelor of Computer Science',
      location: 'Calgary, Canada',
      dateRange: 'Sep 2019 - Jun 2023',
      duration: '4 years',
      type: 'Full-time',
      tags: ['Computer Science', 'Software Engineering', 'Algorithms', 'Data Structures'],
      description: ['Graduated with honors', 'Dean\'s List recipient'],
    },
     {
      company: 'Western Canada High School',
      logo: '/interlock.png',
      title: 'Partial IB Student',
      location: 'Calgary, Canada',
      dateRange: 'Sep 2019 - Jun 2022',
      duration: '4 years',
      type: 'Full-time',
      tags: ['Computer Science', 'Software Engineering', 'Algorithms', 'Data Structures'],
      description: ['Graduated with honors', 'Dean\'s List recipient'],
    },
  ];

  const currentData = activeTab === 'experience' ? experiences : education;

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-md bg-red-400"></div>
          <div className="w-3 h-3 rounded-md bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <span className="text-gray-600 text-xs sm:text-sm ml-2 sm:ml-4 font-mono truncate">zsh — alen@MacBook-Pro: ~</span>
      </div>

      {/* Terminal Content */}
      <div className="bg-white p-3 sm:p-6 lg:p-8">
        {/* Typed animation container */}
        <div className="mb-6">
          <div className="flex items-start gap-2 font-mono text-sm sm:text-base">
            <span className="text-blue-600 break-all">alen@MacBook-Pro ~ %</span>
            <span ref={typedElement} className="text-gray-800 whitespace-pre-wrap"></span>
          </div>
        </div>
        
        {/* Show content after typing completes */}
        {showContent && (
          <>
            {/* Cloning output */}
            <div className="text-gray-500 text-sm mb-1 font-mono">Cloning into 'alen-thomas'...</div>
            <div className="text-gray-500 text-sm mb-1 font-mono">remote: Enumerating objects: 247, done.</div>
            <div className="text-gray-500 text-sm mb-4 font-mono">Receiving objects: 100% ████████████ done.</div>
            
            <div className="flex items-center gap-2 mb-6 font-mono text-sm sm:text-base">
              <span className="text-blue-600 break-all">alen@MacBook-Pro ~ %</span>
              <span ref={typedElement2} className="text-gray-800"></span>
            </div>
          </>
        )}

        {/* Show tabs and content after second typing completes */}
        {showTabs && (
          <>
            {/* Tabs */}
            <div className="flex gap-2 sm:gap-3 mb-6 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab('experience')}
                className={`pb-3 sm:pb-5 pt-2 sm:pt-3 px-3 sm:px-6 text-sm sm:text-base font-medium transition-all font-sans text-center whitespace-nowrap ${
                  activeTab === 'experience'
                    ? 'text-white bg-gray-700 rounded-t-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`pb-3 sm:pb-5 pt-2 sm:pt-3 px-3 sm:px-6 text-sm sm:text-base font-medium transition-all font-sans text-center whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'text-white bg-gray-700 rounded-t-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                education
              </button>
            </div>

            {/* Content */}
            <div className="relative font-sans">
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <div className="space-y-8">
                {currentData.map((item, index) => (
                  <JobCard key={index} {...item} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceShell;
