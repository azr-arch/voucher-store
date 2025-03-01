"use client";

import { useState, useTransition } from "react";
import { IVoucher } from "./VoucherCard";
import { voucherData } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { Clock, Info, Tag } from "lucide-react";
import { Badge } from "./ui/badge";
import VoucherCard from "./VoucherCard";
import { Voucher } from "./voucher";

export default function VoucherList() {
    const [selectedVoucher, setSelectedVoucher] = useState<IVoucher | null>(null);
    const [, startTransition] = useTransition();

    const handleVoucherClick = (voucher: IVoucher) => {
        startTransition(() => {
            setSelectedVoucher(voucher);
            window.history.pushState(null, "", `/voucher/${voucher.id}`);
        });
    };

    return (
        <>
            <h2
                //   initial={{ opacity: 0, y: 10 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   exit={{ opacity: 0, y: -10 }}
                //   transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-2"
            >
                Available Vouchers
            </h2>
            <p
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 mb-12"
            >
                Select a voucher to view details
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  place-content-center">
                {voucherData.map((voucher) => (
                    <div
                        key={voucher.id}
                        className="group cursor-pointer w-full h-full "
                        onClick={() => handleVoucherClick(voucher)}
                    >
                        {/* <VoucherCard key={voucher.id} voucher={voucher} /> */}
                        <Voucher voucher={voucher} key={voucher.color} />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedVoucher && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg flex items-center justify-center flex-grow bg-gradient-to-br from bg-neutral-800 to-black"
                        style={{
                            top: 0,
                            height: "calc(100vh - 88px - 56px)",
                            paddingTop: "calc(200px)",
                            paddingBottom: 0,
                        }}
                    >
                        <div className="flex items-center gap-6 ">
                            <motion.div
                                className="flex-1 flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div
                                    className={`w-full max-w-md aspect-[4/3] rounded-2xl bg-gradient-to-br ${selectedVoucher.color} p-1 shadow-lg`}
                                >
                                    <div className="bg-gray-900 rounded-xl p-6 h-full flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            {/* <Image
                  src={voucher.logo || "/placeholder.svg"}
                  alt={voucher.brand}
                  width={120}
                  height={60}
                  className="h-8 w-auto object-contain"
                /> */}
                                            <Badge variant="outline" className="text-xs px-2 py-1">
                                                ${selectedVoucher.value} Value
                                            </Badge>
                                        </div>
                                        <div className="text-center my-6">
                                            <h2 className="text-3xl font-bold mb-2">
                                                {selectedVoucher.offer}
                                            </h2>
                                            <p className="text-gray-400 text-sm">
                                                Use code:{" "}
                                                <span className="font-mono text-white">
                                                    XXXXXXXXXXZAWV
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center text-sm text-gray-400">
                                            <span>Valid for {selectedVoucher.expiry}</span>
                                            <span>{selectedVoucher.brand}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Voucher Details */}
                            <motion.div
                                className="flex-1 flex flex-col justify-center"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold mb-6">
                                    {selectedVoucher.brand} Voucher
                                </h2>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center">
                                        <Tag className="h-5 w-5 mr-3 text-blue-500" />
                                        <div>
                                            <h3 className="text-sm text-gray-400">Offer</h3>
                                            <p className="font-medium">{selectedVoucher.offer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 mr-3 text-blue-500" />
                                        <div>
                                            <h3 className="text-sm text-gray-400">Validity</h3>
                                            <p className="font-medium">
                                                Expires in {selectedVoucher.expiry}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Info className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                                        <div>
                                            <h3 className="text-sm text-gray-400 mb-1">Terms</h3>
                                            <ul className="text-sm space-y-1 list-disc list-inside text-gray-300">
                                                <li>Valid for online and in-store purchases</li>
                                                <li>Cannot be combined with other promotions</li>
                                                <li>No cash value or cash back</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button className="flex-1 bg-white text-black hover:bg-gray-200">
                                        Add to Cart
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        Share
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
