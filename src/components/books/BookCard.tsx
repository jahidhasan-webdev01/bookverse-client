import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, Star } from "lucide-react";

import { IBook } from "@/types/book";

interface Props {
    book: IBook;
}

export default function BookCard({ book }: Props) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4 p-5">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    {book.category}
                </span>

                <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {book.title}
                </h3>

                <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                    {book.shortDescription}
                </p>

                <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-3 text-xs">
                    <div className="flex items-center gap-1 text-gray-600">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span>{book.rating}</span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600">
                        <BookOpen size={14} />
                        <span>{book.pages} Pages</span>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600">
                        <Calendar size={14} />
                        <span>{book.publishedYear}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${book.status === "Available"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-100 text-red-600"
                            }`}
                    >
                        {book.status}
                    </span>

                    <Link
                        href={`/books/${book._id}`}
                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
}