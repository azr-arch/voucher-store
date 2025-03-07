import { Suspense } from "react";
import VoucherList from "../../components/VoucherList";
import { prismaDb } from "@/lib/db";

export default function Home() {
    const voucherPromise = prismaDb.voucher.findMany({
        where: {
            status: {
                not: "EXPIRED",
            },
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
        <Suspense fallback={<p>Loading...</p>}>
            <VoucherList voucherPromise={voucherPromise} />
        </Suspense>
    );
}
