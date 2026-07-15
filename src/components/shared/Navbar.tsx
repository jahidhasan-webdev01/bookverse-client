"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Container from "./Container";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // TODO: Replace after auth
  const isLoggedIn = false;

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { name: "Add Book", href: "/add-book" },
    { name: "My Books", href: "/my-books" },
  ];

  const links = isLoggedIn
    ? [...publicLinks, ...privateLinks]
    : publicLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-gray-900"
          >
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span>BookVerse</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm font-medium transition-colors duration-300",
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                )}
              >
                {link.name}

                {pathname === link.href && (
                  <motion.div
                    layoutId="active-link"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600"
                  />
                )}
              </Link>
            ))}

            {isLoggedIn ? (
              <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white lg:hidden"
          >
            <Container>
              <nav className="flex flex-col py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "rounded-lg px-3 py-3 text-sm font-medium transition",
                      pathname === link.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                {isLoggedIn ? (
                  <button className="mt-4 rounded-xl bg-red-500 py-2.5 text-sm font-medium text-white">
                    Logout
                  </button>
                ) : (
                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="rounded-xl border border-gray-200 py-2.5 text-center text-sm font-medium"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="rounded-xl bg-blue-600 py-2.5 text-center text-sm font-medium text-white"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}