import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { Box, Heading, Link, Text } from 'rebass'

const query = graphql`
  query PreviewItemsQuery {
    allMdx(sort: {fields: frontmatter___date}) {
      nodes {
        excerpt
        frontmatter {
          title
          date
          tags
          excerpt
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
interface Node {
  excerpt: string
  frontmatter: {
    date: string
    tags: string[]
    title: string
  }
  fields: {
    slug: string
  }
}
interface Data {
  allMdx: {
    nodes: Node[]
  }
}
interface IPreviewItems {
  tags: string[]
}

const PreviewItem = (node: Node) => (
  <Box key={node.fields.slug} pb={5} color='white' width="100%">
    <Link href="#" onClick={() => navigate(node.fields.slug)} fontSize={5} color='accent'>
        {node.frontmatter.title}
    </Link>
    <Text mt={1} color='subtitle'>
      {node.frontmatter.date}
    </Text>
    <Text>
      {node.excerpt}
    </Text>
  </Box>
)

const PreviewItems: React.FC<IPreviewItems> = ({ tags }) => {
  const { allMdx: { nodes } }: Data = useStaticQuery(query)

  const hasTags = (node: Node) => {
    if (tags.length === 0) {
      return true
    }

    const tagSet = new Set(node.frontmatter.tags)
    const tagsIncluded = tags.filter(t => tagSet.has(t)).length > 0
    return tags.length === 0 || tagsIncluded
  }

  return (
    <>
      {nodes.filter(hasTags).map(PreviewItem)}
    </>
  )
}

export default PreviewItems
