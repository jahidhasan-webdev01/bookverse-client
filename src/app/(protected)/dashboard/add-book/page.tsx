import AddBookForm from "@/components/books/AddBookForm";

export default function AddBookPage() {
    return (
        <div className="space-y-6">
            <div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Dashboard
                </span>

                <h1 className="mt-3 text-3xl font-bold text-slate-900">
                    Add New Book
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Fill in the details below to add a new book to the library.
                </p>
            </div>

            <AddBookForm />
        </div>
    );
}