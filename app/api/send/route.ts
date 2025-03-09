import { EmailTemplate } from "@/lib/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await res.json();
        console.log({ body });

        // const { data, error } = await resend.emails.send({
        //   from: 'Acme <onboarding@resend.dev>',
        //   to: ['delivered@resend.dev'],
        //   subject: 'Hello world',
        //   react: EmailTemplate({

        //   }),
        // });

        // if (error) {
        //   return Response.json({ error }, { status: 500 });
        // }

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
