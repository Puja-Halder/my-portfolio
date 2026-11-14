
import {
  FiCode,
  FiBookOpen,
  FiTarget,
  FiCpu,
} from "react-icons/fi";

function About() {
  const highlights = [
    {
      icon: <FiCode size={24} />,
      title: "Web Development",
      description:
        "Building responsive web applications using React, Next.js, Express.js, and modern web technologies.",
    },
    {
      icon: <FiCpu size={24} />,
      title: "AI & Image Processing",
      description:
        "Exploring Artificial Intelligence, Machine Learning, and basic image processing concepts.",
    },
    {
      icon: <FiBookOpen size={24} />,
      title: "Continuous Learning",
      description:
        "Learning new technologies, solving problems, and continuously improving my development skills.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-8 text-text-secondary">
            I am a fourth-year Computer Science and Engineering student
            passionate about technology and software development. I enjoy
            building responsive, user-friendly web applications and turning
            ideas into practical digital solutions.
          </p>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            My development journey includes working with technologies such
            as JavaScript, React, Next.js, Node.js, Express.js, and MongoDB.
            I am also interested in Artificial Intelligence, Machine
            Learning, and image processing. I enjoy learning new concepts,
            taking on challenges, and improving my technical skills through
            academic and personal projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface p-7 transition hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/15 p-3 text-primary">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
