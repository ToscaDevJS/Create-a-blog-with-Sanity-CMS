<br />
    <img src="README/images/logo.png" alt="Logo"  height="80">
<h3 >Crear un blog con Sanity CMS</h3>

Este es un proyecto que tiene como objetivo crear un blog completo y funcional utilizando Sanity CMS como plataforma de gestión de contenido

Mi web 😁 "https://toscadev.com/"

<div align="center" style="border-radius: 10px; overflow: hidden;">
    <img style="border-radius: 10px;" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Logo" />
     <img style="border-radius: 10px;" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Logo" />
  <img style="border-radius: 10px;" src="https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB" alt="Logo" />
   <img style="border-radius: 10px;" src="https://img.shields.io/badge/CMS-20232A?style=for-the-badge&logo=sanity&logoColor=61DAFB" alt="Logo" />

</div>

<div align="center" style="border-radius: 10px; overflow: hidden;">
    <img src="README/images/image 3.png" alt="Logo" />
</div>

Este es un proyecto que tiene como objetivo crear un blog completo y funcional utilizando Sanity CMS como plataforma de gestión de contenido

## Instalación

1. Clona este repositorio:
2. Instala las dependencias:
   `npm install`
3. Ejecuta el proyecto:
   `npm run dev`
4. Ajusta el proyecto a tus necesidades 😁

### Inicio rápido

- npm

```sh
npm install @sanity/client
```

```sh
npm install --save @sanity/image-url
```

```sh
npm install --save @portabletext/react
```

- .env

```sh
NEXT_PUBLIC_SANITY_PROJECT_ID=""
```

```sh
NEXT_PUBLIC_SANITY_DATASET=""
```

```sh
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-26"
```

### Cuando obtenemos los datos

#### Imágenes

```ts
const builder = imageUrlBuilder(client);

//Images
export function urlFor(source: Image) {
  return builder.image(source);
}
//PortableTextComponents
export const urlForImage = (source: Image) => {
  return builder?.image(source).auto("format").fit("max").url();
};

<img
  src={urlFor(mainImage.asset).url()}
  alt={mainImage.alt}
  className="rounded-2xl w-full"
  decoding="async"
  loading="lazy"
/>;
```

#### Slug

```html
<Link href={`/blog/post/${slug.current}`}></Link>
```

### Data **_ BODY _**

Importamos:

```js
import { PortableText, PortableTextComponents } from "@portabletext/react";
```

```tsx
<PortableText value={body} components={components} />
```

```js
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="p-5 bg-red-500 rounded-3xl">
        <img src={urlForImage(value)} alt="Post" width={700} height={700} />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
    h4: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-gray-600 font-semibold py-8">{children}</strong>
    ),
  },
};
```

Crea un archivo css para editar los elementos de mejor manera.

```css
p {
  @apply mt-6 text-xl leading-8 text-gray-700;
}
strong {
  @apply my-6  font-bold tracking-tight text-gray-900;
}
```

### Enlaces de referencias

@sanity/cliente: -https://www.sanity.io/docs/js-client#from-v5

@sanity/image-url - https://www.sanity.io/docs/image-url#sanity-image-url

@portabletext/react : https://www.sanity.io/plugins/portabletext-react

Enrrutador app - https://www.sanity.io/docs/js-client#nextjs-app-router

<div style="display: flex">
<div align="center" style="border-radius: 10px; overflow: hidden; padding: 6px">
    <img src="README/images/image 1.png" width="250" height="120" alt="Logo" />
</div>
<div align="center" style="border-radius: 10px; overflow: hidden; padding: 6px">
    <img src="README/images/image 2.png" width="250" height="120" alt="Logo" />
</div>
<div align="center" style="border-radius: 10px; overflow: hidden; padding: 6px">
    <img src="README/images/image 5.png" width="250"  height="120" alt="Logo" />
</div>
</div>
