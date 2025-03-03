import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendVoucherEmail = async (email: string, voucher: any) => {
    return await resend.emails.send({
        from: "vouchers@yourdomain.com",
        to: email,
        subject: `Your ${voucher.brand} Voucher Details`,
        html: `
      <h1>Here's your ${voucher.title} voucher!</h1>
      <p><strong>Code:</strong> ${voucher.code}</p>
      <p>Expires: ${new Date(voucher.expiryDate).toLocaleDateString()}</p>
      <p>${voucher.redemptionInstructions}</p>
      <p>Can't use it? <a href="${process.env.NEXTAUTH_URL}/return/${
            voucher.id
        }">Return it here</a></p>
    `,
    });
};
