"use client";
import { CardNotas } from "@/components/Notas/CardNotas";
import { DrawerActionNewComments } from "@/components/Notas/Drawer";
import { HeaderNotas } from "@/components/Notas/ui/HeaderNotas";
import { useEffect } from "react";
import { UseComments } from "./context/commentsContext";

const PageCrud = () => {
  const { loadComments, comments: commentList } = UseComments();

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <section className="max-w-3xl mx-auto px-5">
        <HeaderNotas
          title={"Mis Notas"}
          descriptions="Te damos la bienvenida a la sección de Notas. No dudes en dejar tu opinión"
        />
        <section>
          {commentList.map((data) => (
            <CardNotas key={data._id} {...data} />
          ))}
        </section>
        <DrawerActionNewComments />
      </section>
    </main>
  );
};

export default PageCrud;
