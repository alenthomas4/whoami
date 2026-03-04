interface SectionProps {
  id: string;
  title: string;
  description: string;
}

const Section = ({ id, title, description }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/90">{description}</p>
      </div>
    </section>
  );
};

export default Section;
