"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="flex">
                {/* Desktop Sidebar */}
                <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
                    <DashboardSidebar />
                </aside>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() =>
                                    setSidebarOpen(false)
                                }
                                className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                            />

                            {/* Drawer */}
                            <motion.aside
                                initial={{ x: -280 }}
                                animate={{ x: 0 }}
                                exit={{ x: -280 }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                }}
                                className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-slate-200 bg-white shadow-xl lg:hidden"
                            >
                                <DashboardSidebar
                                    closeSidebar={() =>
                                        setSidebarOpen(false)
                                    }
                                />
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <div className="flex min-h-screen flex-1 flex-col">

                    {/* Mobile Header Only */}
                    <div className="lg:hidden">
                        <DashboardHeader
                            onMenuClick={() => setSidebarOpen(true)}
                        />
                    </div>

                    <main className="flex-1 p-5 lg:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}