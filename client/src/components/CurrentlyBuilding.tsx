interface AboutMeProps {
  description: string;
}

function AboutMe({ description }: AboutMeProps) {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="relative border-4 border-white rounded-3xl bg-white/0 backdrop-blur-m p-10">
        <span className="absolute -top-3.5 left-8 bg-[#93c6ff] px-4 py-0 text-white text-xl font-semibold tracking-widest z-10 rounded">
          whoami
        </span>
        
        <div className="mb-6">
          <h3 className="text-white text-lg font-semibold tracking-widest mb-8">
            A BIT ABOUT ME
          </h3>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
