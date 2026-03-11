"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/work/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: (index % 2) * 0.1,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          background: "var(--surface)",
          border: `1px solid ${hovered ? "var(--border)" : "var(--border-muted)"}`,
          aspectRatio: "16/9",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 80px var(--accent-dim), 0 8px 32px rgba(0,0,0,0.5)"
            : "0 2px 16px rgba(0,0,0,0.3)",
          transition:
            "transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.25s var(--ease)",
        }}
      >
        {/* Full-bleed image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            style={{
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s var(--ease)",
            }}
            onError={() => {}}
          />
          {/* Base overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,10,10,0.42)",
              opacity: hovered ? 0 : 1,
              transition: "opacity 0.4s var(--ease)",
            }}
          />
        </div>

        {/* Hover overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(20px, 3vw, 36px)",
            background: "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.7) 60%, transparent 100%)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {/* Category + year */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-3)",
              marginBottom: "var(--sp-3)",
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
                padding: "3px 8px",
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

          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--fs-2xl)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--fg)",
              lineHeight: "var(--lh-tight)",
              marginBottom: "var(--sp-3)",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "var(--fs-sm)",
              color: "var(--fg-muted)",
              lineHeight: "var(--lh-relaxed)",
              marginBottom: "var(--sp-4)",
              maxWidth: "480px",
            }}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--sp-2)",
              marginBottom: "var(--sp-4)",
            }}
          >
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
                  padding: "2px 8px",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* View project hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-2)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-wider)",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            View Project
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* Default label (no hover) */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "var(--sp-4) clamp(16px, 2.5vw, 28px)",
            background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)",
          }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "var(--fs-lg)",
                letterSpacing: "var(--ls-tight)",
                color: "var(--fg)",
                lineHeight: "var(--lh-tight)",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--fs-2xs)",
                letterSpacing: "var(--ls-wider)",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
                flexShrink: 0,
                marginLeft: "var(--sp-4)",
              }}
            >
              {project.year}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
