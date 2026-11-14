
import { Link, useParams } from "react-router";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Project Not Found
          </h1>

          <Link
            to="/#projects"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary-dark"
          >
            <FiArrowLeft />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-text-secondary transition hover:text-primary"
        >
          <FiArrowLeft />
          Go Back to Projects
        </Link>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
          <div className="flex w-full items-center justify-center overflow-hidden bg-surface-light p-3">
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="h-auto max-h-[650px] w-full object-contain"
            />
          </div>

          <div className="p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {project.category}
            </p>

            <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
              {project.title}
            </h1>

            <h2 className="mb-4 text-2xl font-bold text-white">
              About the Project
            </h2>

            <p className="leading-8 text-text-secondary">
              {project.description}
            </p>

            <div className="mt-10">
              <h2 className="mb-5 text-2xl font-bold text-white">
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-5 text-2xl font-bold text-white">
                Challenges
              </h2>

              <ul className="list-inside list-disc space-y-3 text-text-secondary">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="mb-5 text-2xl font-bold text-white">
                Future Improvements
              </h2>

              <ul className="list-inside list-disc space-y-3 text-text-secondary">
                {project.futureImprovements.map((improvement) => (
                  <li key={improvement}>{improvement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-8">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-dark"
                >
                  Live Project
                  <FiExternalLink />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-primary hover:text-primary"
                >
                  <FiGithub />
                  {project.serverGithubLink
                    ? "Client Repository"
                    : "GitHub Repository"}
                </a>
              )}

              {project.serverGithubLink && (
                <a
                  href={project.serverGithubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-primary hover:text-primary"
                >
                  <FiGithub />
                  Server Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
