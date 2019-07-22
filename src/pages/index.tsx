import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import { IndexLayout } from '../layouts'
import { device, dimensions, colors } from '../styles/variables'

export const Splash = styled.h1`
  color: ${colors.brand};
  text-align: center;
  margin-top: ${dimensions.margins.xl}rem;
  text-align: center;

  @media ${device.xs} {
    font-size: ${dimensions.headingSizes.splashSm}rem;
  }

  @media ${device.md} {
    font-size: ${dimensions.headingSizes.splashSm + 5}rem;
  }

  @media ${device.lg} {
    font-size: ${dimensions.headingSizes.splash}rem;
  }
`

const Nav = styled.div`
  text-align: center;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Splash>Hello</Splash>
        <Nav>
          <Link to="poems">Poems</Link>
        </Nav>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
