"use client";

import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { deleteBook } from "@/services/book.service";


export default function DeleteBookButton({
    id,
}: {
    id: string;
}) {

    const router = useRouter();


    async function handleDelete() {

        const confirmDelete =
            confirm(
                "Are you sure you want to delete this book?"
            );


        if (!confirmDelete) return;


        try {

            await deleteBook(id);


            toast.success(
                "Book deleted successfully"
            );


            router.refresh();


        } catch (error) {

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Delete failed"
            );

        }
    }


    return (
        <button
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
            <Trash2 size={16} />

            Delete
        </button>
    );
}