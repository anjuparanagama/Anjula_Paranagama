import React from "react";
import { Briefcase, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "National Diploma in Information Technology",
    school: "Institute of Technology, University of Moratuwa",
    period: "2023 — Present",
    details:
      "Software development, databases, and web technologies. Includes Data Structures, Algorithms, Database Systems, and Web Development.",
  },
  {
    degree: "Advanced Level in Physical Science",
    school: "D.S. Senanayake College, Ampara",
    period: "2012 — 2021",
    details:
      "Physics, chemistry, and mathematics. Strong analytical and problem-solving skills.",
  },
];

const experience = [
  {
    role: "Intern Software Engineer",
    company: "Parallax Technologies (Pvt) Ltd",
    period: "Jan 2026 — Present",
    bullets: [
      "Developed order management system using React and Node.js, improving stock tracking by 30%.",
      "Collaborated with team of 5 to implement new features, increasing user engagement by 20%.",
      "Conducted code reviews to ensure quality and maintainability.",
    ],
  },
];

const Dot = ({ type }: { type: "edu" | "exp" }) => (
  <div
    className={`w-8 h-8 min-w-[2rem] rounded-full flex items-center justify-center z-10 ${
      type === "edu"
        ? "bg-purple-100 text-purple-600"
        : "bg-teal-100 text-teal-700"
    }`}
  >
    {type === "edu" ? (
      <BookOpen className="w-4 h-4" />
    ) : (
      <Briefcase className="w-4 h-4" />
    )}
  </div>
);

const Badge = ({ period }: { period: string }) => (
  <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-2.5 py-0.5">
    <Calendar className="w-3 h-3" />
    {period}
  </span>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
            Education & Experience
          </h2>
          <div className="mx-auto h-[3px] w-10 rounded-full bg-teal-500 mb-3" />
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Academic background and relevant professional experience.
          </p>
        </div>

        {/* Columns — stacked on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
              Education
            </h3>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
              {education.map((edu, i) => (
                <div key={i} className="flex gap-3 pb-5 last:pb-0">
                  <Dot type="edu" />
                  <div className="flex-1 min-w-0 bg-white border border-gray-100 rounded-xl p-3 sm:p-4">
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 leading-snug">
                      {edu.school}
                    </p>
                    <Badge period={edu.period} />
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-teal-600" />
              Professional Experience
            </h3>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-3 pb-5 last:pb-0">
                  <Dot type="exp" />
                  <div className="flex-1 min-w-0 bg-white border border-gray-100 rounded-xl p-3 sm:p-4">
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">
                      {exp.role}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 leading-snug">
                      {exp.company}
                    </p>
                    <Badge period={exp.period} />
                    <ul className="mt-2 space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-xs text-gray-500 leading-relaxed pl-3 relative"
                        >
                          <span className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-teal-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
