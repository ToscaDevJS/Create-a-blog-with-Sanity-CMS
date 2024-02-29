import { Image } from "./Sanity.ImageTypes";

export interface CommentTypes {
  _id: string;
  _createdAt:string;
  _updatedAt:string;
  blockDocument:boolean;
  text: string;
  uploadImage: Image;
  rating: number;
  userUid: string;
  userName: string;
  userEmail: string;
  userImage: string; 
  productoIdSlug: number;
  }
  export interface CreateComment{
    _type:string,
    userName:string,
    productoId:string,
    userUid:string,
    userImage:string,
    userEmail:string,
    text:string,
    rating:string
  }
  export interface UpdateComment{
    userName?:string,
    productoId?:string,
    userImage?:string,
    userEmail?:string,
    text?:string,
    rating?:string
  }