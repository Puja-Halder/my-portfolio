
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Puja Halder</span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-text-secondary sm:text-2xl">
            Frontend Developer & CSE Student
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary">
            I enjoy building responsive and user-friendly web applications.
            I work with modern web technologies and continuously explore new
            tools to improve my development skills.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download="Puja-Halder-CV.pdf"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-primary hover:bg-primary/10"
            >
              Download CV
              <FiDownload />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href="https://github.com/Puja-Halder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary transition hover:text-primary"
            >
              <FiGithub size={20} />
              Visit my GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/puja-halder-piya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary transition hover:text-primary"
            >
              <FiLinkedin size={20} />
              Visit my LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />

            <img
              src="/images/profile.png"
              alt="Puja Halder"
              className="relative h-72 w-72 rounded-full border-4 border-primary/50 object-cover shadow-2xl sm:h-96 sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
