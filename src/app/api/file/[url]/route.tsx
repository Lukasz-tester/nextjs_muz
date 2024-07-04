import { del } from "@vercel/blob";
// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
    const { params } = context;
    let { url } = params;

    url = decodeURIComponent(url);

    if (!url) {
        return NextResponse.json({ error: "NoURL provided" }, { status: 400 })
    }

    await del(url);
    return NextResponse.json({ success: true});
}