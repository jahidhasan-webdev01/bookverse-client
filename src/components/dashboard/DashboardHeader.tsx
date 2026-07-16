"use client";

import { Menu } from "lucide-react";

interface Props {
    onMenuClick: () => void;
}

export default function DashboardHeader({
    onMenuClick,
}: Props) {
    return (
        <header className="flex h-14 items-center border-b border-slate-200 bg-white px-5">
            <button
                onClick={onMenuClick}
                aria-label="Open sidebar"
                className="text-slate-700 hover:text-blue-600"
            >
                <Menu size={24} />
            </button>
        </header>
    );
}