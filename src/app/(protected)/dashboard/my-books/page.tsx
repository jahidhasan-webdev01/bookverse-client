import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { IBook } from "@/types/book";
import { getMyBooks } from "@/services/book.server.service";
import DeleteBookButton from "@/components/dashboard/DeleteBookButton";


export default async function MyBooksPage() {

    const books: IBook[] = await getMyBooks();


    return (
        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        My Books
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Manage all books you&apos;ve added.
                    </p>
                </div>


                <Link
                    href="/dashboard/add-book"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                    <PlusCircle size={18} />
                    Add Book
                </Link>

            </div>



            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">

                <table className="w-full text-left">

                    <thead className="border-b border-slate-200 bg-slate-50">

                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold">
                                Title
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold">
                                Author
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold">
                                Category
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold">
                                Rating
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold">
                                Status
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold">
                                Action
                            </th>
                        </tr>

                    </thead>



                    <tbody>

                        {
                            books.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan={6}
                                        className="py-10 text-center text-slate-500"
                                    >
                                        No books found
                                    </td>
                                </tr>

                            ) : (

                                books.map((book) => (

                                    <tr
                                        key={book._id}
                                        className="border-b border-slate-100 last:border-none"
                                    >

                                        <td className="px-6 py-4 font-medium">
                                            {book.title}
                                        </td>


                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {book.author}
                                        </td>


                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {book.category}
                                        </td>


                                        <td className="px-6 py-4 text-sm">
                                            ⭐ {book.rating}
                                        </td>


                                        <td className="px-6 py-4">

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    book.status === "Available"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                            >
                                                {book.status}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4">

                                            <DeleteBookButton
                                                id={book._id}
                                            />

                                        </td>

                                    </tr>

                                ))

                            )
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}