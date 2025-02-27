import { Footer } from "@/components/footer";
import Header from "../components/Header";
import VoucherList from "../components/VoucherList";
import { CartProvider } from "../contexts/CartContext";

export default function Home() {
    return (
        <CartProvider>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <VoucherList />
            </main>
            <Footer />
        </CartProvider>
    );
}
