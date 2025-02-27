"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Cart } from "./cart";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const closeCart = () => {
        setIsOpen(false);
    };

    return (
        <header className="p-6 flex justify-between items-center bg-gray-800">
            <div className="text-3xl font-bold tracking-tighter flex items-center">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="mr-2"
                >
                    ✦
                </motion.div>
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    VOUCHER
                </Link>
            </div>

            <button onClick={() => setIsOpen(true)} className="p-2 relative">
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>
            <Cart isOpen={isOpen} onClose={closeCart} />
        </header>
    );
}
