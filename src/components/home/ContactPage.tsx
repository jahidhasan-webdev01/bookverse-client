import {
    Mail,
    Phone,
    MapPin,
    Send,
} from "lucide-react";


export default function ContactPage() {

    return (
        <main className="min-h-screen bg-slate-50">

            {/* Header */}
            <section className="mx-auto max-w-7xl px-5 py-20 text-center">

                <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                    Contact Us
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                    Have questions or need support? Feel free to reach out
                    to the BookVerse team.
                </p>

            </section>



            {/* Contact Content */}
            <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 lg:grid-cols-3">


                {/* Info Cards */}
                <div className="space-y-5">


                    <ContactCard
                        icon={<Mail size={22} />}
                        title="Email"
                        text="support@bookverse.com"
                    />


                    <ContactCard
                        icon={<Phone size={22} />}
                        title="Phone"
                        text="+880 1234-567890"
                    />


                    <ContactCard
                        icon={<MapPin size={22} />}
                        title="Address"
                        text="Dhaka, Bangladesh"
                    />


                </div>




                {/* Form */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">


                    <h2 className="text-2xl font-bold text-slate-900">
                        Send Message
                    </h2>


                    <p className="mt-2 text-sm text-slate-500">
                        We will get back to you as soon as possible.
                    </p>



                    <form className="mt-6 space-y-5">


                        <div className="grid gap-5 md:grid-cols-2">

                            <input
                                placeholder="Your Name"
                                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                            />


                            <input
                                placeholder="Email Address"
                                type="email"
                                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                            />

                        </div>



                        <input
                            placeholder="Subject"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                        />



                        <textarea
                            rows={5}
                            placeholder="Your message"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                        />



                        <button
                            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >

                            <Send size={17} />

                            Send Message

                        </button>


                    </form>


                </div>


            </section>

        </main>
    );
}





function ContactCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {icon}
            </div>


            <h3 className="mt-4 font-semibold text-slate-900">
                {title}
            </h3>


            <p className="mt-1 text-sm text-slate-500">
                {text}
            </p>


        </div>

    );
}