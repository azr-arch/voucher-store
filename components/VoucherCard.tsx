"use client";

// import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import { ChevronRight } from "lucide-react";

export interface IVoucher {
    id: string;
    brand: string;
    offer: string;
    value: number;
    expiry: string;
    logo: string;
    color: string;
}

export default function VoucherCard({ voucher }: { voucher: IVoucher }) {
    const { addToCart } = useCart();

    // const handleAddToCart = () => {
    //     addToCart({
    //         id: voucher.id,
    //         name: voucher.name,
    //         price: voucher.price,
    //         quantity: 1,
    //     });
    // };

    return (
        <div
            key={voucher.id}
            // variants={itemVariants}
            // whileHover={{
            //   y: -5,
            //   transition: { duration: 0.2 },
            // }}
            className="relative"
            onClick={() => addToCart(voucher)}
        >
            <div
                className={`relative  bg-gradient-to-br ${voucher.color} p-[1px] cursor-pointer`}
                //   whileHover={{ scale: 1.02 }}
                //   whileTap={{ scale: 0.98 }}
                //   animate={activeVoucher === voucher.id ? { scale: [1, 1.05, 1] } : {}}
                //   transition={{ duration: 0.3 }}
            >
                <div className="bg-gray-900 rounded-lg p-5 h-full flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-white/10 p-2 rounded">
                            {/* <Image
                  src={voucher.logo || "/placeholder.svg"}
                  alt={voucher.brand}
                  width={80}
                  height={40}
                  className="h-5 w-auto object-contain"
                /> */}
                        </div>
                        <div className="text-xl font-bold">${voucher.value}</div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-sm text-gray-400 font-medium mb-1">{voucher.brand}</h3>
                        <p className="text-lg  line-clamp-2 h-8">{voucher.offer}</p>

                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                            <span className="text-xs text-gray-500 font-geist-mono font-medium">
                                Expires in {voucher.expiry}
                            </span>
                            <div
                                //   whileHover={{ scale: 1.1 }}
                                //   whileTap={{ scale: 0.9 }}
                                className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center"
                            >
                                <ChevronRight className="h-3 w-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
