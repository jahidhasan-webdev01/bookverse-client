"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Home,
    PlusCircle,
    BookOpen,
    User,
    LogOut,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

interface Props {
    closeSidebar?: () => void;
}

const menus = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home,
    },
    {
        title: "Add Book",
        href: "/dashboard/add-book",
        icon: PlusCircle,
    },
    {
        title: "My Books",
        href: "/dashboard/my-books",
        icon: BookOpen,
    }
];

export default function DashboardSidebar({
    closeSidebar,
}: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const { user, logout } = useAuth();

    async function handleLogout() {
        await logout();

        closeSidebar?.();

        router.push("/");
        router.refresh();
    }

    return (
        <div className="flex h-full flex-col bg-white">
            {/* Top */}
            <div className="border-b border-slate-200 px-6 py-6">
                <h2 className="text-xl font-bold text-slate-900">
                    Dashboard
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Welcome back
                </p>
            </div>

            {/* Menu */}
            <nav className="flex-1 space-y-2 p-4">
                {menus.map((item) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() =>
                                closeSidebar?.()
                            }
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                                active
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            <Icon size={18} />

                            {item.title}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="border-t border-slate-200 p-4">
                <div className="mb-4 rounded-xl bg-slate-100 p-4">
                    <p className="font-semibold text-slate-900">
                        {user?.name}
                    </p>

                    <p className="text-xs text-slate-500">
                        {user?.email}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                    <LogOut size={18} />

                    Logout
                </button>
            </div>
        </div>
    );
}