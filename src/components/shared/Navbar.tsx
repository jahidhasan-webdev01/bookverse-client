"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Menu,
    X,
    BookOpen,
    User,
    LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "./Container";
import { useAuth } from "@/context/AuthContext";


export default function Navbar() {

    const [open, setOpen] = useState(false);

    const {
        user,
        logout,
    } = useAuth();



    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Books",
            href: "/books",
        },
        {
            name: "About",
            href: "/about",
        },
    ];



    return (

        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">

            <Container>

                <div className="flex h-16 items-center justify-between">


                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">

                            <BookOpen size={20}/>

                        </div>


                        <span className="text-lg font-bold text-gray-900">
                            BookVerse
                        </span>

                    </Link>



                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-7 md:flex">


                        {
                            navLinks.map((item)=>(
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
                                >
                                    {item.name}
                                </Link>
                            ))
                        }


                    </nav>




                    {/* Desktop Auth */}
                    <div className="hidden items-center gap-3 md:flex">


                        {
                            user ? (

                                <>

                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-blue-500 hover:text-blue-600"
                                    >

                                        <User size={16}/>

                                        {user.name}

                                    </Link>


                                    <button
                                        onClick={logout}
                                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                    >

                                        <LogOut size={16}/>

                                        Logout

                                    </button>

                                </>


                            ) : (

                                <>

                                    <Link
                                        href="/login"
                                        className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                                    >
                                        Login
                                    </Link>


                                    <Link
                                        href="/register"
                                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                    >
                                        Register
                                    </Link>

                                </>

                            )

                        }


                    </div>





                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-gray-700"
                    >

                        {
                            open
                            ?
                            <X/>
                            :
                            <Menu/>
                        }

                    </button>



                </div>





                {/* Mobile Menu */}
                <AnimatePresence>

                {
                    open && (

                        <motion.div
                            initial={{
                                opacity:0,
                                height:0
                            }}
                            animate={{
                                opacity:1,
                                height:"auto"
                            }}
                            exit={{
                                opacity:0,
                                height:0
                            }}
                            className="overflow-hidden md:hidden"
                        >

                            <div className="space-y-3 border-t border-gray-100 py-5">


                                {
                                    navLinks.map((item)=>(
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={()=>setOpen(false)}
                                            className="block text-sm font-medium text-gray-600 hover:text-blue-600"
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                }



                                {
                                    user ? (

                                        <>

                                            <Link
                                                href="/dashboard"
                                                className="block text-sm font-medium text-blue-600"
                                            >
                                                Dashboard
                                            </Link>


                                            <button
                                                onClick={logout}
                                                className="flex items-center gap-2 text-sm font-medium text-red-500"
                                            >

                                                <LogOut size={15}/>

                                                Logout

                                            </button>

                                        </>


                                    ) : (

                                        <div className="flex gap-3 pt-3">

                                            <Link
                                                href="/login"
                                                className="text-sm text-gray-600"
                                            >
                                                Login
                                            </Link>


                                            <Link
                                                href="/register"
                                                className="text-sm text-blue-600"
                                            >
                                                Register
                                            </Link>

                                        </div>

                                    )
                                }


                            </div>


                        </motion.div>

                    )
                }

                </AnimatePresence>


            </Container>


        </header>

    );
}