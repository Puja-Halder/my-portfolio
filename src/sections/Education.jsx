
import { FiBookOpen, FiAward } from "react-icons/fi";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "North Western University",
      period: "2023 – Present",
      result: "Currently in 4th Year",
      icon: <FiBookOpen size={22} />,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Digraj Degree College",
      period: "2022",
      result: "GPA: 4.83",
      icon: <FiAward size={22} />,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Digraj High School",
      period: "2020",
      result: "GPA: 4.33",
      icon: <FiAward size={22} />,
    },
  ];

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            My academic background
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-primary">Education</span>
          </h2>
        </div>

        <div className="relative space-y-6">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-primary/30" />

          {education.map((item) => (
            <div
              key={item.degree}
              className="relative flex gap-5 rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-primary/50"
            >
              <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-7 text-white">
                  {item.degree}
                </h3>

                <p className="mt-2 text-primary">{item.institution}</p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                  <span>{item.period}</span>
                  <span>{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
