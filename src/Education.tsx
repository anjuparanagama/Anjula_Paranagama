import React from "react";
import { Briefcase, BookOpen, Calendar } from "lucide-react";

const Education: React.FC = () => {
  const education = [
    {
      degree: "National Diploma in Information Technology",
      school: "Institute of Technology, University of Moratuwa",
      period: "2023 — Present",
      details:
        "Focused on software development, databases, and web technologies. Relevant coursework includes Data Structures, Algorithms, Database Systems, and Web Development.",
    },
    {
      degree: "Advanced Level in Physical Science",
      school: "D.S.Senanayake Collage, Ampara",
      period: "2012 — 2021",
      details:
        "Studied physics, chemistry, and mathematics. Achieved high marks in all subjects, demonstrating strong analytical and problem-solving skills.",
    },
  ];

  const experience = [
    {
      role: "Intern Software Engineer",
      company: "Parallax Technologies (Pvt) Ltd",
      period: "2026 jan — present",
      bullets: [
        "Developed a web-based order management system using React and Node.js, improving stock tracking efficiency by 30%.",
        "Collaborated with a team of 5 to design and implement new features, resulting in a 20% increase in user engagement.",
        "Conducted code reviews and provided feedback to ensure code quality and maintainability.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-gray-50 to-white edu-section-highlight relative overflow-hidden"
    >
      <div className="absolute -left-20 -top-16 w-72 h-72 rounded-full pointer-events-none opacity-40 blur-3xl bg-gradient-to-br from-indigo-100 to-teal-100 animate-blob"></div>
      <div className="absolute -right-28 -bottom-20 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl bg-gradient-to-tr from-pink-100 to-yellow-100 animate-blob float-anim"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#06402B] to-[#2E6F40]">
            Education & Experience
          </h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 opacity-90 mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic background and relevant professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 ml-5 fade-in-up">
              Education
            </h3>
            <div className="space-y-6 timeline">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="edu-card timeline-item backdrop-blur-sm mr-5"
                  style={{ ["--delay" as any]: `${idx * 120}ms` }}
                >
                  <div className="flex items-start gap-4 w-full ">
                    <div className="edu-badge bg-gradient-to-r from-purple-500 to-indigo-500">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {edu.degree}
                          </h4>
                          <p className="text-sm text-gray-600">{edu.school}</p>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl ml-5 font-semibold text-gray-900 mb-6 fade-in-up">
              Professional Experience
            </h3>
            <div className="space-y-6 timeline">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="edu-card timeline-item backdrop-blur-sm mr-5"
                  style={{ ["--delay" as any]: `${idx * 120}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="edu-badge bg-gradient-to-r from-green-400 to-teal-400">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {exp.role}
                          </h4>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className="mt-3 list-disc list-inside text-gray-600 text-sm">
                        {exp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="timeline-item"
                            style={{
                              ["--delay" as any]: `${idx * 120 + i * 80}ms`,
                            }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
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
