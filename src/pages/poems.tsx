import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import { PoemsLayout } from '../layouts'
import { device, dimensions, colors } from '../styles/variables'

export const Splash = styled.h1`
  color: ${colors.brand};
  font-size: ${dimensions.headingSizes.splash}rem;
  text-align: center;
  margin-top: ${dimensions.margins.xl}rem;

  @media ${device.xs} {
    font-size: ${dimensions.headingSizes.splashSm - 3}rem;
  }

  @media ${device.md} {
    font-size: ${dimensions.headingSizes.splashSm + 3}rem;
  }

  @media ${device.lg} {
    font-size: ${dimensions.headingSizes.splash}rem;
  }
`

const Nav = styled.div`
  text-align: center;
`

const PoemsPage = () => (
  <PoemsLayout>
    <Page>
      <Container>
        <Splash>Latest</Splash>
        <Nav>
          <Link to="/poems/we-confessed">We Confessed</Link>
        </Nav>
      </Container>
    </Page>
  </PoemsLayout>
)

export default PoemsPage
