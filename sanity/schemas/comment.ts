import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    defineField({
      name: 'productoId',
      title: 'Producto Id',
      type: 'string',
    }),
    defineField({
      name: 'userUid',
      title: 'User ID',
      type: 'string',
    }),
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
      }),
      defineField({
        name: 'userImage',
        title: 'User Image',
        type: 'string',
      }),
      defineField({
        name: 'userEmail',
        title: 'User Email',
        type: 'string',
      }),
      defineField({
        name: 'text',
        title: 'Text',
        type: 'text',
      }),

      defineField({
        name: 'rating',
        title: 'Rating',
        type: 'string',
        options: {
            list: [
                {title: 'Espectacular', value: '5'},
                {title: 'Bueno', value: '4'},
                {title: 'Mejorable', value: '3'},
                {title: 'Malo', value: '2'},
                {title: 'Malo', value: '1'},

            ]
        }
      }),

      defineField({
        name: 'blockText',
        title: 'Block Text',
        description:'ADMIN Control: Alternar si el comentario se considera inapropiado',
        type: 'boolean',
        initialValue: false,
      //  readOnly: true,
      }),

      defineField({
        name: 'uploadImage',
        title: 'Upload Images',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }),




  ],
  preview: {
    select: {
      title: 'userEmail',
      userName: 'userName',
      text: 'text',
      userImage:"userImage"
    },
    prepare(selection) {
      const {userName,text,userImage,title} = selection
      return {
        title:title,
        subtitle: userName && `by ${userName} : ${text}`,
        imageUrl: userImage,
    }
    },
  },
})
