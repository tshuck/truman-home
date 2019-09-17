import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'rebass'
import { Link } from '.'

const query = graphql`
  query PreviewItemsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt
        frontmatter {
          title
          date
          tags
          date
          preview
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
    preview: string[]
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
interface PreviewItems {
  tags: string[]
}

const PreviewItem = (node: Node) => (
  <Box key={node.fields.slug} mb={4} color="white" width="100%">
    <Link to={node.fields.slug} color="accent" fontSize={3}>
      {node.frontmatter.title}
    </Link>
    <Text mt={2} color="subtitle">
      {node.frontmatter.date}
    </Text>
    <Text mt={2}>
      {node.frontmatter.preview.map(i => (
        <Text key={i}>{i}</Text>
      ))}
    </Text>
  </Box>
)

const PreviewItems: React.FC<PreviewItems> = ({ tags }) => {
  const {
    allMdx: { nodes }
  }: Data = useStaticQuery(query)

  const hasTags = (node: Node) => {
    const tagSet = new Set(node.frontmatter.tags)
    const tagsIncluded = tags.filter(t => tagSet.has(t)).length > 0
    return tags.length === 0 || tagsIncluded
  }

  return <>{nodes.filter(hasTags).map(PreviewItem)}</>
}

export default PreviewItems
