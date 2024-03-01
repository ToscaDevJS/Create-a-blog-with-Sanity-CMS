import { sanityClientConfig } from "../lib/client"

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


    
/* 
    export async function getAllComments() {

      const query = `*[_type == "comments"]{
        _id,
        productoId,
        _createdAt,
        _updatedAt,
        userUid,
        userImage,
        userEmail,
        userName,
        rating,
        text,
        uploadImage,
        }
      `;
      const data = await sanityClientConfig.fetch(query);
      return data;
    }
    export async function createComments(newComment: CreateComment) {
      const result = await sanityClientConfig.create(newComment)
      return result
    } 
    export async function deleteComments(_id:string) {
      const result = await sanityClientConfig.delete(_id)
      return result
    }
  
     export async function updateComments(_id:string, updatePatch:UpdateComment) {
      const patch = {
        set: {
          ...updatePatch
        },
      };
      const result = await sanityClientConfig.patch(_id, patch).commit();
      return result;
     
    }
   */