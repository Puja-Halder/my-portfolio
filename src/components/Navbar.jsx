
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-background/90 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-wide text-white"
        >
          Puja<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Puja-Halder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-primary"
          >
            <FiGithub size={17} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/puja-halder-piya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-primary"
          >
            <FiLinkedin size={17} />
            LinkedIn
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-surface px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-text-secondary transition hover:text-primary"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">
              <a
                href="https://github.com/Puja-Halder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm text-white transition hover:bg-primary"
              >
                <FiGithub size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/puja-halder-piya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm text-white transition hover:bg-primary"
              >
                <FiLinkedin size={17} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
