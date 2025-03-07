
import { GraduationCap, UserCog, UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TrustedBy = () => {
  const trusted = [
    { 
      name: "Koushik Thalari", 
      role: "Career Mentor Dev", 
      className: "bg-[#9b87f5]",
      icon: UserRound,
      initials: "KT"
    },
    { 
      name: "Raneet Rot", 
      role: "Professional Guide Dev", 
      className: "bg-[#7E69AB]",
      icon: UserCog,
      initials: "RR"
    },
    { 
      name: "T. Sumanth", 
      role: "Career Advisor Dev", 
      className: "bg-[#6E59A5]",
      icon: GraduationCap,
      initials: "TS"
    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Trusted by career development experts</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {trusted.map((person) => (
            <div key={person.name} className="text-center">
              <Avatar className={`w-16 h-16 ${person.className} mx-auto mb-4 transition-transform hover:scale-110 hover:shadow-md`}>
                <AvatarFallback className="text-white flex items-center justify-center">
                  <person.icon className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
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
