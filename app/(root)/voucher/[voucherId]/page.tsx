import { voucherData } from "@/lib/utils";

export default function VoucherIdPage({ params }: { params: { voucherId: string } }) {
    const voucher = voucherData.find((item) => item.id === params.voucherId);

    if (!voucher) {
        // Empty state
        return <div>No voucher found!</div>;
    }

    return (
        <div className="w-full h-full ">
            <h3 className="text-sm text-gray-400 font-medium mb-1">{voucher.brand}</h3>
            <p className="text-lg  line-clamp-2 h-8">{voucher.offer}</p>
        </div>
    );
}
