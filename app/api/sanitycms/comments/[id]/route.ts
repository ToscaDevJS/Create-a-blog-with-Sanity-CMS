import { NextRequest, NextResponse } from "next/server";
import { deleteComments, updateComments } from "../../config/queries/Sanity.CommentQueries";
import { CommentUpdaterFiel } from "../../config/types/Sanity.CommentTypes";

interface Params {
    params: { id: string };
}

export async function DELETE(req: NextRequest, { params }: Params) {
    try {
        const slug_ID = String(params.id)
        const resp = await deleteComments(slug_ID)
        return NextResponse.json({ resp: resp });
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: Params) {
    try {
        const slug_ID = String(params.id)
        const body: CommentUpdaterFiel = await req.json();
        const resp = await updateComments(slug_ID, body)
        return NextResponse.json({ resp: resp });
    } catch (error) {
        return NextResponse.json({ message: "error, body 😶 " }, { status: 500 });
    }
}