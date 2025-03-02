import { voucherData } from "@/lib/utils";
import VoucherCard from "./VoucherCard";
export default function VoucherList() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-2">Available Vouchers</h2>
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
                    <VoucherCard key={voucher.id} voucher={voucher} />
                ))}
            </div>
        </>
    );
}
