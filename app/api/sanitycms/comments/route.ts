import { NextRequest, NextResponse } from "next/server";
import { createComments, loadComments } from "../config/queries/Sanity.CommentQueries";
import { ICommentCreate } from "../config/types/Sanity.CommentTypes";


export async function GET(req: NextRequest) {
    try {
        const data = await loadComments()
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: ICommentCreate = await req.json()
        const resp = await createComments(body)
        return NextResponse.json({ resp: resp });
    } catch (error) {
        return NextResponse.json({ message: "error or body error" }, { status: 500 });
    }
}
