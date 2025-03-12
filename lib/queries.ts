import { prismaDb } from "@/lib/db";

export const getAllVouchers = async () => {
    try {
        const vouchers = await prismaDb.voucher.findMany({
            where: {
                status: {
                    notIn: ["EXPIRED", "RESERVED"],
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

        return vouchers;
    } catch (err) {
        console.log({ err });
        return [];
    }
};

export const getVoucherById = async ({ voucherId }: { voucherId: string }) => {
    try {
        return await prismaDb.voucher.findUnique({
            where: {
                id: voucherId,
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
    } catch {
        return null;
    }
};
