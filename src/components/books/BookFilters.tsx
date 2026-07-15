"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function BookFilters() {
    const router = useRouter();
    const params = useSearchParams();

    const updateQuery = (key: string, value: string) => {
        const query = new URLSearchParams(params);

        if (value)
            query.set(key, value);
        else
            query.delete(key);

        if (key !== "page")
            query.delete("page");

        router.push(`/books?${query.toString()}`);
    };

    return (
        <div className="mb-10 grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 lg:grid-cols-4">
            <div className="relative">
                <Search
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={18}
                />

                <input
                    defaultValue={params.get("searchTerm") || ""}
                    placeholder="Search books..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            updateQuery(
                                "searchTerm",
                                e.currentTarget.value
                            );
                    }}
                    className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-blue-500"
                />
            </div>

            <select
                defaultValue={params.get("category") || ""}
                onChange={(e) =>
                    updateQuery("category", e.target.value)
                }
                className="rounded-xl border border-gray-200 px-4 text-sm"
            >
                <option value="">All Categories</option>
                <option>Finance</option>
                <option>Programming</option>
                <option>Self Help</option>
                <option>Novel</option>
            </select>

            <select
                defaultValue={params.get("status") || ""}
                onChange={(e) =>
                    updateQuery("status", e.target.value)
                }
                className="rounded-xl border border-gray-200 px-4 text-sm"
            >
                <option value="">All Status</option>
                <option>Available</option>
                <option>Borrowed</option>
            </select>

            <select
                defaultValue={
                    `${params.get("sortBy")}-${params.get("sortOrder")}`
                }
                onChange={(e) => {
                    const [sortBy, sortOrder] =
                        e.target.value.split("-");

                    updateQuery("sortBy", sortBy);
                    updateQuery("sortOrder", sortOrder);
                }}
                className="rounded-xl border border-gray-200 px-4 text-sm"
            >
                <option value="createdAt-desc">
                    Newest First
                </option>

                <option value="createdAt-asc">
                    Oldest First
                </option>

                <option value="rating-desc">
                    Highest Rated
                </option>

                <option value="publishedYear-desc">
                    Latest Published
                </option>
            </select>
        </div>
    );
}