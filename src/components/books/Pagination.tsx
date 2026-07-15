"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    page: number;
    totalPage: number;
}

export default function Pagination({
    page,
    totalPage,
}: Props) {
    const router = useRouter();
    const params = useSearchParams();

    const go = (p: number) => {
        const query = new URLSearchParams(params);

        query.set("page", String(p));

        router.push(`/books?${query.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPage }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => go(i + 1)}
                    className={`h-10 w-10 rounded-xl text-sm ${page === i + 1
                            ? "bg-blue-600 text-white"
                            : "border"
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}