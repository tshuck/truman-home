import * as React from 'react'
import styled from '@emotion/styled'
import { device } from '../styles/variables'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media ${device.xs} {
    flex-direction: column-reverse;
  }

  @media ${device.lg} {
    flex-direction: row;
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
