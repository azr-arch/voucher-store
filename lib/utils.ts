import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Mock data for vouchers from different brands
export const voucherData = [
    {
        id: "nike-01",
        brand: "Nike",
        offer: "20% off on all sportswear",
        value: 50,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-blue-600 to-blue-800",
    },
    {
        id: "adidas-01",
        brand: "Adidas",
        offer: "Free shipping on orders over $100",
        value: 75,
        expiry: "60 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-green-600 to-green-800",
    },
    {
        id: "puma-01",
        brand: "Puma",
        offer: "Buy one get one free on selected items",
        value: 100,
        expiry: "45 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-red-600 to-red-800",
    },
    {
        id: "reebok-01",
        brand: "Reebok",
        offer: "$25 off on orders over $150",
        value: 25,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-purple-600 to-purple-800",
    },
    {
        id: "nb-01",
        brand: "New Balance",
        offer: "15% off on running shoes",
        value: 40,
        expiry: "90 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-yellow-600 to-yellow-800",
    },
    {
        id: "ua-01",
        brand: "Under Armour",
        offer: "$30 off on orders over $200",
        value: 30,
        expiry: "60 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-orange-600 to-orange-800",
    },
    {
        id: "converse-01",
        brand: "Converse",
        offer: "Free customization on any purchase",
        value: 60,
        expiry: "30 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-pink-600 to-pink-800",
    },
    {
        id: "vans-01",
        brand: "Vans",
        offer: "10% off on all footwear",
        value: 35,
        expiry: "45 days",
        logo: "/placeholder.svg?height=40&width=80",
        color: "from-teal-600 to-teal-800",
    },
];
