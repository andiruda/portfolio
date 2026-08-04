export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-section__inner">
        <div>
          <p className="eyebrow">Let’s build what matters</p>
          <h2>Have a hard platform problem?</h2>
          <p className="contact-section__copy">
            I’m exploring Senior Engineering Manager and Director-level roles with teams
            building consequential SaaS, platform, fintech, analytics, or AI products.
          </p>
        </div>
        <div className="contact-section__actions">
          <a
            href="mailto:andiruda@gmail.com?subject=Let%27s%20talk%20about%20engineering%20leadership"
            className="contact-email"
          >
            <span>Start a conversation</span>
            <strong>andiruda@gmail.com</strong>
            <span className="contact-email__arrow" aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/andiruda/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/andiruda" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
