
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#home" className="text-xl font-bold text-white">
          Puja<span className="text-primary">.</span>
        </a>

        <p className="text-center text-sm text-text-secondary">
          © {new Date().getFullYear()} Puja Halder. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Puja-Halder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition hover:text-primary"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/puja-halder-piya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition hover:text-primary"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="mailto:pujahalderpiya@gmail.com"
            aria-label="Email"
            className="text-text-secondary transition hover:text-primary"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
