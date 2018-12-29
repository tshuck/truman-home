import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { dimensions, colors } from '../styles/variables'

const Welcome = styled.h1`
  color: ${colors.brand};
  font-size: ${dimensions.headingSizes.splash}rem;
  text-align: center;
  margin-top: ${dimensions.margins.xl}rem;
`

const Nav = styled.div`
  text-align: center;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Welcome>Hello</Welcome>
        <Nav>
          <Link to="poems">Poems</Link>
        </Nav>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
