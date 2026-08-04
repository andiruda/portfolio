"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#ventures", label: "Founder work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMobileMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" className="wordmark" aria-label="Andi Ruda, back to top">
          <span className="wordmark__mark">AR</span>
          <span>
            <strong>Andi Ruda</strong>
            <small>Engineering leader</small>
          </span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${mobileMenuOpen ? "mobile-nav--open" : ""}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
        >
          Open résumé <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
