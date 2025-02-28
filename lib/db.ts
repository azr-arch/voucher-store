import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var prismaDb: PrismaClient | undefined;
}

export const prismaDb = global.prismaDb || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaDb = prismaDb;
