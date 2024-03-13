import { CommentDBTypes, CommentUpdaterFiel, ICommentCreate } from "@/sanity/types/Sanity.CommentTypes";

export async function loadDatas() {
    const res = await fetch(`/api/sanitycms/comments/`);
    const data: CommentDBTypes[] = await res.json();
    console.log("Notas leídas:", data);
    return data
}

export async function loadData(_id: string) {
    const res = await fetch(`/api/sanitycms/comments/${_id}`);
    const data: CommentDBTypes = await res.json();
    console.log("Nota id:", data);
    return data
}

export async function createComments(newData: ICommentCreate) {
    const res = await fetch(`/api/sanitycms/comments/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(newData),
    });
    const data = await res.json();
    console.log("Notas Creada:", data);
    return data
}
export async function deleteComments(id: string) {
    const res = await fetch(`/api/sanitycms/comments/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    console.log("Notas Eliminada:", data);
    return data

}
export async function updateComments(newData: CommentUpdaterFiel) {
    const res = await fetch(`/api/sanitycms/comments/${newData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(newData),
    });
    const data = await res.json();
    console.log("Notas Actualizada:", data);
    return data;
}