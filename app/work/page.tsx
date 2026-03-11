"use client";

import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <main style={{ minHeight: "100svh", background: "var(--bg)", paddingTop: "calc(var(--nav-h) + var(--sp-9))" }}>

      {/* Page header */}
      <section
        style={{
          padding: `0 var(--page-x) var(--sp-9)`,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "var(--sp-7)",
          }}
        >
          <div>
            <FadeUp delay={0}>
              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-widest)",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  marginBottom: "var(--sp-4)",
                }}
              >
                Selected Work
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "var(--fs-4xl)",
                  letterSpacing: "var(--ls-tight)",
                  color: "var(--fg)",
                  lineHeight: "var(--lh-none)",
                }}
              >
                WORK
              </h1>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--sp-3)",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-wider)",
                  color: "var(--fg-muted)",
                }}
              >
                {projects.length} projects
              </span>
              <div style={{ display: "flex", gap: "var(--sp-2)", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--fs-2xs)",
                      letterSpacing: "var(--ls-wider)",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      border: "1px solid var(--border)",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Project grid */}
      <section style={{ padding: `var(--sp-9) var(--page-x)` }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "var(--sp-5)",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          padding: `var(--sp-11) var(--page-x)`,
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--sp-7)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-widest)",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              marginBottom: "var(--sp-4)",
            }}
          >
            Have a project in mind?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--fs-3xl)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--fg)",
              lineHeight: "var(--lh-tight)",
            }}
          >
            Let&apos;s build together.
          </h2>
        </div>
        <a
          href="mailto:cameronbrighton240@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--sp-3)",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--fs-xs)",
            fontWeight: 600,
            letterSpacing: "var(--ls-wider)",
            textTransform: "uppercase",
            background: "var(--accent)",
            color: "var(--bg)",
            padding: "16px 32px",
            textDecoration: "none",
            transition: "opacity var(--dur-fast) var(--ease), transform var(--dur-base) var(--ease)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.opacity = "0.88";
            (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
            (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
          }}
        >
          Get in touch
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>
    </main>
  );
}
