"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";
import { MailOptions } from "nodemailer/lib/json-transport";
import { generateEmailTemplate } from "./email-template";
import { Voucher } from "@prisma/client";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const SENDER_EMAIL = process.env.USER_EMAIL;
const APP_URL = process.env.APP_URL;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendVoucherEmail({
    userEmail,
    userName,
    voucher,
}: {
    userEmail: string;
    userName: string;
    voucher: Voucher;
}) {
    const returnVoucherLink = `${APP_URL}/api/return/${voucher.id}`;

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "dummyaccc023@gmail.com" || SENDER_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token || "",
            },
        });

        const mailOption: MailOptions = {
            from: `Voucher Store <${SENDER_EMAIL}>`,
            to: userEmail,
            subject: "You've claimed a Voucher",
            html: generateEmailTemplate({
                recipientName: userName,
                voucherBrand: voucher.brand,
                voucherCode: voucher.code,
                voucherOffer: voucher.title,
                voucherExpiry: new Date(voucher.expiryDate).toLocaleDateString(),
                voucherLink: returnVoucherLink,
            }),
        };

        await transport.sendMail(mailOption);
    } catch (error) {
        console.log({ error });
        throw new Error("Internal server error");
    }
}

// import { Voucher } from "@prisma/client";
// import { EmailTemplate } from "./email-template";

// const APP_URL = process.env.APP_URL!;

// export const createDomain = async () => {
//     try {
//         const data = await resend.domains.create({ name: "voucherstore" });
//         console.log({ data });
//     } catch (error) {
//         console.log({ error });
//     }
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const sendVoucherEmail = async ({
//     userEmail,
//     userName,
//     voucher,
// }: {
//     userEmail: string;
//     userName: string;
//     voucher: Voucher;
// }) => {
//     const returnVoucherLink = `${APP_URL}/api/return/${voucher.id}`;

//     try {
//         const { data, error } = await resend.emails.send({
//             from: "Voucher <voucherstoree@proton.me>",
//             to: [userEmail],
//             subject: "Hello world",
//             react: EmailTemplate({
//                 recipientName: userName,
//                 voucherBrand: voucher.brand,
//                 voucherCode: voucher.code,
//                 voucherOffer: voucher.title,
//                 voucherExpiry: new Date(voucher.expiryDate).toLocaleDateString(),
//                 voucherLink: returnVoucherLink,
//             }),
//         });

//         if (data) {
//             return {
//                 data,
//             };
//         }

//         if (error) {
//             console.log({ error });
//             throw new Error("Something went wrong. try again later");
//         }
//     } catch (err) {
//         console.log({ err });
//         throw new Error("Internal server error");
//     }
// };
