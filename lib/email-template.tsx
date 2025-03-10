export const generateEmailTemplate = ({
    recipientName = "Customer",
    voucherBrand = "Nike",
    voucherOffer = "20% off on all sportswear",
    voucherCode = "[VOUCHER_CODE]",
    voucherExpiry = "30 days",
    voucherLink = "https://voucher-store.com/vouchers/nike-01",
}: {
    recipientName?: string;
    voucherBrand?: string;
    voucherOffer?: string;
    voucherCode?: string;
    voucherExpiry?: string;
    voucherLink?: string;
}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voucher Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
        
        <!-- Email Header -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1f2937; color: white;">
            <thead>
                <tr>
                    <td style="padding: 1rem;">
                        <h1 style="margin: 0; font-size: 20px; font-weight: bold;">VOUCHER</h1>
                    </td>
                </tr>
            </thead>
        </table>

        <!-- Email Body -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: white; padding: 30px 20px;">
            <tbody>
                <tr>
                    <td style="padding: 1rem;">
                        <h2 style="color: #111827; font-size: 18px; margin-top: 0; margin-bottom: 15px;">
                            Hello ${recipientName},
                        </h2>
                        <p style="color: #4b5563; line-height: 1.5; margin-bottom: 20px;">
                            Thank you for your purchase. Your ${voucherBrand} voucher for
                            ${voucherOffer} is ready to use.
                        </p>

                        <!-- Voucher Details -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                            <tbody>
                                <tr>
                                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 6px;">
                                        <p style="margin: 0 0 10px 0; font-weight: bold; color: #111827;">
                                            Voucher Details:
                                        </p>
                                        <p style="margin: 0 0 5px 0; color: #4b5563;">
                                            Brand: <span style="color: #111827;">${voucherBrand}</span>
                                        </p>
                                        <p style="margin: 0 0 5px 0; color: #4b5563;">
                                            Offer: <span style="color: #111827;">${voucherOffer}</span>
                                        </p>
                                        <p style="margin: 0 0 5px 0; color: #4b5563;">
                                            Expires on: <span style="color: #111827;">${voucherExpiry}</span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Voucher Code -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                            <tbody>
                                <tr>
                                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 6px; text-align: center;">
                                        <p style="margin: 0 0 10px 0; font-weight: bold; color: #111827;">
                                            Your Voucher Code:
                                        </p>
                                        <p style="margin: 0; padding: 10px; background-color: white; border: 1px dashed #d1d5db; border-radius: 4px; font-family: monospace; font-size: 18px; letter-spacing: 1px; color: #111827;">
                                            ${voucherCode}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Instructions -->
                        <p style="color: #4b5563; line-height: 1.5; margin-bottom: 15px;">
                            <strong>How to use:</strong>
                        </p>
                        <ol style="color: #4b5563; line-height: 1.6; padding-left: 20px; margin-top: 0; margin-bottom: 25px; list-style: initial;">
                            <li>Visit the ${voucherBrand} website or store</li>
                            <li>Add items to your cart</li>
                            <li>Enter the voucher code at checkout</li>
                            <li>Enjoy your discount!</li>
                        </ol>

                        <!-- View Button -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="${voucherLink}" style="max-width: 250px; display: block; background-color: #1f2937; color: white; text-align: center; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: auto;">
                                            Return Voucher
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p style="color: #4b5563; line-height: 1.5; margin-bottom: 0;">
                            Please return the voucher to the pool in case you don’t want to use it.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Email Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; color: #6b7280; font-size: 12px;">
            <tbody>
                <tr>
                    <td style="padding: 15px 20px; text-align: center;">
                        <p style="margin: 0;">© 2025 Voucher. All rights reserved.</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>`;
};
