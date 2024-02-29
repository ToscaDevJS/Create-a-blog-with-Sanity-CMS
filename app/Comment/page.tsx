import { AddComment } from "@/components/Notas/AddComment";
import { CardNotas } from "@/components/Notas/CardNotas";
import { HeaderNotas } from "@/components/Notas/HeaderNotas";
import { getAllComments } from "@/sanity/lib/Sanity.CommentQueries";
import { CommentTypes } from "@/sanity/types/Sanity.CommentTypes";

const PageCrud = async () => {
  const commentList: CommentTypes[] = await getAllComments(); //no apicar use Effect en comentarios no es necesario que se actualize

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

          <AddComment />
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
