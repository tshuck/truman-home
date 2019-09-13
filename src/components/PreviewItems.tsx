import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'

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
  <div key={node.fields.slug}>
    <h1>
      <Link to={node.fields.slug}>
        {node.frontmatter.title}
      </Link>
    </h1>
    <p>
      {node.frontmatter.date}
    </p>
    <p>
      {node.excerpt}
    </p>
  </div>
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
