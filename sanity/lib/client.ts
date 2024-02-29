import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
  apiVersion:"2024-01-26",
  dataset:"production",
  projectId:"etvkz4mu",
  useCdn:true,
  token:"skrHpXUvfOQh7uzIQXYSUuZJdKA62B1y99jHrMMEFoSIrzeqPyZC6AuYNvbmWt6g9u3nbijjR3Cm282RwI3M2UJbrqRPPLJqPqVgvPO5RgESDcIBpFnXB9BWbyG97fKGZQsGdsxmJQLzJyNTBR1oXBpvR6EmXe7vMJlMokDqMQf8pzCcgiIN",
  ignoreBrowserTokenWarning: true //ignora el mensaje de alerta en consola Token expuesto
}
export const sanityClientConfig = createClient(config)

