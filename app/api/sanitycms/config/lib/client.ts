import { createClient, type ClientConfig } from '@sanity/client'

const SANITY_SECRET_TOKEN = process.env.SANITY_SECRET_TOKEN;
const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const NEXT_PUBLIC_SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const config: ClientConfig = {
  apiVersion: NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: SANITY_SECRET_TOKEN,
  useCdn: false,
  // ignoreBrowserTokenWarning: true //ignora el mensaje de alerta en consola Token expuesto
}
export const sanityClientConfig = createClient(config)

