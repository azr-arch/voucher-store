"use client";

// import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import { Clock, Plus, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function VoucherCard({ voucher }: { voucher: IVoucher }) {
    const { addToCart } = useCart();

    return (
        <Card
            className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-900/10 transition-all cursor-pointer group"
            // onClick={() => onSelect(voucher)}
        >
            <div className={cn(`h-2 bg-gradient-to-r`, voucher.color)}></div>
            <Link href={`voucher/${voucher.id}`}>
                <div className="px-5 pt-5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-gray-800 p-2 rounded-md">
                            {/* <Image
                src={voucher.logo || "/placeholder.svg"}
                alt={`${voucher.brand} logo`}
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              /> */}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{voucher.expiry}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{voucher.brand}</h3>
                    <p className="text-gray-300 mb-3">{voucher.offer}</p>
                </div>
            </Link>

            <div className="h-px w-full bg-gray-700 mt-5 mb-2" />
            <div className="flex justify-between items-center px-5 pb-3">
                <div className="flex items-center text-purple-400">
                    <Tag className="w-4 h-4 mr-1" />
                    <span>${voucher.value} value</span>
                </div>

                <div className="space-x-2">
                    {/* <Link
                            // variant="ghost"
                            href={`voucher/${voucher.id}`}
                            // size="sm"
                            className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors inline-flex p-2.5"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </Link> */}
                    <Button
                        onClick={() => {
                            addToCart(voucher);
                        }}
                        variant={"ghost"}
                        size={"icon"}
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
