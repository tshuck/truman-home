interface CSSModule {
  [className: string]: string
}

declare module 'gatsby-plugin-mdx'
declare module '@rebass/forms'
// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare namespace GraphQL {
  interface Poem {
    title: string
    url: string
  }

  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface data {
    site: {
      siteMetadata: {
        title: string
        description: string
        poems: Poem[]
      }
    }
  }
}
