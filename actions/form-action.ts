"use server";

import { ActionState } from "@/components/modal/claim-modal";
import { prismaDb } from "@/lib/db";
import { sendVoucherEmail } from "@/lib/email";

const nameRegex = /^a-zA-Z][a-zA-Zs]{0,10}[a-zA-Z]$/;

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
            error: "Name must be alphabetic, include spaces, and be exactly 22 characters long.",
        };
    }

    if (!email || !name || !voucherid) {
        return {
            error: "Please fill all the fields",
        };
    }

    if (!checkbox || checkbox === "off") {
        return {
            error: "Please accept above condition to move forward",
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
        const data = await sendVoucherEmail({
            userEmail: email,
            userName: name,
            voucher: voucherToSend,
        });

        if (!data) {
            return {
                error: "Something went wrong, try again later.",
            };
        }

        // create a reservation
        await prismaDb.reservation.create({
            data: {
                voucherId: voucherToSend.id,
                email,
            },
        });

        return {
            success: "Sent! please check your email",
        };
    } catch (error: any) {
        return {
            error: error?.message ?? "Server is down, please try again later",
        };
    }
};
