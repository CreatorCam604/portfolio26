"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/projects";
import FadeUp from "@/components/FadeUp";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!project) {
    return (
      <main
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              color: "var(--fg-muted)",
              marginBottom: "var(--sp-4)",
            }}
          >
            Project not found.
          </p>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              color: "var(--accent)",
              textDecoration: "none",
              letterSpacing: "var(--ls-wider)",
              textTransform: "uppercase",
            }}
          >
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const canEmbed = !!project.demoEntry && !project.requiresServer;

  return (
    <main style={{ minHeight: "100svh", background: "var(--bg)", paddingTop: "calc(var(--nav-h) + var(--sp-8))" }}>

      {/* Back nav */}
      <div style={{ padding: `0 var(--page-x) var(--sp-7)` }}>
        <FadeUp delay={0}>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--sp-2)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-wider)",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              textDecoration: "none",
              transition: "color var(--dur-base) var(--ease)",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Work
          </Link>
        </FadeUp>
      </div>

      {/* Header */}
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
            <FadeUp delay={0.05}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--sp-3)",
                  marginBottom: "var(--sp-4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-2xs)",
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    background: "var(--accent)",
                    color: "var(--bg)",
                    padding: "3px 10px",
                  }}
                >
                  {project.category}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-2xs)",
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                  }}
                >
                  {project.year}
                </span>
              </div>
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
                {project.title}
              </h1>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)", flexWrap: "wrap" }}>
              {project.demoEntry && !project.requiresServer && (
                <a
                  href={project.demoEntry}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--sp-2)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-xs)",
                    fontWeight: 600,
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    background: "var(--accent)",
                    color: "var(--bg)",
                    padding: "12px 24px",
                    textDecoration: "none",
                    transition: "opacity var(--dur-fast) var(--ease)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                  Open Project
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--sp-2)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-xs)",
                    fontWeight: 600,
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    background: "var(--accent)",
                    color: "var(--bg)",
                    padding: "12px 24px",
                    textDecoration: "none",
                    transition: "opacity var(--dur-fast) var(--ease)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                  Live Site
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--sp-2)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-xs)",
                    fontWeight: 600,
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                    padding: "12px 24px",
                    textDecoration: "none",
                    transition: "border-color var(--dur-base) var(--ease), color var(--dur-base) var(--ease)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                  }}
                >
                  GitHub
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Live embed or screenshot */}
      <section style={{ padding: `var(--sp-9) var(--page-x)` }}>
        {canEmbed ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              border: "1px solid var(--border)",
              minHeight: "600px",
              background: "var(--surface)",
            }}
          >
            {!iframeLoaded && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--surface)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-xs)",
                    letterSpacing: "var(--ls-widest)",
                    textTransform: "uppercase",
                    color: "var(--fg-subtle)",
                  }}
                >
                  Loading…
                </span>
              </div>
            )}
            <iframe
              src={project.demoEntry}
              title={project.title}
              style={{ width: "100%", height: "700px", border: "none", display: "block" }}
              onLoad={() => setIframeLoaded(true)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `var(--sp-3) var(--sp-5)`,
                borderTop: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-2xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                }}
              >
                Live preview
              </span>
              <a
                href={project.demoEntry}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--sp-2)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-2xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color var(--dur-base) var(--ease)",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"}
              >
                Open full screen
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            {project.requiresServer && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(10,10,10,0.72)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-xs)",
                    letterSpacing: "var(--ls-wider)",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    textAlign: "center",
                    maxWidth: "280px",
                  }}
                >
                  This project requires a PHP server to run.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* Project details */}
      <section
        style={{
          padding: `var(--sp-9) var(--page-x)`,
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "var(--sp-9)",
        }}
      >
        <div style={{ gridColumn: "span 2" }}>
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
              About this project
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--fs-lg)",
                color: "var(--fg-muted)",
                lineHeight: "var(--lh-relaxed)",
                maxWidth: "640px",
              }}
            >
              {project.description}
            </p>
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.15}>
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
              Tech Stack
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--sp-2)" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "var(--fs-2xs)",
                    letterSpacing: "var(--ls-wide)",
                    textTransform: "uppercase",
                    border: "1px solid var(--border)",
                    color: "var(--fg-muted)",
                    padding: "4px 10px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Next project */}
      <section style={{ padding: `var(--sp-9) var(--page-x) var(--sp-11)` }}>
        <FadeUp delay={0}>
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-widest)",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              marginBottom: "var(--sp-5)",
            }}
          >
            Next Project
          </p>
        </FadeUp>
        <Link
          href={`/work/${nextProject.id}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            paddingTop: "var(--sp-6)",
            textDecoration: "none",
            transition: "border-color var(--dur-base) var(--ease)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            const title = (e.currentTarget as HTMLElement).querySelector(".next-title") as HTMLElement;
            if (title) title.style.color = "var(--accent)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            const title = (e.currentTarget as HTMLElement).querySelector(".next-title") as HTMLElement;
            if (title) title.style.color = "var(--fg)";
          }}
        >
          <span
            className="next-title"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--fs-3xl)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--fg)",
              lineHeight: "var(--lh-tight)",
              transition: "color var(--dur-base) var(--ease)",
            }}
          >
            {nextProject.title}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "var(--accent)", flexShrink: 0 }}
          >
            <path d="M5 12H19M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
