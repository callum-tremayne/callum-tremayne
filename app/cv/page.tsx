// app/cv/page.tsx
import type { Metadata } from "next";
import { AutoPrint } from "./auto-print";

export const metadata: Metadata = {
  title: "Callum Tremayne — CV",
  robots: { index: false, follow: false }, // optional: keep CV page out of search
};

export default function CVPage() {
  return (
    <main className="cv-page">
      <AutoPrint />
      {/* PAGE 1 */}
      <section className="cv-sheet">
        {/* Header */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">Callum Tremayne</h1>
            <p className="cv-meta">
              Sheffield, South Yorkshire · +44 7701352718 ·
              callum.tremayne@gmail.com
            </p>
            <p className="cv-meta">
              <a href="https://github.com/callum-tremayne/" target="_blank">
                GitHub
              </a>
              {" · "}
              <a
                href="https://www.linkedin.com/in/callum-tremayne/"
                target="_blank"
              >
                LinkedIn
              </a>
              {" · "}
              <a href="https://www.callumtremayne.co.uk/" target="_blank">
                Portfolio
              </a>
            </p>
          </div>
        </header>

        {/* Profile */}
        <section className="cv-section">
          <h2 className="cv-h2">Profile</h2>
          <p className="cv-p">
            Full-Stack Developer with experience delivering large-scale
            enterprise web platforms and independently building modern,
            production-ready applications.
          </p>
          <p className="cv-p">
            Currently contributing to a high-traffic institutional website built
            on C# ASP.NET MVC, React, Sitecore CMS, and Solr. Experienced in
            structured content architecture, component-driven development, API
            integrations, performance optimisation, and CI/CD workflows within
            collaborative agile teams.
          </p>
          <p className="cv-p">
            Alongside enterprise development, I design and deploy modern
            full-stack applications using Next.js, TypeScript, and
            PostgreSQL-based backends, taking end-to-end ownership from system
            design and data modelling through to deployment and optimisation.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="cv-section">
          <h2 className="cv-h2">Technical Skills</h2>
          <div className="cv-skill-grid">
            <div className="cv-skill-block">
              <h3 className="cv-h3">Enterprise Architecture</h3>
              <p className="cv-p">
                C# · ASP.NET MVC · Mobile App Development · Sitecore CMS · Solr
                · React · Sass
              </p>
            </div>
            <div className="cv-skill-block">
              <h3 className="cv-h3">Modern Full-Stack</h3>
              <p className="cv-p">
                Next.js · TypeScript · Node.js · PostgreSQL · Supabase ·
                Tailwind CSS · Payload CMS · REST APIs
              </p>
            </div>
            <div className="cv-skill-block">
              <h3 className="cv-h3">Tooling & Workflow</h3>
              <p className="cv-p">
                Git · Jenkins · CI/CD · Jira · Confluence · Agile/Scrum ·
                Component-driven architecture
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="cv-section">
          <h2 className="cv-h2">Professional Experience</h2>

          <article className="cv-role">
            <div className="cv-role-top">
              <div>
                <h3 className="cv-role-title">Digital Developer</h3>
                <p className="cv-role-org">Leeds Beckett University</p>
              </div>
              <p className="cv-role-dates">2022 – Present</p>
            </div>

            <p className="cv-p">
              Contribute to the development and evolution of a large-scale
              institutional website within a Sitecore CMS environment built on
              ASP.NET MVC and React.
            </p>

            <ul className="cv-ul">
              <li>
                Develop and maintain modular Razor and React components within
                structured CMS architecture.
              </li>
              <li>
                Delivered a full institutional website rebrand, translating a
                new design system into scalable, production-ready components.
              </li>
              <li>
                Refactored legacy UI components to align with accessibility and
                performance standards.
              </li>
              <li>
                Designed and implemented a modern UCAS Tariff Calculator
                integrating the UCAS API, improving responsiveness and
                usability.
              </li>
              <li>
                Implemented a Safe Quick Exit feature for safeguarding pages,
                prioritising privacy-aware browser behaviour.
              </li>
              <li>
                Collaborate on mobile app evolution with the App Account Manager
                and third-party partners (feature scoping, UX improvements,
                releases).
              </li>
              <li>
                Work within agile delivery using Jira/Confluence and CI/CD
                workflows using Git and Jenkins.
              </li>
            </ul>
          </article>

          <article className="cv-role">
            <div className="cv-role-top">
              <div>
                <h3 className="cv-role-title">Founder - Lead Developer</h3>
                <p className="cv-role-org">Tremayne Digital Solutions</p>
              </div>
              <p className="cv-role-dates">2026 – Present</p>
            </div>

            <p className="cv-p">
              Design and build modern full-stack applications and selected
              client projects using Next.js, TypeScript, and PostgreSQL-based
              backends.
            </p>

            <ul className="cv-ul">
              <li>
                Designed relational PostgreSQL schemas and structured data
                models for content-driven applications.
              </li>
              <li>
                Implemented dynamic routing systems with unique identifier
                generation and production-ready deployment flows.
              </li>
              <li>
                Integrated authentication, secure data handling, and cloud
                storage for media-heavy pages.
              </li>
              <li>
                Deployed and optimised applications via Vercel with performance
                and SEO considerations.
              </li>
            </ul>
          </article>
        </section>

        <footer className="cv-footer">
          <span>Callum Tremayne — CV</span>
          <span className="cv-muted">Page 1</span>
        </footer>
      </section>

      {/* PAGE BREAK */}
      <div className="cv-page-break" />

      {/* PAGE 2 */}
      <section className="cv-sheet">
        {/* Selected Projects */}
        <section className="cv-section">
          <h2 className="cv-h2">Selected Projects</h2>

          <article className="cv-project">
            <div className="cv-project-top">
              <h3 className="cv-role-title">Heartfelt Pages</h3>
              <span className="cv-tag">Next.js · Supabase</span>
            </div>
            <p className="cv-p">
              Full-stack digital platform generating dynamic personalised
              webpages.
            </p>
            <ul className="cv-ul">
              <li>
                Designed PostgreSQL schema for structured content storage and
                media relationships.
              </li>
              <li>Implemented dynamic routing with unique page identifiers.</li>
              <li>
                Integrated secure form submission, authentication patterns, and
                storage workflows.
              </li>
              <li>Deployed via Vercel with performance optimisation.</li>
            </ul>
          </article>

          <article className="cv-project">
            <div className="cv-project-top">
              <h3 className="cv-role-title">Project Exit</h3>
              <span className="cv-tag">Next.js · Tailwind</span>
            </div>
            <p className="cv-p">
              High-performance marketing landing page built with modular
              architecture.
            </p>
            <ul className="cv-ul">
              <li>
                Designed reusable component system and responsive layout
                patterns.
              </li>
              <li>
                Optimised accessibility and performance for a clean
                conversion-focused experience.
              </li>
            </ul>
          </article>

          <article className="cv-project">
            <div className="cv-project-top">
              <h3 className="cv-role-title">Talent Finder (In Progress)</h3>
              <span className="cv-tag">Data modelling · Search</span>
            </div>
            <p className="cv-p">
              Database-driven recruitment platform focused on scalable search
              architecture.
            </p>
            <ul className="cv-ul">
              <li>
                Designing relational schema for filtering, indexing, and
                extensible candidate attributes.
              </li>
              <li>
                Planning modular API structure to support future expansion.
              </li>
            </ul>
          </article>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-h2">Education</h2>
          <div className="cv-edu">
            <div>
              <h3 className="cv-role-title">MSc Computing</h3>
              <p className="cv-muted">Sheffield Hallam University</p>
            </div>
            <p className="cv-muted">2018 – 2022</p>
          </div>
          <div className="cv-edu">
            <div>
              <h3 className="cv-role-title">
                BSc Information Technology with Business Studies (First Class
                Honours)
              </h3>
              <p className="cv-muted">Sheffield Hallam University</p>
            </div>
            <p className="cv-muted">2018 – 2022</p>
          </div>
        </section>

        {/* Earlier Experience (Condensed) */}
        <section className="cv-section">
          <h2 className="cv-h2">Earlier Experience</h2>

          <div className="cv-compact-role">
            <div>
              <span className="cv-compact-title">Bar Manager</span>
              <span className="cv-muted"> — Kettle Black</span>
            </div>
            <span className="cv-muted">2019 – 2022</span>
          </div>
          <ul className="cv-ul cv-ul-compact">
            <li>
              Progressed to management; led daily operations, stock control, and
              team supervision.
            </li>
          </ul>

          <div className="cv-compact-role">
            <div>
              <span className="cv-compact-title">Production Engineer</span>
              <span className="cv-muted"> — Bibby Turboflex</span>
            </div>
            <span className="cv-muted">2013 – 2018</span>
          </div>
          <ul className="cv-ul cv-ul-compact">
            <li>
              Completed apprenticeship; oversaw manufacturing operations and
              reported to senior stakeholders.
            </li>
          </ul>
        </section>

        {/* Additional Info */}
        <section className="cv-section">
          <h2 className="cv-h2">Additional Information</h2>
          <p className="cv-p">Full UK Driving Licence.</p>
        </section>

        <footer className="cv-footer">
          <span>Callum Tremayne — CV</span>
          <span className="cv-muted">Page 2</span>
        </footer>
      </section>
    </main>
  );
}
