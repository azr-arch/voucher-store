"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

export interface CartItem {
    id: string;
    brand: string;
    offer: string;
    value: number;
    expiry: string;
    logo: string;
    color: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    openCart: () => void;
    closeCart: () => void;
    cartIsOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return [...prevCart];
                // return prevCart.map((cartItem) =>
                //   cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
                // )
            }
            return [...prevCart, item];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const openCart = () => {
        setCartIsOpen(true);
    };

    const closeCart = () => {
        setCartIsOpen(false);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, openCart, closeCart, cartIsOpen }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
