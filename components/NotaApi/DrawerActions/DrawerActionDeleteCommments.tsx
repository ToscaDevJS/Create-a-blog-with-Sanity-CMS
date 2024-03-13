"use client";
import {
    IconTrash,
} from "@tabler/icons-react";
import { Drawer } from "vaul";

import { deleteComments } from "@/app/notasapi/libs/api/fetchAll";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const DrawerActionDeleteCommments = ({ id }: { id: string }) => {

    return (
        <Drawer.Root>
            <Drawer.Trigger>
                <div className="shadow-xl p-1 rounded-lg hover:bg-gray-100">
                    <IconTrash size={18} />
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
                    <DeleteCommments id={id} />
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

function DeleteCommments({ id }: { id: string }) {

    const queryClient = useQueryClient()
    const deleteCommentsMutations = useMutation({
        mutationFn: deleteComments,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["loadComments"],
            });
            console.log("Comentario Eliminado")
        }
    })
    return (
        <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                    En la próxima acción, tendrás la opción de eliminar este comentario.{" "}
                    <b>¿Estás seguro?</b> Ten en cuenta que esta acción es irreversible.
                </Drawer.Title>
                <div className="flex justify-end">
                    <button
                        onClick={() => { deleteCommentsMutations.mutate(id) }}
                        className="border bg-black rounded-md px-3 py-2 text-white"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}