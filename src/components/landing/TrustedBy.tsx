
const TrustedBy = () => {
  const trusted = [
    { name: "Koushik Thalari", role: "Career Mentor Dev", className: "w-28" },
    { name: "Raneet Rot", role: "Professional Guide Dev", className: "w-28" },
    { name: "T. Sumanth", role: "Career Advisor Dev", className: "w-28" }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Trusted by career development experts</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {trusted.map((person) => (
            <div key={person.name} className="text-center">
              <div className={`${person.className} h-16 bg-neutral-400/20 rounded-full mx-auto mb-4`} />
              <h3 className="font-medium text-primary text-sm">{person.name}</h3>
              <p className="text-xs text-neutral-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
