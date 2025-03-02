"use client";

import { ArrowLeft, Clock, Tag } from "lucide-react";
import Image from "next/image";
import { IVoucher } from "./VoucherCard";
import { useCart } from "@/contexts/CartContext";
import { useTransition } from "react";
import Link from "next/link";
import { ClaimModal } from "./modal/claim-modal";

export const VoucherDetail = ({ voucher }: { voucher: IVoucher }) => {
    const [, startTransition] = useTransition();
    const { addToCart, openCart } = useCart();

    const handleBuyNow = (voucher: IVoucher) => {
        startTransition(() => {
            addToCart(voucher);
            openCart();
        });
    };
    return (
        <div className="max-w-screen-lg mx-auto py-1">
            <Link
                // variant="ghost"
                className="mb-6 w-fit text-gray-400 hover:text-white flex items-center"
                href={"../"}
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to vouchers
            </Link>

            {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6"> */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${voucher.color}`}></div>

                <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center">
                            <div className="bg-gray-800 p-3 rounded-md mr-4">
                                <Image
                                    src={"/nike-logo.png"}
                                    alt={`${voucher.brand} logo`}
                                    width={80}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{voucher.brand}</h2>
                                <div className="flex items-center text-gray-400 text-sm mt-1">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>Expires in {voucher.expiry}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center text-purple-400 text-lg font-semibold">
                            <Tag className="w-5 h-5 mr-2" />
                            <span>${voucher.value} value</span>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg  p-5 mb-6">
                        <h3 className="text-lg font-semibold ">{voucher.offer}</h3>
                        {/* <p className="text-gray-300">{voucher.description}</p> */}
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Voucher Code</p>
                            <p className="font-geist-mono text-lg font-semibold tracking-wider">
                                XXXXXXXXXXXXXTZUQ
                            </p>
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-end"> */}
                    {/* <Button
                        onClick={() => handleBuyNow(voucher)}
                        className="block ml-auto rounded-[5px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1 text-white"
                    >
                        Buy now
                    </Button> */}
                    <ClaimModal />
                    {/* </div> */}
                </div>
            </div>

            <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Voucher is valid until the expiry date mentioned.</li>
                    <li>
                        • Cannot be combined with other promotions or discounts unless specified.
                    </li>
                    <li>
                        • The brand reserves the right to modify or cancel the offer at any time.
                    </li>
                    <li>• For full terms and conditions, please visit the brand&apos;s website.</li>
                </ul>
            </div>
            {/* </div> */}
        </div>
    );
};
