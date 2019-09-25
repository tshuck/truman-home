import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Box, Button, Flex } from 'rebass'
import { useColorMode } from 'theme-ui'
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
      minHeight: '100vh',
      minWidth: minWidth ? `${minWidth}px` : 'inherit'
    }}
    color="foreground"
    bg="background"
    flexDirection="column"
    width="100%"
  >
    {children}
  </Flex>
)

interface Layout {
  location: {
    pathname: string
  }
  minWidth?: number
}

const Layout: React.FC<Layout> = ({ children, minWidth }) => {
  const [colorMode, setColorMode] = useColorMode()
  const colorModeButton = (
    <Button variant="outline" ml={1} onClick={() => setColorMode(colorMode === 'light' ? 'default' : 'light')} sx={{ cursor: 'pointer' }}>
      {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
  return (
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
            <Heading width="100%" py={3}>
              <Flex justifyContent="space-between">
                <Link
                  to="/"
                  fontSize={4}
                  color="accent"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  {data.site.siteMetadata.title}
                </Link>
                {colorModeButton}
              </Flex>
            </Heading>
            {children}
          </Content>
        </Box>
      )}
    />
  )
}

export default Layout
