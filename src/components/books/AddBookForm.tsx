"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Loader2, PlusCircle } from "lucide-react";

import { createBook } from "@/services/book.service";

export default function AddBookForm() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const form = e.currentTarget;

        const data = {
            title: (form.elements.namedItem("title") as HTMLInputElement).value,
            author: (form.elements.namedItem("author") as HTMLInputElement).value,
            category: (form.elements.namedItem("category") as HTMLSelectElement).value,
            shortDescription: (
                form.elements.namedItem("shortDescription") as HTMLTextAreaElement
            ).value,
            description: (
                form.elements.namedItem("description") as HTMLTextAreaElement
            ).value,
            publishedYear: Number(
                (form.elements.namedItem("publishedYear") as HTMLInputElement).value
            ),
            pages: Number(
                (form.elements.namedItem("pages") as HTMLInputElement).value
            ),
            rating: Number(
                (form.elements.namedItem("rating") as HTMLInputElement).value
            ),
            status: (form.elements.namedItem("status") as HTMLSelectElement).value,
            coverImage: (
                form.elements.namedItem("coverImage") as HTMLInputElement
            ).value,
        };

        try {
            setLoading(true);

            await createBook(data);

            toast.success("Book added successfully!");

            router.push("/books");
            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to add book"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
        >
            <div className="mb-8">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Dashboard
                </span>

                <h1 className="mt-3 text-3xl font-bold text-gray-900">
                    Add New Book
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Fill in the information below to publish a new book.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div className="grid gap-5 md:grid-cols-2">
                    <Input
                        label="Book Title"
                        name="title"
                    />

                    <Input
                        label="Author"
                        name="author"
                    />

                    <Select
                        label="Category"
                        name="category"
                        options={[
                            "Programming",
                            "Finance",
                            "Business",
                            "Science",
                            "Novel",
                            "History",
                            "Self Help",
                        ]}
                    />

                    <Input
                        label="Cover Image URL"
                        name="coverImage"
                    />

                    <Input
                        label="Published Year"
                        name="publishedYear"
                        type="number"
                    />

                    <Input
                        label="Pages"
                        name="pages"
                        type="number"
                    />

                    <Input
                        label="Rating"
                        name="rating"
                        type="number"
                    />

                    <Select
                        label="Status"
                        name="status"
                        options={[
                            "Available",
                            "Borrowed",
                        ]}
                    />
                </div>

                <Textarea
                    label="Short Description"
                    name="shortDescription"
                    rows={3}
                />

                <Textarea
                    label="Description"
                    name="description"
                    rows={6}
                />

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                            Adding Book...
                        </>
                    ) : (
                        <>
                            <PlusCircle size={18} />
                            Add Book
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
}

function Input({
    label,
    name,
    type = "text",
}: {
    label: string;
    name: string;
    type?: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </label>

            <input
                required
                name={name}
                type={type}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
}

function Textarea({
    label,
    name,
    rows,
}: {
    label: string;
    name: string;
    rows: number;
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </label>

            <textarea
                required
                name={name}
                rows={rows}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
}

function Select({
    label,
    name,
    options,
}: {
    label: string;
    name: string;
    options: string[];
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-medium text-gray-700">
                {label}
            </label>

            <select
                required
                name={name}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}