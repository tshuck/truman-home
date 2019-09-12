import React, { useState } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
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

const tagsQuery = graphql`
  query TagsQuery {
    allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

const pageQuery = graphql`
  query IndexPageQuery {
    allMdx(sort: {fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`

const calculateTags = (tags, clickedTag) => {
  if(tags.includes(clickedTag)) {
    return tags.filter(t => t !== clickedTag)
  }

  return [...tags, clickedTag]
}

const IndexPage = () => {
  const [tags, setTags] = useState([]);

  const Tags: React.FC = (data) => {
    return data.allMdx.group.map(g => {
      const onClick = () => setTags(calculateTags(tags, g.tag))
      const isToggled = tags.includes(g.tag) ? 'on' : 'off'
      return <p onClick={onClick}>{g.tag} {isToggled}</p>
    })
  }

  const Content: React.FC = (data) => {
    return data.allMdx.nodes.map(node => {
      const nodeTags = new Set(node.frontmatter.tags)
      const tagsIncluded = tags.filter(t => nodeTags.has(t)).length === 0
      if(tags.length > 0 && tagsIncluded) {
        return null
      }
      return <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    }).filter(i => !!i)
  }

  return <IndexLayout>
    <Page>
      <Container>
        <Splash>Hello</Splash>
      </Container>
      <Container>
        <StaticQuery query={tagsQuery} render={Tags} />
      </Container>
      <Container>
        <StaticQuery query={pageQuery} render={Content} />
      </Container>
    </Page>
  </IndexLayout>
}

export default IndexPage
