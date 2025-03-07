import { VoucherDetail } from "@/components/voucher-detail";
import { prismaDb } from "@/lib/db";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function VoucherIdPage({ params }: { params: { voucherId: string } }) {
    // const voucher = voucherData.find((item) => item.id === params.voucherId);
    const voucherPromise = prismaDb.voucher.findUnique({
        where: {
            id: params.voucherId,
        },
        select: {
            id: true,
            title: true,
            brand: true,
            brandLogo: true,
            expiryDate: true,
            details: true,
            howtoredeem: true,
        },
    });

    return (
        <div className="w-full h-full ">
            <Suspense
                fallback={
                    <div className="w-full flex itmce justify-center">
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                }
            >
                <VoucherDetail voucherPromise={voucherPromise} />
            </Suspense>
        </div>
    );
}
