"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

import Container from "../shared/Container";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: "4.9",
    image: "/books/atomic-habits.jpg",
    rotate: "-rotate-6",
    position: "left-0 top-5",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: "4.8",
    image: "/books/psychology-of-money.jpg",
    rotate: "rotate-6",
    position: "right-0 top-24",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    rating: "4.7",
    image: "/books/deep-work.jpg",
    rotate: "-rotate-3",
    position: "left-12 bottom-0",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

      <Container>
        <div className="grid min-h-[65vh] items-center gap-16 py-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              📚 Your Personal Digital Library
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Discover
              <span className="text-blue-600"> Books</span>,
              <br />
              Build Your Library.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600">
              Organize your favorite books, discover new titles, and manage your
              personal reading collection with a clean and modern library
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Books
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/add-book"
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
              >
                Add Book
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <div className="relative hidden h-[450px] lg:block">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`group absolute w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg ${book.rotate} ${book.position}`}
              >
                <div className="relative h-56 overflow-hidden rounded-xl">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    priority
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {book.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">{book.author}</p>

                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {book.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="pb-5"
        >
          <ChevronDown
            className="mx-auto text-gray-400"
            size={24}
          />
        </motion.div>
      </Container>
    </section>
  );
}