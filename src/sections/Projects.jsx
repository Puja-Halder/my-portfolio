
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What I have worked on
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-primary">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-secondary">
            Here are some of the projects I have built or am currently
            developing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="h-56 overflow-hidden bg-surface-light">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-7">
                <p className="mb-3 text-sm font-medium text-primary">
                  {project.category}
                </p>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-text-secondary">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    View Details
                    <FiArrowUpRight />
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-primary"
                    >
                      <FiGithub size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
