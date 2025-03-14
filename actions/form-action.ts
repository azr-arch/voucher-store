"use server";

import { ActionState } from "@/components/modal/claim-modal";
import { prismaDb } from "@/lib/db";
import { sendVoucherEmail } from "@/lib/email";
import { z } from "zod";

const emailFormSchema = z.object({
    name: z
        .string()
        .min(3, "Username should be more than 3 character")
        .regex(/^[A-Za-z\s]+$/, {
            message: "Invalid name",
        }),
    email: z.string().email("Invalid email"),
    voucherId: z.string({ message: "voucher id is required" }),
});

export const formSubmit = async (state: ActionState, formData: FormData) => {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const voucherid = formData.get("voucherid") as string;
    const checkbox = formData.get("checkbox");

    if (!checkbox || checkbox === "off") {
        return {
            error: "Please accept above condition to move forward",
            name,
            email,
        };
    }

    const validation = emailFormSchema.safeParse({
        name,
        email,
        voucherId: voucherid,
    });

    if (!validation.success) {
        return {
            error: validation.error?.errors[0].message,
            name,
            email,
        };
    }

    // Use some service to verify email as in not a fake email
    // Fetch the voucher with voucherId
    try {
        const voucherToSend = await prismaDb.voucher.findUnique({
            where: {
                id: voucherid,
                status: "AVAILABLE",
            },
        });

        if (!voucherToSend) {
            return {
                error: "Voucher has expired.",
            };
        }

        // Send the voucher to the user
        await sendVoucherEmail({
            userEmail: email,
            userName: name,
            voucher: voucherToSend,
        });

        await Promise.allSettled([
            // Mark the vouhcer as expired
            await prismaDb.voucher.update({
                where: {
                    id: voucherToSend.id,
                },
                data: {
                    status: "RESERVED",
                },
            }),

            // create a reservation
            await prismaDb.reservation.create({
                data: {
                    voucherId: voucherToSend.id,
                    email,
                },
            }),
        ]);

        return {
            success: "Sent! please check your email",
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log({ error });
        return {
            error: error?.message ?? "Server is down, please try again later",
        };
    }
};
