import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'verichain',
    year: '2025',
    href: 'https://github.com',
    stars: 48,
    forks: 12,
    description:
      'pharmaceutical supply chain tracking system. end-to-end traceability from manufacturer to pharmacy.',
    technologies: ['spring boot', 'postgresql', 'jdbc'],
  },
  {
    title: 'homePlate',
    year: '2024',
    href: 'https://github.com',
    stars: 36,
    forks: 9,
    description:
      'university meal-ordering platform with real-time order tracking and kitchen dashboards.',
    technologies: ['react', 'typescript', 'express', 'prisma'],
  },
  {
    title: 'retinal classifier',
    year: '2025',
    href: 'https://github.com',
    stars: 31,
    forks: 7,
    description:
      'resnet50-based retinal disease classification with faiss vector indexing and langchain rag pipeline.',
    technologies: ['python', 'pytorch', 'faiss', 'langchain'],
  },
  {
    title: 'coopilot',
    year: '2024',
    href: 'https://github.com',
    stars: 27,
    forks: 5,
    description:
      'chrome extension for canadian co-op students - job tracking, autofill, and employer accountability data.',
    technologies: ['react', 'chrome api', 'typescript'],
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