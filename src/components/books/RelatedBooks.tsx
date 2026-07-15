import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { IBook } from "@/types/book";

interface RelatedBooksProps {
    books: IBook[];
}

export default function RelatedBooks({
    books,
}: RelatedBooksProps) {
    if (!books.length) {
        return (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <p className="text-sm text-gray-500">
                    No related books found.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {books.map((book) => (
                <Link
                    key={book._id}
                    href={`/books/${book._id}`}
                    className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                >
                    {/* Cover */}
                    <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col">
                        <span className="w-fit rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-600">
                            {book.category}
                        </span>

                        <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                            {book.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                            {book.author}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-3">
                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={12}
                                        className="fill-amber-400 text-amber-400"
                                    />
                                    <span>{book.rating}</span>
                                </div>

                                <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${book.status === "Available"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {book.status}
                                </span>
                            </div>

                            <ArrowRight
                                size={16}
                                className="text-blue-600 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}