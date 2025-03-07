import { JsonValue } from "@prisma/client/runtime/client";

export interface VoucherWithoutCode {
    id: string;
    title: string;
    brand: string;
    brandLogo: string | null;
    details: JsonValue;
    howtoredeem: JsonValue;
    expiryDate: Date;
}
