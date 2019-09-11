import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const DividerWrap = styled.div`
  display: flex;
  align-items: center;
`

const Divider = styled.div`
  margin: ${dimensions.margins.sm}rem;
  font-size: ${dimensions.headingSizes.h3}rem;
`

interface HeaderProps {
  title: string
  crumbs?: { title: string; url: string }[]
}

const Header: React.SFC<HeaderProps> = ({ title, crumbs = [] }) => {
  const crumbLinks = crumbs.map(c => (
    <DividerWrap key={title}>
      <Divider>-</Divider>
      <HomepageLink to={c.url}>{c.title}</HomepageLink>
    </DividerWrap>
  ))

  return (
    <StyledHeader>
      <HeaderInner>
        <DividerWrap>
          <HomepageLink to="/">{title}</HomepageLink>
        </DividerWrap>
        {crumbLinks}
      </HeaderInner>
    </StyledHeader>
  )
}

export default Header
