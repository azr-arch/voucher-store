import { NextResponse } from "next/server";
import { prismaDb } from "@/lib/db";

// Making a get request
// Post request prompting user on client, might seem suspicious and risky to the client

export async function GET(_: Request, { params }: { params: Promise<{ voucherId: string }> }) {
    try {
        const { voucherId } = await params;

        // Marking the voucher available
        await prismaDb.voucher.update({
            where: {
                id: voucherId,
            },
            data: {
                status: "AVAILABLE",
            },
        });

        // TODO Reimplement later
        // find reservation
        const reservation = await prismaDb.reservation.findFirst({
            where: {
                voucherId,
            },
        });

        if (reservation) {
            await prismaDb.reservation.delete({
                where: {
                    id: reservation.id,
                },
            });
        }

        // And update the reservation table
        return NextResponse.json(
            { success: true, message: "Voucher returned successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: true, message: "Internal server error" },
            { status: 500 }
        );
    }
}
