import { VoucherDetail } from "@/components/voucher-detail";
import { getVoucherById } from "@/lib/queries";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

type tParams = Promise<{ voucherId: string }>;

export default async function VoucherIdPage(props: { params: tParams }) {
    const { voucherId } = await props.params;
    const voucherPromise = getVoucherById({ voucherId });

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
