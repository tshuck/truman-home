import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { colors } from '../styles/variables'
import Page from '../components/Page'
import Container from '../components/Container'
import { PoemsLayout } from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const Header = styled.h1`
  color: ${colors.brand};
`

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <PoemsLayout>
    <Page>
      <Container>
        <Header>{data.markdownRemark.frontmatter.title}</Header>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </PoemsLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
