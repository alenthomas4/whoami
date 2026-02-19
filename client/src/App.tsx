import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Add padding-top to prevent content from hiding under navbar */}
      <main className="pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-600">Building amazing things with code</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center p-8 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-lg text-gray-600">My latest work and creations</p>
          </div>
        </section>
        
        <section id="resume" className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
            <p className="text-lg text-gray-600">My experience and skills</p>
          </div>
        </section>
        
        <section id="faq" className="min-h-screen flex items-center justify-center p-8 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">FAQ</h2>
            <p className="text-lg text-gray-600">Frequently asked questions</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
