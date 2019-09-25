interface Colors {
  background: string
  foreground: string
  text: string
  accent: string
  subtitle: string
  muted: string
  hr: string
}
export interface Theme {
  colors: Colors & {
    modes: {
      light: Colors
    }
  }
  fonts: {
    body: string
    heading: string
    monospace: string
  }
  fontSizes: number[]
  fontWeights: {
    body: number
    heading: number
    bold: number
  }
  lineHeights: {
    body: number
    heading: number
  }
  space: number[]
  sizes: {
    avatar: number
  }
  radii: {
    default: number
    circle: number
  }
  shadows: {
    card: string
  }
  text: {
    heading: {
      fontFamily: string
      lineHeight: string
      fontWeight: string
    }
    display: {
      fontFamily: string
      fontWeight: string
      lineHeight: string
      fontSize: number[]
    }
    caps: {
      textTransform: string
      letterSpacing: string
    }
  }
  variants: {
    avatar: {
      width: string
      height: string
      borderRadius: string
    }
    card: {
      p: number
      bg: string
      boxShadow: string
    }
    link: {
      color: string
    }
    nav: {
      fontSize: number
      fontWeight: string
      display: string
      p: number
      color: string
      textDecoration: string
      ':hover,:focus,.active': {
        color: string
      }
    }
  }
  buttons: {
    primary: {
      fontSize: number
      fontWeight: string
      color: string
      bg: string
      borderRadius: string
    }
    outline: {
      variant: string
      color: string
      bg: string
      boxShadow: string
    }
    secondary: {
      variant: string
      color: string
      bg: string
    }
  }
  styles: {
    root: {
      fontFamily: string
      fontWeight: string
      lineHeight: string
    }
  }
}

const theme: Theme = {
  colors: {
    foreground: '#2D3748',
    background: '#1A202C',
    text: '#CBD5E0',
    accent: '#319795',
    subtitle: '#eee8d5',
    muted: '#A0AEC0',
    hr: '#4A5568',
    // foreground: '#002B36',
    // background: '#073642',
    // text: '#fdf6e3',
    // accent: '#b58900',
    // subtitle: '#eee8d5',
    modes: {
      // light: {
      //   foreground: '#eee8d5',
      //   background: '#fdf6e3',
      //   text: '#586e75',
      //   accent: '#b58900',
      //   subtitle: '#657b83'
      // }
      light: {
        foreground: '#eee8d5',
        background: '#fdf6e3',
        text: '#586e75',
        accent: '#b58900',
        subtitle: '#657b83',
        muted: '#CBD5E0',
        hr: '#4A5568'
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'accent',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
}

export default theme
