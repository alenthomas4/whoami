import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'Verichain',
    year: '2025',
    href: 'https://github.com',
    stars: 48,
    forks: 12,
    description:
      'Pharmaceutical supply chain tracking system. End-to-end traceability from manufacturer to pharmacy.',
    technologies: ['spring boot', 'postgresql', 'jdbc'],
  },
  {
    title: 'HomePlate',
    year: '2024',
    href: 'https://github.com',
    stars: 36,
    forks: 9,
    description:
      'University meal-ordering platform with real-time order tracking and kitchen dashboards.',
    technologies: ['react', 'typescript', 'express', 'prisma'],
  },
  {
    title: 'Retinal Classifier',
    year: '2025',
    href: 'https://github.com',
    stars: 31,
    forks: 7,
    description:
      'ResNet50-based retinal disease classification with FAISS vector indexing and LangChain RAG pipeline.',
    technologies: ['python', 'pytorch', 'faiss', 'langchain'],
  },
  {
    title: 'Coopilot',
    year: '2024',
    href: 'https://github.com',
    stars: 27,
    forks: 5,
    description:
      'Chrome extension for Canadian co-op students - job tracking, autofill, and employer accountability data.',
    technologies: ['react', 'chrome api', 'typescript'],
  },
  {
    title: 'Paleo',
    badge: 'Built in 24h',
    year: '2024',
    href: 'https://github.com',
    stars: 22,
    forks: 4,
    description:
      'De-extinction genomic feasibility tool — computes similarity between extinct and living species genomes to assess revival viability.',
    technologies: ['react', 'typescript', 'python'],
  },
];

function ProjectsSection() {
  return (
    <section className="mt-12 border-t border-[#c8c8c4] pt-6" aria-label="Selected projects">
      <header className="mb-5 flex items-center justify-between gap-4">
        <h2 className="m-0 text-base font-medium uppercase tracking-[0.14em] text-[#a4a4aa]">Projects</h2>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            year={project.year}
            badge={'badge' in project ? project.badge : undefined}
            href={project.href}
            stars={project.stars}
            forks={project.forks}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;