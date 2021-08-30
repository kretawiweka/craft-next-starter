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
  pageTitle: 'Dita & Eka Wedding',
  pageDescription: `Wedding website of Anindita & Kretawiweka`,
  image_icon: `/static/images/anka-logo.png`,
  og: {
    url: `https://anka.kretawiweka.site`,
    type: 'website',
    image: `/static/images/anka-logo.png`,
    title: 'Dita & Eka Wedding',
    description: `Wedding website of Anindita & Kretawiweka`,
  },
  manifest: {
    url: `https://anka.kretawiweka.site/manifest.json`,
  },
}
export default META_PROPS
