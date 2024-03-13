"use client";
import {
  IconCalendarStats,
  IconGif,
  IconMapPin,
  IconMoodSmileBeam,
  IconPencil,
  IconPhotoUp,
  IconTrash,
} from "@tabler/icons-react";
import { Drawer } from "vaul";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CommentUpdaterFiel,
  ICommentCreate,
} from "@/sanity/types/Sanity.CommentTypes";
import {
  createComments,
  //  deleteComments,
  getPostComments,
  //  updateComments,
} from "@/sanity/queries/Sanity.CommentQueries";
import { useEffect, useState } from "react";
import { UseComments } from "@/app/notas/context/commentsContext";

export const DrawerActionNewComments = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="bg-white w-full border text-center hover:bg-zinc-100 text-black p-3 mt-10 rounded-md shadow-xl flex justify-center px-1 ">
        Añadir Comentario
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <NewComments />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
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

function NewComments() {
  const { loadComments } = UseComments();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ICommentCreate>();

  const onSubmit: SubmitHandler<ICommentCreate> = async (data) => {
    console.log(data);
    const newData: ICommentCreate = {
      ...data,
      productoId: "asdsdasd",
      rating: "5",
    };
    await createComments(newData);
    reset();
    loadComments();
  };

  return (
    <div className="p-4 bg-white rounded-t-[10px] flex-1">
      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
      <div className="max-w-md mx-auto">
        <Drawer.Title className="font-medium mb-4">
          Crear un comentario
        </Drawer.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <IconPencil className="z-10 h-2/3 absolute  w-8 pl-3 " />
            <textarea
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
              Enviar Comentario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function DeleteCommments({ id }: { id: string }) {
  const { deleteComments } = UseComments();
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
            onClick={() => {
              deleteComments(id);
            }}
            className="border bg-black rounded-md px-3 py-2 text-white"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
function EditeComments({ id }: { id: string }) {
  const [commentList, setCommentList] = useState<CommentUpdaterFiel>();
  const { updateComments } = UseComments();

  useEffect(() => {
    async function refreshComents() {
      const fieldsDefault: CommentUpdaterFiel = await getPostComments(id);
      setCommentList(fieldsDefault);
    }
    refreshComents();
  }, [id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICommentCreate>();

  const onSubmit: SubmitHandler<ICommentCreate> = async (data) => {
    const newData: CommentUpdaterFiel = {
      ...data,
      id
    };
    console.log(newData);
    await updateComments(id, newData);
  };

  return (
    <div className="p-4 bg-white rounded-t-[10px] flex-1">
      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
      <div className="max-w-md mx-auto">
        <Drawer.Title className="font-medium mb-4">EDITE</Drawer.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <IconPencil className="z-10 h-2/3 absolute  w-8 pl-3 " />
            <textarea
              defaultValue={commentList?.text}
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
