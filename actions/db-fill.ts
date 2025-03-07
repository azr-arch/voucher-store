"use server";

import { data } from "@/seed";
import { prismaDb } from "@/lib/db";

export const seedDb = async () => {
    try {
        await prismaDb.voucher.createMany({
            data: data,
        });

        console.log("Databse seeded successfully!");
    } catch (error) {
        console.log("Error while seeding DB: ", error);
    }
};
