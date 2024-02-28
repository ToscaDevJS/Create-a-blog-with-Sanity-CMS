
   export interface MainImage {
    _type: string;
    alt: string;
    asset: {_ref: string};
  }
  
  export interface Slug {
    current: string;
    _type: string;
  }
  export interface Author {
    _ref: string;
    _type: string;
  }
  export interface Category {
    _id: string;
    title: string;
  }
  
 export interface Post {
   _id:string;
   title: string;
   slug: Slug;
   excerpt: string;
   author: Author;
   mainImage: MainImage;
   categories: Category[];
   publishedAt: string;
   body:any
  }
  
  export interface PostLite {
    _id:string;
    title: string;
    slug: Slug;
    excerpt: string;
    author: Author;
    mainImage: MainImage;
    categories: Category[];
    publishedAt: string;
    body:any
   }