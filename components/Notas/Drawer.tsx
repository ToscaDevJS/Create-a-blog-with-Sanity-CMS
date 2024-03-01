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
import { createComments } from "@/sanity/queries/Sanity.CommentQueries";
import { toast } from "sonner";

export const DrawerAction = ({ id }: { id: string }) => {
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

export interface CreateComment {
  _type: string;
  userName: string;
  productoId: string;
  userUid: string;
  userImage: string;
  userEmail: string;
  text: string;
  rating: string;
}

type Inputs = {
  example: string;
  exampleRequired: string;
};
function NewComments() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateComment>();

  const onSubmit: SubmitHandler<CreateComment> = async (data) => {
    console.log(data);
    const newComment: CreateComment = {
      _type: "comments",
      userName: "maria orly",
      productoId: "1",
      userUid: "23456787654",
      userEmail: "mari@gmail.com",
      userImage:
        "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1709185958~exp=1709186558~hmac=38eaf715d801e0e5c295732d183eab136292ed25d96eb3719a8d44d6e7072642",
      rating: "5",
      text: data.text,
    };
    console.log(newComment);
    await createComments(newComment);
    toast("Comentario  añadido ok");
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
function DeleteCommments() {
  return (
    <div className="p-4 bg-white rounded-t-[10px] flex-1">
      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
      <div className="max-w-md mx-auto">
        <Drawer.Title className="font-medium mb-4">
          En la próxima acción, tendrás la opción de eliminar este comentario.{" "}
          <b>¿Estás seguro?</b> Ten en cuenta que esta acción es irreversible.
        </Drawer.Title>
        <div className="flex justify-end">
          <button className="border bg-black rounded-md px-3 py-2 text-white">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
function EditeComments() {
  return (
    <div className="p-4 bg-white rounded-t-[10px] flex-1">
      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
      <div className="max-w-md mx-auto">
        <Drawer.Title className="font-medium mb-4">
          Crear un comentario
        </Drawer.Title>
        <section>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <IconPencil className="z-10 h-2/3 absolute  w-8 pl-3 " />
            <textarea
              placeholder="Escribe algo"
              className="px-3 py-4 border-none  relative placeholder:border-none appearance-none bg-white rounded text-base   outline-none focus:outline-none  w-full pl-10"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex space-x-3">
              <IconPhotoUp className="hover:opacity-5" />
              <IconGif />
              <IconMoodSmileBeam />
              <IconCalendarStats />
              <IconMapPin />
            </div>
            <button className="flex-1 rounded-full p-2 border hover:border-gray-950">
              Enviar Comentario
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
