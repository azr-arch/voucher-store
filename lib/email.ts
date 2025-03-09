import { Voucher } from "@prisma/client";
import { Resend } from "resend";
import { EmailTemplate } from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const APP_URL = process.env.APP_URL!;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendVoucherEmail = async ({
    userEmail,
    userName,
    voucher,
}: {
    userEmail: string;
    userName: string;
    voucher: Voucher;
}) => {
    const returnVoucherLink = `${APP_URL}/api/return/${voucher.id}`;

    try {
        const { data, error } = await resend.emails.send({
            from: "Voucher <voucherstoree@proton.me>",
            to: [userEmail],
            subject: "Hello world",
            react: EmailTemplate({
                recipientName: userName,
                voucherBrand: voucher.brand,
                voucherCode: voucher.code,
                voucherOffer: voucher.title,
                voucherExpiry: new Date(voucher.expiryDate).toLocaleDateString(),
                voucherLink: returnVoucherLink,
            }),
        });

        if (data) {
            return {
                data,
            };
        }

        if (error) {
            throw new Error("Something went wrong. try again later");
        }
    } catch {
        throw new Error("Internal server error");
    }
};
