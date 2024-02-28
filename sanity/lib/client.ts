import {createClient, type ClientConfig} from '@sanity/client'
//import { apiVersion, dataset, projectId, useCdn } from '../env'

const config: ClientConfig = {
  apiVersion:"2024-01-26",
  dataset:"production",
  projectId:"etvkz4mu",
  useCdn:true,
}
//export const client = createClient(config)
export const sanityClientConfig = createClient(config)



//const data = await client.fetch<number>(`count(*)`)
/* next app
export default async function ReactServerComponent() {
  const data = await client.fetch<number>(
    `count(*[_type == "page"])`,
    {},
    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      cache: 'force-cache',
      next: {tags: ['pages']},
    },
  )

  return <h1>Number of pages: {data}</h1>
}

*/