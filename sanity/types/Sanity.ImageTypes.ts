 /** @public */
 declare interface Image_2 {
     [key: string]: unknown
     asset?: Reference
     crop?: ImageCrop
     hotspot?: ImageHotspot
   }
   export type {Image_2 as Image}
  
/** @public */
export declare interface Reference {
    _type: string
    _ref: string
    _key?: string
    _weak?: boolean
    _strengthenOnPublish?: {
      type: string
      weak?: boolean
      template?: {
        id: string
        params: Record<string, string | number | boolean>
      }
    }
  }
  

  /** @public */
export declare interface ImageHotspot {
    _type?: 'sanity.imageHotspot'
    width: number
    height: number
    x: number
    y: number
  }

/** @public */
export declare interface ImageCrop {
    _type?: 'sanity.imageCrop'
    left: number
    bottom: number
    right: number
    top: number
  }
  