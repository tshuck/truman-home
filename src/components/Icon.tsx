import React from 'react'
import styled from '@emotion/styled'
import { Colors, Theme } from '../gatsby-plugin-theme-ui'

interface Props {
  icon: React.ComponentType
  color: keyof Colors
  size: number
}
const Icon: React.FC<Props> = ({ icon, color, size }) => {
  const StyledIcon = styled(icon)<{ theme?: Theme }>(props => ({
    height: `${props.theme.space[size]}px`,
    width: 'auto',
    fill: props.theme.colors[color],
    '& *': {
      fill: props.theme.colors[color]
    }
  }))

  return <StyledIcon />
}

export default Icon
