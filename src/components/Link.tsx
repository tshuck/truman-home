import { Link, GatsbyLinkProps } from 'gatsby'
import styled from 'styled-components'
import theme, { Theme } from '../gatsby-plugin-theme-ui'

const fromTheme = (property: keyof Theme, value?: string | number) => {
  if (!value) {
    return 'inherit'
  }

  const propertySet = theme[property]
  if (Array.isArray(propertySet)) {
    return propertySet[value as number] || value
  }
  return propertySet[value as string] || value

  return ''
}

interface LinkInterface extends GatsbyLinkProps<{}> {
  fontSize?: number
}
// Styling Gatsby's `Link` property is kind of hard with
// a theme and styled-system.  Best thing to do is delegate
// for now.
export default styled(Link)`
  color: ${(props: LinkInterface) => props.color && fromTheme('colors', props.color)};
  font-size: ${(props: LinkInterface) => props.fontSize && `${fromTheme('fontSizes', props.fontSize)}px`};
`
