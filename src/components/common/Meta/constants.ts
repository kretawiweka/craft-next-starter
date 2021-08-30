interface OG_TYPES {
  url: string
  type: string
  image: string
  title: string
  description: string
}

interface MANIFEST_TYPES {
  url: string
}

interface META_PROPS_TYPES {
  pageTitle: string
  pageDescription: string
  image_icon: string
  og: OG_TYPES
  manifest: MANIFEST_TYPES
}

const META_PROPS: META_PROPS_TYPES = {
  pageTitle: 'Page Title',
  pageDescription: `Page Description`,
  image_icon: `/static/images/nextjs-logo.png`,
  og: {
    url: `http://localhost:3000`,
    type: 'website',
    image: `/static/images/nextjs-logo.png`,
    title: 'OG Title',
    description: `OG Description`,
  },
  manifest: {
    url: `http://localhost:3000/manifest.json`,
  },
}
export default META_PROPS
