import Image from "next/image";
import Link from "next/link";
import {
    BookOpen,
    Calendar,
    Star,
    User,
    ArrowRight,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { getBook, getBooks } from "@/services/book.service";
import { IBook } from "@/types/book";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookDetailsPage({ params }: Props) {
    const { id } = await params;

    const book: IBook = await getBook(id);
    const books: IBook[] = await getBooks();

    const relatedBooks = books
        .filter((item) => item._id !== id)
        .slice(0, 4);

    return (
        <section className="bg-slate-50 py-16">
            <Container>
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* ================= LEFT ================= */}
                    <div className="lg:col-span-8">
                        <div className="grid gap-10 lg:grid-cols-2">
                            {/* Cover */}
                            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                    <Image
                                        src={book.coverImage}
                                        alt={book.title}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col justify-center">
                                <span className="mb-3 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                    {book.category}
                                </span>

                                <h1 className="text-4xl font-bold text-gray-900">
                                    {book.title}
                                </h1>

                                <p className="mt-2 flex items-center gap-2 text-gray-600">
                                    <User size={16} />
                                    {book.author}
                                </p>

                                <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                                    <div className="flex items-center gap-2">
                                        <Star
                                            size={18}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                        <span>{book.rating}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <BookOpen size={18} />
                                        <span>{book.pages} Pages</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        <span>{book.publishedYear}</span>
                                    </div>

                                    <div>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${book.status === "Available"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-red-100 text-red-600"
                                                }`}
                                        >
                                            {book.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h2 className="mb-3 text-xl font-semibold text-gray-900">
                                        Description
                                    </h2>

                                    <p className="leading-8 text-gray-600">
                                        {book.description}
                                    </p>
                                </div>

                                <button
                                    disabled={book.status === "Borrowed"}
                                    className={`mt-8 w-fit rounded-xl px-6 py-3 text-sm font-medium transition ${book.status === "Available"
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "cursor-not-allowed bg-gray-300 text-gray-600"
                                        }`}
                                >
                                    {book.status === "Available"
                                        ? "Borrow Book"
                                        : "Already Borrowed"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDEBAR ================= */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900">
                                Related Books
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Explore more books you might enjoy.
                            </p>

                            <div className="mt-6 space-y-4">
                                {relatedBooks.map((item) => (
                                    <Link
                                        key={item._id}
                                        href={`/books/${item._id}`}
                                        className="group flex gap-3 rounded-2xl border border-gray-200 p-3 transition hover:border-blue-500 hover:bg-blue-50"
                                    >
                                        <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl">
                                            <Image
                                                src={item.coverImage}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <span className="w-fit rounded-full bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-700">
                                                {item.category}
                                            </span>

                                            <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-xs text-gray-500">
                                                {item.author}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between pt-3">
                                                <div className="flex items-center gap-1 text-xs">
                                                    <Star
                                                        size={13}
                                                        className="fill-amber-400 text-amber-400"
                                                    />
                                                    <span>{item.rating}</span>
                                                </div>

                                                <ArrowRight
                                                    size={15}
                                                    className="text-blue-600 transition group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    );
}