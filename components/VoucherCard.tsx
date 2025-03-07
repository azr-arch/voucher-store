"use client";

// import Image from "next/image";
// import { useCart } from "../contexts/CartContext";
import { Clock } from "lucide-react";
// import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { VoucherWithoutCode } from "@/lib/types";

export default function VoucherCard({ voucher }: { voucher: VoucherWithoutCode }) {
    // const { addToCart } = useCart();

    return (
        <Card
            className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-900/10 transition-all cursor-pointer group"
            // onClick={() => onSelect(voucher)}
        >
            <div className={cn(`h-2 bg-gradient-to-r`)}></div>
            <Link href={`voucher/${voucher.id}`}>
                <div className="px-5 pt-5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-gray-800 p-2 rounded-md">
                            <Image
                                src={voucher.brandLogo || "/placeholder.svg"}
                                alt={`${voucher.brand} logo`}
                                width={40}
                                height={40}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{new Date(voucher.expiryDate).toLocaleDateString()}</span>
                        </div>
                    </div>

                    <h3 className="text-sm text-gray-400 font-semibold mb-1">{voucher.brand}</h3>
                    <p className=" mb-3 line-clamp-2">{voucher.title}</p>
                </div>
            </Link>

            {/* <div className="h-px w-full bg-gray-700 mt-5 mb-2" /> */}
        </Card>
    );
}
