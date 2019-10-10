import React from 'react'
import { graphql } from 'gatsby'
import { Heading, Box } from 'rebass'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container } from '../components'
import Layout from '../layouts'

interface PageTemplate {
  location: {
    pathname: string
  }
  data: {
    mdx: {
      id: string
      body: string
      frontmatter: {
        title: string
        minWidth: number
      }
    }
  }
}

export default function PageTemplate({ location, data: { mdx } }: PageTemplate) {
  return (
    <Layout minWidth={mdx.frontmatter.minWidth} location={location}>
      <Container>
        <Heading color="text" mt={3} mb={3}>
          {mdx.frontmatter.title}
        </Heading>
        <Box color="text" mb={5} sx={{ minHeight: '100vh', minWidth: '' }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        minWidth
      }
    }
  }
`
