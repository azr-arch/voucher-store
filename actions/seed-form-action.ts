"use server";

import { createObj } from "@/lib/utils";
import type { SeedFormValues } from "@/lib/validation";
import { prismaDb } from "@/lib/db";

export const seedFormAction = async (data: SeedFormValues) => {
    try {
        const howtoredeemObj = createObj(data.howtoredeem);
        const details = createObj(data.details);

        const formattedData = {
            title: data.offerTitle,
            brand: data.brand,
            brandLogo: data.brandLogoUrl,
            code: data.code,
            howtoredeem: howtoredeemObj,
            details,
            expiryDate: new Date(data.expiryDate),
        };

        await prismaDb.voucher.create({
            data: formattedData,
        });

        setTimeout(async () => {
            await Promise.resolve("");
        }, 1000);

        return {
            status: "success" as const,
            message: "Data added successfully",
        };
    } catch {
        return {
            status: "error" as const,
            message: "Something went wrong, Please try again later",
        };
    }
};
