"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const TITLE = ["CAMERON", "BRIGHTON"];
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Ambient glow behind name */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(ellipse at center, rgba(192,255,0,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Diagonal accent stripe */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "38vw",
            height: "130%",
            background: "var(--accent)",
            transform: "rotate(-12deg)",
            transformOrigin: "top right",
            opacity: 0.04,
          }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 1.0 }}
          style={{
            position: "absolute",
            top: "38%",
            right: 0,
            width: "32vw",
            height: "1px",
            background: "var(--accent)",
            transformOrigin: "right",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Top-left tagline */}
      <FadeUp
        delay={0.1}
        style={{
          position: "absolute",
          top: "calc(var(--nav-h) + var(--sp-8))",
          left: "var(--page-x)",
          maxWidth: "320px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--fs-xs)",
            letterSpacing: "var(--ls-wider)",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            lineHeight: "var(--lh-relaxed)",
          }}
        >
          Frontend-focused full stack developer — building sharp, performant digital products.
        </p>
      </FadeUp>

      {/* Top-right stack */}
      <FadeUp
        delay={0.35}
        style={{
          position: "absolute",
          top: "calc(var(--nav-h) + var(--sp-8))",
          right: "var(--page-x)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-2)",
          textAlign: "right",
        }}
      >
        {["React", "Next.js", "TypeScript", "Tailwind"].map((s, i) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-xs)",
              letterSpacing: "var(--ls-wider)",
              textTransform: "uppercase",
              color: i === 0 ? "var(--accent)" : "var(--fg-subtle)",
              transition: `color var(--dur-base) var(--ease)`,
            }}
          >
            {s}
          </span>
        ))}
      </FadeUp>

      {/* Main kinetic name */}
      <div style={{ padding: `0 var(--page-x) var(--sp-9)` }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {TITLE.map((word) => (
            <div key={word} style={{ overflow: "hidden", lineHeight: "var(--lh-none)" }}>
              <motion.h1
                variants={wordVariants}
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 9vw, 9rem)",
                  letterSpacing: "var(--ls-tight)",
                  color: "var(--fg)",
                  lineHeight: "var(--lh-none)",
                  display: "block",
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          style={{
            height: "1px",
            background: "var(--border)",
            margin: `var(--sp-6) 0`,
            transformOrigin: "left",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--sp-5)",
          }}
        >
          <FadeUp delay={0.95}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-4)" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                Full Stack Developer
              </span>
              <span
                style={{
                  width: "1px",
                  height: "16px",
                  background: "var(--border)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                }}
              >
                Johannesburg, ZA
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={1.05}>
            <Link
              href="/work"
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--sp-3)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  fontWeight: 600,
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: "var(--bg)",
                  background: "var(--accent)",
                  padding: "14px 28px",
                  transition: `opacity var(--dur-fast) var(--ease), transform var(--dur-base) var(--ease)`,
                }}
                className="group"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateX(3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeUp
        delay={1.4}
        style={{
          position: "absolute",
          bottom: "var(--sp-6)",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--sp-2)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--sp-2)",
          }}
          aria-label="Scroll to featured work"
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--fs-2xs)",
              letterSpacing: "var(--ls-widest)",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "36px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </button>
      </FadeUp>
    </section>
  );
}
