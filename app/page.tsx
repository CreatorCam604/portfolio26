import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <main style={{ background: "var(--bg)" }}>
      <Hero />

      {/* Featured work — scroll target */}
      <section
        id="featured"
        style={{
          padding: `var(--sp-10) var(--page-x)`,
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "var(--sp-8)",
            flexWrap: "wrap",
            gap: "var(--sp-4)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-widest)",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            Featured Work
          </p>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-wider)",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            View all
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "var(--sp-5)",
          }}
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
