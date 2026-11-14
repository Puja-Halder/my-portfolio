
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Let's connect
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contact <span className="text-primary">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-secondary">
            Have a project idea or want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-surface p-5">
              <div className="rounded-lg bg-primary/15 p-3 text-primary">
                <FiMail size={22} />
              </div>

              <div>
                <p className="text-sm text-text-secondary">Email</p>
                <a
                  href="mailto:pujahalderpiya@gmail.com"
                  className="font-medium text-white hover:text-primary"
                >
                  pujahalderpiya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-surface p-5">
              <div className="rounded-lg bg-primary/15 p-3 text-primary">
                <FiPhone size={22} />
              </div>

              <div>
                <p className="text-sm text-text-secondary">Phone</p>
                <a
                  href="tel:01911183355"
                  className="font-medium text-white hover:text-primary"
                >
                  01911183355
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-surface p-5">
              <div className="rounded-lg bg-primary/15 p-3 text-primary">
                <FiMapPin size={22} />
              </div>

              <div>
                <p className="text-sm text-text-secondary">Location</p>
                <p className="font-medium text-white">
                  Digraj, Mongla, Bagerhat
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Puja-Halder"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-white/10 p-3 text-text-secondary transition hover:border-primary hover:text-primary"
              >
                <FiGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/puja-halder-piya"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/10 p-3 text-text-secondary transition hover:border-primary hover:text-primary"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Let's work together
            </h3>

            <p className="mb-7 leading-7 text-text-secondary">
              I am interested in web development, learning new technologies,
              and collaborating on meaningful projects. You can contact me
              directly through email.
            </p>

            <a
              href="mailto:pujahalderpiya@gmail.com?subject=Portfolio%20Contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Send Me an Email
              <FiSend />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
