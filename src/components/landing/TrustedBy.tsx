
const TrustedBy = () => {
  const trusted = [
    { 
      name: "Koushik Thalari", 
      role: "Career Mentor Dev", 
      className: "w-28",
      bgColor: "bg-[#9b87f5]"
    },
    { 
      name: "Raneet Rot", 
      role: "Professional Guide Dev", 
      className: "w-28",
      bgColor: "bg-[#7E69AB]"
    },
    { 
      name: "T. Sumanth", 
      role: "Career Advisor Dev", 
      className: "w-28",
      bgColor: "bg-[#6E59A5]"
    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Trusted by career development experts</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {trusted.map((person) => (
            <div key={person.name} className="text-center">
              <div className={`${person.className} h-16 ${person.bgColor} rounded-full mx-auto mb-4 transition-transform hover:scale-105`} />
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
