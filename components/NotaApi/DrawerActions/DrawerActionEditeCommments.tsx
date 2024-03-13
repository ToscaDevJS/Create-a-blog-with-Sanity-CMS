"use client";
import {
    IconCalendarStats,
    IconGif,
    IconMapPin,
    IconMoodSmileBeam,
    IconPencil,
    IconPhotoUp,
} from "@tabler/icons-react";
import { Drawer } from "vaul";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    CommentDBTypes,
    CommentUpdaterFiel,
    ICommentCreate,
} from "@/sanity/types/Sanity.CommentTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadData, loadDatas, updateComments } from "@/app/notasapi/libs/api/fetchAll";
import { useEffect, useState } from "react";

export const DrawerActionEditeCommments = ({ id }: { id: string }) => {
    return (
        <Drawer.Root>
            <Drawer.Trigger>
                <div className="shadow-xl p-1 rounded-lg hover:bg-gray-100">
                    <IconPencil size={18} />
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
                    <EditeComments id={id} />
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};



export function EditeComments({ id }: { id: string }) {
    const [dataID, setDataID] = useState<CommentDBTypes>();
    useEffect(() => {
        async function refreshComents() {
            const loadfield = await loadData(id);
            setDataID(loadfield);
        }
        refreshComents();
    }, [id]);


    const queryClient = useQueryClient()
    const updateCommentsMutation = useMutation({
        mutationFn: (newData: CommentUpdaterFiel) => updateComments(newData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["loadComments"] })
            console.log("Edite Comment")
        }
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ICommentCreate>();

    const onSubmit: SubmitHandler<ICommentCreate> = async (data) => {
        const newData: CommentUpdaterFiel = {
            ...data,
            id//-->id para update
        };
        updateCommentsMutation.mutate(newData)
    };

    return (
        <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">EDITE </Drawer.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <IconPencil className="z-10 h-2/3 absolute  w-8 pl-3 " />
                        <textarea
                            defaultValue={dataID?.text}
                            {...register("text", { required: true })}
                            placeholder="Escribe algo"
                            className="px-3 py-4 border-none  relative placeholder:border-none appearance-none bg-white rounded text-base   outline-none focus:outline-none  w-full pl-10"
                        />
                        {errors.text && <p>Escribe un comentario 🤓</p>}
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-3">
                            <IconPhotoUp className="hover:opacity-5" />
                            <IconGif />
                            <IconMoodSmileBeam />
                            <IconCalendarStats />
                            <IconMapPin />
                        </div>
                        <button
                            type="submit"
                            className="flex-1 rounded-full p-2 border hover:border-gray-950"
                        >
                            Editar Comentario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
