import Link from "next/link";

import { getBooks } from "@/services/book.service";
import { IBook } from "@/types/book";

import BookCard from "../books/BookCard";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

export default async function FeaturedBooks() {
    const { data: books } = await getBooks({
        limit: 8,
    });

    if (!books.length) {
        return (
            <section className="bg-white py-20">
                <Container>
                    <SectionTitle
                        badge="Featured"
                        title="Featured Books"
                        description="Explore our latest collection of books from different categories."
                    />

                    <div className="rounded-2xl border border-dashed border-gray-300 bg-slate-50 py-16 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                            No books available
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            There are no books to display right now. Please check back later.
                        </p>

                        <Link
                            href="/add-book"
                            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Add Your First Book
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="bg-white py-20">
            <Container>
                <SectionTitle
                    badge="Featured"
                    title="Featured Books"
                    description="Explore our latest collection of books from different categories."
                />

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {books.map((book: IBook) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/books"
                        className="rounded-xl border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        View All Books
                    </Link>
                </div>
            </Container>
        </section>
    );
}