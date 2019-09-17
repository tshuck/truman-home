export interface Theme {
  colors: {
    [k: string]: string
  }
  fontSizes: number[]
  space: number[]
}

const theme: Theme = {
  colors: {
    background: '#002B36',
    selection: '#073642',
    white: '#fdf6e3',
    accent: '#b58900',
    subtitle: '#eee8d5'
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ]
}

export default theme
