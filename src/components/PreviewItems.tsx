import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Box, Text } from 'rebass'

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
interface INode {
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
interface IData {
  allMdx: {
    nodes: INode[]
  }
}
interface IPreviewItems {
  tags: string[]
}

const PreviewItem = (node: INode) => (
  <Box key={node.fields.slug} mb={4} color="white" width="100%">
    <Link to={node.fields.slug}>
      {node.frontmatter.title}
    </Link>
    <Text mt={2} color="subtitle">
      {node.frontmatter.date}
    </Text>
    <Text mt={2}>
      {node.frontmatter.preview.map(i => (
        <Text>{i}</Text>
      ))}
    </Text>
  </Box>
)

const PreviewItems: React.FC<IPreviewItems> = ({ tags }) => {
  const {
    allMdx: { nodes }
  }: IData = useStaticQuery(query)

  const hasTags = (node: INode) => {
    const tagSet = new Set(node.frontmatter.tags)
    const tagsIncluded = tags.filter(t => tagSet.has(t)).length > 0
    return tags.length === 0 || tagsIncluded
  }

  return <>{nodes.filter(hasTags).map(PreviewItem)}</>
}

export default PreviewItems
