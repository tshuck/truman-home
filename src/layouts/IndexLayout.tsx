import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import { Heading } from 'rebass'
import { Container } from '../components'

const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: GraphQL.data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'truman, software, poems, oranges' }
          ]}
        />
        <Heading color='white' bg='brand' width="100%" p={2}>
          <Container>
            {data.site.siteMetadata.title}
          </Container>
        </Heading>
        <Container>{children}</Container>
      </>
    )}
  />
)

export default MainLayout
