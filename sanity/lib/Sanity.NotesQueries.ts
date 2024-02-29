import { sanityClientConfig } from "./client"

export interface CreateNota{
    _type:string,
    userName:string,
    productoId:string,
    userUid:string,
    userImage:string,
    userEmail:string,
    text:string,
    rating:string
  }
  
  
    export async function createNota(newNota: CreateNota) {
      const result = await sanityClientConfig.create(newNota)
      return result
    } 