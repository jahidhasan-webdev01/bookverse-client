import ContactPage from "@/components/home/ContactPage";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <ContactPage />
      <Footer />
    </>
  );
}
