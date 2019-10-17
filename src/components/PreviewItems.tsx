import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, Text } from 'rebass'
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
  <Box key={node.fields.slug} mb={4} color="text" width="100%">
    <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
      <Box as="span" color="text" fontSize={4} sx={{ fontWeight: 'bold' }}>
        {node.frontmatter.title}
      </Box>
    </Link>
    <Text fontSize={1} my={2} color="muted">
      {node.frontmatter.tags.join(', ')}
    </Text>
    <Box bg="foreground" my={3} p={3} sx={{ borderRadius: 4 }}>
      <Text>
        {node.frontmatter.preview.map(i => (
          <Text key={i}>{i}</Text>
        ))}
      </Text>
    </Box>
    <Box my={2}>
      <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
        <Button variant="outline" sx={{ cursor: 'pointer' }}>
          Read More
        </Button>
      </Link>
    </Box>
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
