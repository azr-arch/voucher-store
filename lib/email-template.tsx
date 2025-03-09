export const EmailTemplate = ({
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
    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif",
                color: "#333",
            }}
        >
            {/* Email Header */}
            <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ backgroundColor: "#1f2937", color: "white" }}
            >
                <thead>
                    <tr>
                        <td style={{ padding: "1rem" }}>
                            <h1 style={{ margin: "0", fontSize: "20px", fontWeight: "bold" }}>
                                VOUCHER
                            </h1>
                        </td>
                    </tr>
                </thead>
            </table>

            {/* Email Body */}
            <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ backgroundColor: "white", padding: "30px 20px" }}
            >
                <tbody>
                    <tr>
                        <td style={{ padding: "1rem" }}>
                            <h2
                                style={{
                                    color: "#111827",
                                    fontSize: "18px",
                                    marginTop: "0",
                                    marginBottom: "15px",
                                }}
                            >
                                Hello {recipientName},
                            </h2>

                            <p
                                style={{
                                    color: "#4b5563",
                                    lineHeight: "1.5",
                                    marginBottom: "20px",
                                }}
                            >
                                Thank you for your purchase. Your {voucherBrand} voucher for
                                {voucherOffer} is ready to use.
                            </p>

                            {/* Voucher Details */}
                            <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ marginBottom: "25px" }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                padding: "15px",
                                                backgroundColor: "#f9fafb",
                                                borderRadius: "6px",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    margin: "0 0 10px 0",
                                                    fontWeight: "bold",
                                                    color: "#111827",
                                                }}
                                            >
                                                Voucher Details:
                                            </p>
                                            <p style={{ margin: "0 0 5px 0", color: "#4b5563" }}>
                                                Brand:{" "}
                                                <span style={{ color: "#111827" }}>
                                                    {voucherBrand}
                                                </span>
                                            </p>
                                            <p style={{ margin: "0 0 5px 0", color: "#4b5563" }}>
                                                Offer:{" "}
                                                <span style={{ color: "#111827" }}>
                                                    {voucherOffer}
                                                </span>
                                            </p>
                                            <p style={{ margin: "0 0 5px 0", color: "#4b5563" }}>
                                                Expires on:{" "}
                                                <span style={{ color: "#111827" }}>
                                                    {voucherExpiry}
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Voucher Code */}
                            <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ marginBottom: "25px" }}
                            >
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                padding: "15px",
                                                backgroundColor: "#f9fafb",
                                                borderRadius: "6px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    margin: "0 0 10px 0",
                                                    fontWeight: "bold",
                                                    color: "#111827",
                                                }}
                                            >
                                                Your Voucher Code:
                                            </p>
                                            <p
                                                style={{
                                                    margin: "0",
                                                    padding: "10px",
                                                    backgroundColor: "white",
                                                    border: "1px dashed #d1d5db",
                                                    borderRadius: "4px",
                                                    fontFamily: "monospace",
                                                    fontSize: "18px",
                                                    letterSpacing: "1px",
                                                    color: "#111827",
                                                }}
                                            >
                                                {voucherCode}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Instructions */}
                            <p
                                style={{
                                    color: "#4b5563",
                                    lineHeight: "1.5",
                                    marginBottom: "15px",
                                }}
                            >
                                <strong>How to use:</strong>
                            </p>
                            <ol
                                style={{
                                    color: "#4b5563",
                                    lineHeight: "1.6",
                                    paddingLeft: "20px",
                                    marginTop: "0",
                                    marginBottom: "25px",
                                    listStyle: "initial",
                                }}
                            >
                                <li>Visit the {voucherBrand} website or store</li>
                                <li>Add items to your cart</li>
                                <li>Enter the voucher code at checkout</li>
                                <li>Enjoy your discount!</li>
                            </ol>

                            {/* View Button */}
                            <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ marginBottom: "25px" }}
                            >
                                <tbody>
                                    <tr>
                                        <td>
                                            <a
                                                href={voucherLink}
                                                style={{
                                                    maxWidth: "250px",
                                                    display: "block",
                                                    backgroundColor: "#1f2937",
                                                    color: "white",
                                                    textAlign: "center",
                                                    padding: "12px 20px",
                                                    borderRadius: "6px",
                                                    textDecoration: "none",
                                                    fontWeight: "bold",
                                                    marginInline: "auto",
                                                }}
                                            >
                                                Return voucher
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p style={{ color: "#4b5563", lineHeight: "1.5", marginBottom: "0" }}>
                                Please return the voucher to the pool, in case you dont want to use
                                it.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Email Footer */}
            <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ backgroundColor: "#f3f4f6", color: "#6b7280", fontSize: "12px" }}
            >
                <tbody>
                    <tr>
                        <td style={{ padding: "15px 20px", textAlign: "center" }}>
                            <p style={{ margin: "0" }}>© 2025 Voucher. All rights reserved.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
