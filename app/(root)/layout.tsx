import Header from "@/components/Header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <Header />
            <main
                style={{
                    minHeight: `calc(100vh - 88px - 56px)`,
                }}
                className="container mx-auto px-4 py-12"
            >
                {children}
            </main>
            <Footer />
        </CartProvider>
    );
}
