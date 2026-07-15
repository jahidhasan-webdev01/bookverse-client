import AddBookForm from "@/components/books/AddBookForm";
import Container from "@/components/shared/Container";

export default function AddBookPage() {
    return (
        <section className="bg-slate-50 py-16">
            <Container>
                <AddBookForm />
            </Container>
        </section>
    );
}