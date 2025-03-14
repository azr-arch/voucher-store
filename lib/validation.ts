import { z } from "zod";

export const seedFormSchema = z.object({
    offerTitle: z.string().min(5, "Offer must be more than 5 characters"),
    brand: z.string().min(2, "Brand name is required"),
    brandLogoUrl: z.string().optional(),
    details: z
        .array(z.string().min(1, "Detail cannot be empty"))
        .min(1, "At least one detail is required"),
    code: z.string().min(5, "Invalid code"),
    howtoredeem: z
        .array(z.string().min(1, "How to redeem is required"))
        .min(1, "At least one how to redeem is required"),
    expiryDate: z.date({
        required_error: "Expiry date is required",
    }),
});

export type SeedFormValues = z.infer<typeof seedFormSchema>;
