import { Image } from "./Sanity.ImageTypes";

export interface CommentDBTypes {
  _id: string;  //autogenerados
  _updatedAt: string; //autogenerados
  _createdAt: string; //autogenerados
  blockText: boolean; //autogenerados
  _rev: string; //autogenerados
  userName: string; //auth
  userImage: string; //auth
  userEmail: string; //auth
  userUid: string; //auth
  productoId: string;
  text: string;
  _type: string;
  rating: string;
  uploadImage: Image;
}

export interface CommentCreate {
  _type: string;
  userName: string;
  userImage: string;
  userEmail: string;
  userUid: string;
  productoId: string;
  text: string;
  rating: string;
  uploadImage?: Image;
}

export interface ICommentCreate {
  productoId: string,
  text: string,
  rating: string
  uploadImage?: Image;
}

export interface CommentUpdaterFiel {
  userName?: string;
  userImage?: string;
  userEmail?: string;
  rating?: string;
  text?: string;
  uploadImage?: Image;
}
