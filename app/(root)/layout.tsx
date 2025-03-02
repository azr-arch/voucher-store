import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <Header />
            <main className="container mx-auto px-6 pt-[100px] pb-6">{children}</main>
            <Footer />
        </CartProvider>
    );
}
