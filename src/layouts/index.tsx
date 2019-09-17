import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Box, Flex } from 'rebass'
import { Link } from '../components'
import 'modern-normalize'

interface Content {
  minWidth?: number
}
const Content: React.FC<Content> = ({ children, minWidth }) => (
  <Flex
    sx={{
      maxWidth: 800,
      mx: 'auto',
      px: 3,
      minHeight: "100vh",
      minWidth: minWidth ? `${minWidth}px` : 'inherit'
    }}
    color="foreground"
    bg="selection"
    flexDirection="column"
    width="100%"
  >
    {children}
  </Flex>
)

interface Layout {
  minWidth?: number
}

const Layout: React.FC<Layout> = ({ children, minWidth }) => (
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
      <Box bg="background">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'truman, software, poems, oranges' }
          ]}
        />
        <Content minWidth={minWidth}>
          <Heading
            width="100%"
            p={2}
            sx={{
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'white'
            }}
          >
            <Link to="/" fontSize={4} color="accent">
              {data.site.siteMetadata.title}
            </Link>
          </Heading>

          {children}
        </Content>
      </Box>
    )}
  />
)

export default Layout
