import { AddComments } from "@/components/Notas/AddComments";
import { CardNotas } from "@/components/Notas/CardNotas";
import { DeleteCommments } from "@/components/Notas/DeleteComments";
import { DrawerAction } from "@/components/Notas/Drawer";
import { HeaderNotas } from "@/components/Notas/ui/HeaderNotas";
import { UpdateComments } from "@/components/Notas/UpdateComments";
import { getAllComments } from "@/sanity/queries/Sanity.CommentQueries";
import { CommentTypes } from "@/sanity/types/Sanity.CommentTypes";

const PageCrud = async () => {
  const commentList: CommentTypes[] = await getAllComments();

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
      </section>
    </main>
  );
};

export default PageCrud;

/* 
 const [commentList, setCommentList] = useState<CommentTypes[]>([]);

   useEffect(() => {
    async function refreshComents() {
      const commment = await getAllComments();
      setCommentList(commment);
    }
    refreshComents();
    console.log("render");
  }, []); */
