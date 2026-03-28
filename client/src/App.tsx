import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[rgba(239,239,237,1)] text-[#18191d] font-['DM_Sans']">
      <Nav />

      <main className="mx-auto max-w-[1130px] px-6 pb-14 pt-11">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        
      </main>
    </div>
  );
}

export default App;
