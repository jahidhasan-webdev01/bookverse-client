import BookCard from "@/components/books/BookCard";
import BookFilters from "@/components/books/BookFilters";
import Pagination from "@/components/books/Pagination";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

import { getBooks } from "@/services/book.service";

interface Props {
    searchParams: Promise<{
        searchTerm?: string;
        category?: string;
        status?: string;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
        page?: string;
    }>;
}

export default async function BooksPage({
    searchParams,
}: Props) {
    const params = await searchParams;

    const result = await getBooks({
        searchTerm: params.searchTerm,
        category: params.category,
        status: params.status,
        sortBy: params.sortBy,
        sortOrder: params.sortOrder,
        page: Number(params.page || 1),
        limit: 8,
    });

    const books = result.data;
    const meta = result.meta;

    return (
        <section className="bg-slate-50 py-16">
            <Container>
                <SectionTitle
                    badge="Library"
                    title="Our Book Collection"
                    description="Discover inspiring books across different categories and find your next great read."
                />

                <BookFilters />

                {!books.length ? (
                    <div className="rounded-2xl border border-gray-200 bg-white py-20 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                            No books found
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Try changing your search or filters.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {books.map((book) => (
                                <BookCard
                                    key={book._id}
                                    book={book}
                                />
                            ))}
                        </div>

                        <Pagination
                            page={meta.page}
                            totalPage={meta.totalPage}
                        />
                    </>
                )}
            </Container>
        </section>
    );
}