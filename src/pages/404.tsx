import * as React from 'react'
import { Link } from 'gatsby'

import Container from '../components/Container'
import Layout from '../layouts'

const NotFoundPage = ({location}: {location: object}) => (
  <Layout location={location}>
    <Container>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
