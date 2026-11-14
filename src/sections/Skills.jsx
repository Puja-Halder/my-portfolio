
import {
  FiCode,
  FiMonitor,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";

function Skills() {
  const skillCategories = [
    {
      icon: <FiCode size={24} />,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "C++", "Java"],
    },
    {
      icon: <FiMonitor size={24} />,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "SQL", "MySQL", "MongoDB"],
    },
    {
      icon: <FiTool size={24} />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "REST API"],
    },
    {
      icon: <FiCpu size={24} />,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Basic Image Processing"],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What I work with
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-secondary">
            Technologies and tools I use while learning and building projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-surface p-7 transition hover:border-primary/50"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-primary/15 p-3 text-primary">
                  {category.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-sm text-text-secondary transition hover:border-primary hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
