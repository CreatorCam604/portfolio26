"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PRINCIPLES = [
  {
    number: "01",
    title: "Design before you build",
    body: "Every feature starts with a clear problem. I map out the user flow and component architecture before writing a single line of code.",
  },
  {
    number: "02",
    title: "Performance is a feature",
    body: "Fast UIs aren't an afterthought. I profile, lazy-load, and optimise as I go — not at the end of the sprint.",
  },
  {
    number: "03",
    title: "Readable > clever",
    body: "Code is read far more than it's written. I write for the next developer, not for my own satisfaction.",
  },
  {
    number: "04",
    title: "Iterate relentlessly",
    body: "Ship small, measure, improve. I treat every deployed feature as a living experiment, not a finished product.",
  },
];

const STACK = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "PHP", "MySQL", "Supabase"] },
  { label: "Tooling", items: ["Git", "Power BI", "Framer Motion", "Figma"] },
];

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof PRINCIPLES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.07 }}
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "var(--sp-5)",
        paddingBottom: "var(--sp-7)",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "var(--fs-xs)",
          letterSpacing: "var(--ls-wider)",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "var(--sp-3)",
        }}
      >
        {principle.number}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "var(--fs-md)",
          color: "var(--fg)",
          lineHeight: "var(--lh-snug)",
          marginBottom: "var(--sp-3)",
        }}
      >
        {principle.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "var(--fs-sm)",
          color: "var(--fg-muted)",
          lineHeight: "var(--lh-relaxed)",
        }}
      >
        {principle.body}
      </p>
    </motion.div>
  );
}

export default function AboutPage() {
  const stackRef = useRef<HTMLDivElement>(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-80px" });
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <main style={{ minHeight: "100svh", background: "var(--bg)", paddingTop: "calc(var(--nav-h) + var(--sp-9))" }}>

      {/* Two-column layout */}
      <section
        style={{
          padding: `0 var(--page-x) var(--sp-10)`,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(48px, 8vw, 120px)",
          }}
        >
          {/* Left — identity */}
          <div>
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
                About Me
              </p>
            </FadeUp>

            {/* Photo — editorial portrait */}
            <FadeUp delay={0.1}>
              <div
                style={{
                  position: "relative",
                  marginBottom: "var(--sp-7)",
                  display: "inline-block",
                }}
                onMouseEnter={() => setPhotoHovered(true)}
                onMouseLeave={() => setPhotoHovered(false)}
              >
                {/* Offset accent frame */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid var(--accent)",
                    transform: photoHovered ? "translate(10px, 10px)" : "translate(8px, 8px)",
                    transition: "transform 0.4s var(--ease), opacity 0.4s var(--ease)",
                    opacity: photoHovered ? 0.7 : 0.35,
                    zIndex: 0,
                  }}
                />
                {/* Photo wrapper */}
                <div
                  style={{
                    position: "relative",
                    width: "clamp(200px, 28vw, 260px)",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    transform: photoHovered ? "rotate(0deg)" : "rotate(-1.5deg)",
                    transition: "transform 0.5s var(--ease), filter 0.4s var(--ease)",
                    filter: photoHovered ? "grayscale(0%)" : "grayscale(30%)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/images/PersonalPhoto.png"
                    alt="Cameron Brighton"
                    fill
                    className="object-cover"
                    style={{
                      transform: photoHovered ? "scale(1.04)" : "scale(1)",
                      transition: "transform 0.6s var(--ease)",
                    }}
                  />
                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)",
                      opacity: photoHovered ? 1 : 0,
                      transition: "opacity 0.35s var(--ease)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "var(--sp-4)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 800,
                        fontSize: "var(--fs-md)",
                        color: "var(--fg)",
                        letterSpacing: "var(--ls-tight)",
                        display: "block",
                      }}
                    >
                      Cameron Brighton
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "var(--fs-2xs)",
                        letterSpacing: "var(--ls-wider)",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginTop: "var(--sp-1)",
                      }}
                    >
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                {/* Corner label */}
                <div
                  style={{
                    position: "absolute",
                    top: "var(--sp-3)",
                    right: "calc(-1 * var(--sp-3))",
                    transform: "translateX(100%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--sp-1)",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--fs-2xs)",
                      letterSpacing: "var(--ls-wider)",
                      textTransform: "uppercase",
                      color: "var(--fg-subtle)",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    JHB — ZA
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  letterSpacing: "var(--ls-tight)",
                  color: "var(--fg)",
                  lineHeight: "var(--lh-none)",
                  marginBottom: "var(--sp-7)",
                }}
              >
                CAMERON
                <br />
                <span style={{ color: "var(--accent)" }}>BRIGHTON</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--fs-base)",
                  color: "var(--fg-muted)",
                  lineHeight: "var(--lh-relaxed)",
                  maxWidth: "480px",
                  marginBottom: "var(--sp-5)",
                }}
              >
                I&apos;m a passionate aspiring{" "}
                <strong style={{ color: "var(--fg)" }}>Full Stack Developer</strong>{" "}
                and Software Development student at Belgium Campus ITVersity. I love
                building dynamic web applications and exploring the boundaries of
                what the web can do.
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--fs-base)",
                  color: "var(--fg-muted)",
                  lineHeight: "var(--lh-relaxed)",
                  maxWidth: "480px",
                  marginBottom: "var(--sp-7)",
                }}
              >
                Outside of personal projects, I completed an internship at{" "}
                <strong style={{ color: "var(--fg)" }}>Cyber1Solutions</strong>,
                building internal support and access management systems. That
                experience sharpened my instinct for pragmatic, production-ready
                code.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
                {[
                  { key: "Education", val: "BSc Software Development — Belgium Campus ITVersity (3rd year)" },
                  { key: "Location", val: "Johannesburg, South Africa" },
                ].map(({ key, val }) => (
                  <div key={key} style={{ display: "flex", gap: "var(--sp-5)" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "var(--fs-xs)",
                        letterSpacing: "var(--ls-wider)",
                        textTransform: "uppercase",
                        color: "var(--fg-subtle)",
                        flexShrink: 0,
                        paddingTop: "2px",
                        minWidth: "80px",
                      }}
                    >
                      {key}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "var(--fs-xs)",
                        color: "var(--fg-muted)",
                        lineHeight: "var(--lh-relaxed)",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
                <div style={{ display: "flex", gap: "var(--sp-5)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "var(--ls-wider)",
                      textTransform: "uppercase",
                      color: "var(--fg-subtle)",
                      flexShrink: 0,
                      paddingTop: "2px",
                      minWidth: "80px",
                    }}
                  >
                    Status
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "var(--ls-wider)",
                      color: "var(--accent)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--sp-2)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                    Open to opportunities
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — how I work */}
          <div>
            <FadeUp delay={0.15}>
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
                How I Work
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--fs-lg)",
                  color: "var(--fg-muted)",
                  lineHeight: "var(--lh-relaxed)",
                  fontStyle: "italic",
                  marginBottom: "var(--sp-9)",
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "var(--sp-5)",
                }}
              >
                &ldquo;Build sharp products, write clean systems, and obsess over
                the user experience until it feels effortless.&rdquo;
              </p>
            </FadeUp>

            <div>
              {PRINCIPLES.map((p, i) => (
                <PrincipleCard key={p.number} principle={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section
        ref={stackRef}
        style={{ padding: `var(--sp-10) var(--page-x)`, borderBottom: "1px solid var(--border)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={stackInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--fs-xs)",
            letterSpacing: "var(--ls-widest)",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            marginBottom: "var(--sp-8)",
          }}
        >
          Tech Stack
        </motion.p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--sp-9)",
          }}
        >
          {STACK.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={stackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: gi * 0.1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginBottom: "var(--sp-4)",
                }}
              >
                {group.label}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "var(--fs-sm)",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: `var(--sp-11) var(--page-x)` }}>
        <div style={{ maxWidth: "640px" }}>
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
            Work with me
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "var(--fs-3xl)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--fg)",
              lineHeight: "var(--lh-tight)",
              marginBottom: "var(--sp-8)",
            }}
          >
            Let&apos;s build something sharp.
          </h2>
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
        </div>
      </section>
    </main>
  );
}
