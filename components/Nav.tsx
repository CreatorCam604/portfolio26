"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setHidden(currentY > lastY && currentY > 80);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <motion.nav
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: scrolled ? "60px" : "var(--nav-h)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 var(--page-x)`,
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 1px 0 0 var(--border-muted)" : "none",
        transition: "height 0.3s var(--ease), background 0.3s var(--ease), border-color 0.3s var(--ease)",
      }}
    >
      {/* Accent top-border on scroll */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "var(--accent)",
            transformOrigin: "left",
            opacity: 0.5,
          }}
        />
      )}

      {/* Wordmark */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontWeight: 600,
          fontSize: "var(--fs-sm)",
          letterSpacing: "0.2em",
          color: "var(--accent)",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        CB
      </Link>

      {/* Links */}
      <ul style={{ display: "flex", alignItems: "center", gap: "var(--sp-8)", listStyle: "none" }}>
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  position: "relative",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "var(--ls-wider)",
                  textTransform: "uppercase",
                  color: active ? "var(--accent)" : "var(--fg-muted)",
                  textDecoration: "none",
                  transition: `color var(--dur-base) var(--ease)`,
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)"; }}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "var(--accent)",
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <a
        href="mailto:cameronbrighton240@gmail.com"
        style={{
          display: "none",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "var(--fs-xs)",
          letterSpacing: "var(--ls-wider)",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          border: "1px solid var(--border)",
          padding: "8px 18px",
          textDecoration: "none",
          transition: `color var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease), background var(--dur-base) var(--ease)`,
        }}
        className="md:inline-flex items-center gap-2"
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--bg)";
          el.style.background = "var(--accent)";
          el.style.borderColor = "var(--accent)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--fg-muted)";
          el.style.background = "transparent";
          el.style.borderColor = "var(--border)";
        }}
      >
        Hire me
      </a>
    </motion.nav>
  );
}
