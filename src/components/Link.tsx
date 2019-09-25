import { Link, GatsbyLinkProps } from 'gatsby'
import styled from 'styled-components'
import theme, { Theme } from '../gatsby-plugin-theme-ui'

const fromTheme = <K extends keyof Theme>(property: keyof Theme, value?: keyof Theme[K] | number) => {
  if (!value) {
    return 'inherit'
  }
  const propertySet = theme[property]
  if (Array.isArray(propertySet)) {
    return propertySet[value as number] || value
  }
  // TODO:  Why won't this work?
  return propertySet[value as keyof Theme[K]] || value
}

interface LinkInterface extends GatsbyLinkProps<{}> {
  color?: keyof Theme['colors']
  fontSize?: number
}
// Styling Gatsby's `Link` property is kind of hard with
// a theme and styled-system.  Best thing to do is delegate
// for now.
export default styled(Link)`
  color: ${(props: LinkInterface) => props.color && fromTheme<'colors'>('colors', props.color)};
  font-size: ${(props: LinkInterface) => props.fontSize && `${fromTheme('fontSizes', props.fontSize)}px`};
`
