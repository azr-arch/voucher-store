"use server";

import { ActionState } from "@/components/modal/claim-modal";
import { prismaDb } from "@/lib/db";
import { sendVoucherEmail } from "@/lib/email";

const nameRegex = /^[a-zA-Z\s]{4,20}$/;

export const formSubmit = async (state: ActionState, formData: FormData) => {
    // Maybe use zod for validation

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const voucherid = formData.get("voucherid") as string;
    const checkbox = formData.get("checkbox");

    // reimplement this
    const validName = nameRegex.test("name");

    if (!validName) {
        return {
            error: "Invalid name. Must be 4-20 alphabetic characters (including spaces)",
            name,
            email,
        };
    }

    if (!email || !name || !voucherid) {
        return {
            error: "Please fill all the fields",
            name,
            email,
        };
    }

    if (!checkbox || checkbox === "off") {
        return {
            error: "Please accept above condition to move forward",
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
