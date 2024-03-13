"use client"
import { HeaderNotas } from '@/components/Notas/ui/HeaderNotas';
import { useQuery } from '@tanstack/react-query';
import { loadDatas } from './libs/api/fetchAll';
import { CardNotas } from '@/components/NotaApi/CardNotas';
import { DrawerActionNewComments } from '@/components/NotaApi/DrawerActions/DrawerActionNewComments';

const PageNotasApi = () => {
    const { data, isLoading } = useQuery({ queryKey: ['loadComments'], queryFn: loadDatas })
    console.log(data)
    return (<main>
        <section className="max-w-3xl mx-auto px-5">
            <HeaderNotas
                title={"notas fetch api @tanstack/react-query"}
                descriptions=" refactorizando las llamadas con  npm i @tanstack/react-query"
            />
            <section>
                <h1>Notas</h1>
                {isLoading && <h1>Cargando...</h1>}
                {data?.map((data) => <CardNotas key={data._id} {...data} />)}
            </section>
        </section>
        <DrawerActionNewComments />
    </main>
    )
}

export default PageNotasApi

