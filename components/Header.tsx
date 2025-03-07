"use client";

// import { ShoppingBag } from "lucide-react";
// import { useCart } from "../contexts/CartContext";
// import { Cart } from "./cart";
import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {
    // const { cart,  } = useCart();

    // const totalItems = cart.reduce((sum, item)  , 0);
    // const totalItems = cart.length;

    return (
        <header className=" px-6 py-3  bg-gray-800 fixed top-0 left-0 z-10 w-full">
            <div className="container mx-auto flex justify-between items-center">
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
                {/* 
                <button onClick={openCart} className="p-2 relative">
                    <ShoppingBag className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </button> */}
                {/* <Cart isOpen={cartIsOpen} onClose={closeCart} /> */}
            </div>
        </header>
    );
}
