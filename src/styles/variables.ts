/* tslint:disable:max-line-length */

export const colors = {
  brand: '#89909F',
  accent: '#75485E',
  success: '#70A9A1',
  warning: '#B2945B',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#fff',
  black: '#000'
}

export const fonts = {
  sansSerif: 'Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const device = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`
}

export const widths = {
  xs: 300,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    splashSm: 9,
    splash: 20,
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    list: 2,
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5,
  margins: {
    xs: 0.25,
    sm: 0.75,
    md: 1,
    lg: 2,
    xl: 5
  }
}

export const heights = {
  header: 60
}
