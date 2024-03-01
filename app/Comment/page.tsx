import { CardNotas } from "@/components/Notas/CardNotas";
import { DrawerActionNewComments } from "@/components/Notas/Drawer";
import { HeaderNotas } from "@/components/Notas/ui/HeaderNotas";
import { getAllComments } from "@/sanity/queries/Sanity.CommentQueries";
import { CommentDBTypes } from "@/sanity/types/Sanity.CommentTypes";

const PageCrud = async () => {
  const commentList: CommentDBTypes[] = await getAllComments();

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
