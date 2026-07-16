import Link from "next/link";
import {
    BookOpen,
    Mail,
} from "lucide-react";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";


export default function Footer() {

    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4">


                {/* Brand */}
                <div>

                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                            <BookOpen size={22} />
                        </div>


                        <span className="text-xl font-bold text-slate-900">
                            BookVerse
                        </span>

                    </Link>


                    <p className="mt-4 text-sm leading-6 text-slate-500">
                        A modern digital library platform to discover,
                        manage, and organize your favorite books.
                    </p>


                </div>





                {/* Quick Links */}
                <div>

                    <h3 className="font-semibold text-slate-900">
                        Quick Links
                    </h3>


                    <ul className="mt-4 space-y-3 text-sm text-slate-500">

                        <li>
                            <Link
                                href="/"
                                className="hover:text-blue-600"
                            >
                                Home
                            </Link>
                        </li>


                        <li>
                            <Link
                                href="/books"
                                className="hover:text-blue-600"
                            >
                                Books
                            </Link>
                        </li>


                        <li>
                            <Link
                                href="/about"
                                className="hover:text-blue-600"
                            >
                                About
                            </Link>
                        </li>


                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-blue-600"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>





                {/* Support */}
                <div>

                    <h3 className="font-semibold text-slate-900">
                        Support
                    </h3>


                    <ul className="mt-4 space-y-3 text-sm text-slate-500">


                        <li>
                            <Link
                                href="/support"
                                className="hover:text-blue-600"
                            >
                                Help Center
                            </Link>
                        </li>


                        <li>
                            Privacy Policy
                        </li>


                        <li>
                            Terms & Conditions
                        </li>


                    </ul>


                </div>





                {/* Contact */}
                <div>

                    <h3 className="font-semibold text-slate-900">
                        Contact
                    </h3>


                    <div className="mt-4 space-y-3 text-sm text-slate-500">


                        <p className="flex items-center gap-2">
                            <Mail size={16} />
                            support@bookverse.com
                        </p>


                        <div className="flex gap-3 pt-3">


                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600"
                            >
                                <FaFacebook  size={17} />
                            </a>


                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600"
                            >
                                <FaInstagram size={17} />
                            </a>


                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-600"
                            >
                                <FaTwitter size={17} />
                            </a>


                        </div>


                    </div>

                </div>


            </div>





            {/* Bottom */}
            <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">

                © {new Date().getFullYear()} BookVerse. All rights reserved.

            </div>


        </footer>
    );
}