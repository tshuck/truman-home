import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import { Link } from '.'

const query = graphql`
  query PreviewItemsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___published }) {
      nodes {
        excerpt
        frontmatter {
          published(formatString: "MMMM Do, YYYY")
          title
          tags
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
    published: string
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
  selectedTags: string[]
}

const PreviewItem = (node: Node) => (
  <Box key={node.fields.slug} mb={4} color="white" width="100%">
    <Flex justifyContent="space-between" flexDirection={["column", "row"]}>
      <Link to={node.fields.slug} color="accent" fontSize={3}>
        {node.frontmatter.title}
      </Link>
      <Text mt={2} color="subtitle">
        {node.frontmatter.published}
      </Text>
    </Flex>
    <Text mt={2}><i>Excerpt:</i></Text>
    <Text mt={2} ml={2}>
      {node.frontmatter.preview.map(i => (
        <Text key={i}>{i}</Text>
      ))}
    </Text>
    <Box mt={2}>
      <Link to={node.fields.slug} color="accent" fontSize={1}>
        Read more
      </Link>
    </Box>
    <Box
      mx={[6,7]}
      py={3}
      sx={{
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'white'
      }}
    />
  </Box>
)

const PreviewItems: React.FC<PreviewItems> = ({ selectedTags }) => {
  const {
    allMdx: { nodes }
  }: Data = useStaticQuery(query)

  const hasTags = (node: Node) => {
    const tagSet = new Set(node.frontmatter.tags)
    const tagsIncluded = selectedTags.filter(t => tagSet.has(t)).length > 0
    return tagsIncluded
  }

  return <>{nodes.filter(hasTags).map(PreviewItem)}</>
}

export default PreviewItems
