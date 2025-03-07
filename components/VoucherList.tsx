"use client";

import VoucherCard from "./VoucherCard";
import { VoucherWithoutCode } from "@/lib/types";

export default function VoucherList({ vouchers }: { vouchers: VoucherWithoutCode[] }) {
    return (
        <>
            <h2 className="text-3xl font-bold mb-2">Available Vouchers</h2>
            {vouchers.length !== 0 && (
                <p
                    //   initial={{ opacity: 0 }}
                    //   animate={{ opacity: 1 }}
                    //   exit={{ opacity: 0 }}
                    //   transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-400 mb-12"
                >
                    Select a voucher to view details
                </p>
            )}

            {/* No vouchers displayed */}
            {vouchers.length <= 0 && (
                <p className="text-neutral-400">No vouchers available, please try again later.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  place-content-center">
                {vouchers.map((voucher) => (
                    <VoucherCard key={voucher.id} voucher={voucher} />
                ))}
            </div>
        </>
    );
}
