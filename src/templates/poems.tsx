import React from 'react'
import { graphql } from 'gatsby'
import { Heading, Box } from 'rebass'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container } from '../components'
import Layout from '../layouts'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Container>
        <Heading color="white" mt={3} mb={3}>
          {mdx.frontmatter.title}
        </Heading>
        <Box color="white" sx={{ minHeight: '100vh', minWidth: '' }}>
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
      }
    }
  }
`
