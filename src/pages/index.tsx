import React, { useState } from 'react'
import { Heading } from 'rebass'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, PreviewItems, Tags } from '../components'
import Layout from '../layouts'

interface Group {
  tag: string
}
interface Data {
  allMdx: {
    group: Group[]
  }
}

const query = graphql`
  query TagsQuery {
    allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

const IndexPage = ({ location }: { location: { pathname: string } }) => {
  const {
    allMdx: { group }
  }: Data = useStaticQuery(query)
  const availableTags = group.map(g => g.tag)
  const [selectedTags, setSelectedTags] = useState<string[]>(availableTags)

  return (
    <Layout location={location}>
      <Container>
        <Heading textAlign="center" fontSize={[6, 8]} color="white" m={5}>
          Hello
        </Heading>
      </Container>
      <Container>
        <Tags availableTags={availableTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </Container>
      <Container>
        <PreviewItems selectedTags={selectedTags} />
      </Container>
    </Layout>
  )
}

export default IndexPage
