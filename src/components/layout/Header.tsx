"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { guideLinks } from "@/lib/constants/guides";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "#", hasDropdown: true },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setGuidesOpen(false);
  }, [pathname]);

  const itineraries = guideLinks.filter((g) => g.category === "itinerary");
  const guides = guideLinks.filter((g) => g.category !== "itinerary");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-piedra/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Cantera arch accent — thin decorative line under nav */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cantera/20 to-transparent" />

      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-obsidiana">
              GUADALAJARA
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cantera">
              itinerary
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setGuidesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setGuidesOpen(false)}
              >
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 font-body text-sm transition-colors duration-200 ${
                      guidesOpen ? "text-cantera" : "text-obsidiana/70 hover:text-obsidiana"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        guidesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-body text-sm transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-cantera"
                        : "text-obsidiana/70 hover:text-obsidiana"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Arch-shaped active indicator */}
                {(pathname === item.href || (item.hasDropdown && guidesOpen)) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-1.5 border-b-2 border-x border-cantera rounded-b-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {guidesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 w-[420px] rounded-lg bg-piedra/98 backdrop-blur-lg border border-obsidiana/8 shadow-lg p-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-cantera mb-2">
                              Itineraries
                            </p>
                            {itineraries.map((g) => (
                              <Link
                                key={g.href}
                                href={g.href}
                                className="block py-1.5 text-sm text-obsidiana/70 hover:text-cantera transition-colors"
                              >
                                {g.label}
                                {g.kicker === "Recommended" && (
                                  <span className="ml-2 text-[10px] font-mono text-tequila">
                                    ★
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-cantera mb-2">
                              Guides
                            </p>
                            {guides.slice(0, 8).map((g) => (
                              <Link
                                key={g.href}
                                href={g.href}
                                className="block py-1.5 text-sm text-obsidiana/70 hover:text-cantera transition-colors"
                              >
                                {g.label}
                              </Link>
                            ))}
                            <Link
                              href="/#guides"
                              className="block pt-2 text-xs font-mono text-cantera hover:text-cantera-dark"
                            >
                              View all →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-obsidiana"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-piedra/98 backdrop-blur-lg border-t border-obsidiana/8"
          >
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block py-2.5 font-heading text-base text-obsidiana"
              >
                Home
              </Link>

              <button
                onClick={() => setGuidesOpen(!guidesOpen)}
                className="flex w-full items-center justify-between py-2.5 font-heading text-base text-obsidiana"
              >
                Guides
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    guidesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {guidesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-0.5 overflow-hidden"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-cantera pt-1 pb-1">
                      Itineraries
                    </p>
                    {itineraries.map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="block py-1.5 text-sm text-obsidiana/70"
                      >
                        {g.label}
                      </Link>
                    ))}
                    <p className="font-mono text-[10px] uppercase tracking-widest text-cantera pt-3 pb-1">
                      Guides
                    </p>
                    {guides.slice(0, 10).map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="block py-1.5 text-sm text-obsidiana/70"
                      >
                        {g.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/about"
                className="block py-2.5 font-heading text-base text-obsidiana"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
