import { VoucherDetail } from "@/components/voucher-detail";
import { voucherData } from "@/lib/utils";

export default function VoucherIdPage({ params }: { params: { voucherId: string } }) {
    const voucher = voucherData.find((item) => item.id === params.voucherId);

    if (!voucher) {
        // Empty state
        return <div>No voucher found!</div>;
    }

    return (
        <div className="w-full h-full ">
            <VoucherDetail voucher={voucher} />
        </div>
    );
}
