import { Code2, Monitor, Server, Database, Cpu, Wrench } from "lucide-react";

type Groups = Record<string, Array<string | { name: string; detail?: string }>>;

export default function Skills({
  skills,
  groups,
  skillsDetails,
}: {
  skills?: Array<{ name: string; description?: string; icon?: JSX.Element }>;
  groups?:
    | Groups
    | Record<string, Array<string | { name: string; detail?: string }>>;
  skillsDetails?: Record<string, string>;
}) {
  const defaultGroups: Groups = {
    "Programming Languages": ["Python", "Java", "JavaScript", "Go", "HTML"],
    "Frontend Frameworks": ["React", "Next.js", "Tailwind CSS"],
    "Backend Frameworks": ["Node.js", "Express", "Django"],
    Database: ["MySQL", "PostgreSQL", "Supabase"],
    AI: ["OpenAI", "TensorFlow", "scikit-learn"],
    Other: ["Docker", "AWS", "Git"],
  };

  const combinedGroups: Groups =
    (groups as Groups) ||
    (() => {
      if (!skills) return defaultGroups as Groups;
      return { "General Skills": skills.map((s) => s.name) } as Groups;
    })();

  const categoryIcons: Record<string, JSX.Element> = {
    "Programming Languages": <Code2 className="w-5 h-5" />,
    "Frontend Frameworks": <Monitor className="w-5 h-5" />,
    "Backend Frameworks": <Server className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    AI: <Cpu className="w-5 h-5" />,
    Other: <Wrench className="w-5 h-5" />,
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#06402B] to-[#2E6F40]">
            Skills & Expertise
          </h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 opacity-90 mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies grouped by category for clearer presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(combinedGroups).map(([category, items]) => (
            <div
              key={category}
              className="relative p-6 rounded-2xl border border-white bg-white backdrop-blur-sm shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#06402B] to-[#2E6F40] text-white shadow-md">
                  {categoryIcons[category] ?? <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {category}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {(
                  items as Array<string | { name: string; detail?: string }>
                ).map((raw) => {
                  const name =
                    typeof raw === "string"
                      ? raw
                      : (raw as { name: string }).name;
                  const detail =
                    (typeof raw === "object" &&
                      (raw as { detail?: string }).detail) ||
                    skillsDetails?.[name];
                  return (
                    <div key={name} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-green-300 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {name}
                        </div>
                        {detail && (
                          <div className="text-xs text-slate-600">{detail}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
