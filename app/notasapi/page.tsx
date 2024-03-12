"use client"
import { HeaderNotas } from '@/components/Notas/ui/HeaderNotas';
import { useQuery } from '@tanstack/react-query';
import { loadComments } from '../api/sanitycms/config/queries/Sanity.CommentQueries';
import { CommentDBTypes } from '../api/sanitycms/config/types/Sanity.CommentTypes';

const PageNotasApi = () => {
    const { data } = useQuery({ queryKey: ['loadComments'], queryFn: loadComments })

    console.log(data)

    return (<main>
        <section className="max-w-3xl mx-auto px-5">
            <HeaderNotas
                title={"notas fetch api @tanstack/react-query"}
                descriptions=" refactorizando las llamadas con  npm i @tanstack/react-query"
            />
            <section>
                <section>
                    {data?.map((data: CommentDBTypes) => (
                        <div key={data._id}>
                            <h1>{data.text}</h1>
                        </div>
                    ))}
                </section>
            </section>
        </section>

    </main>
    )
}

export default PageNotasApi