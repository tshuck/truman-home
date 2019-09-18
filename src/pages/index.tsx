import React, { useState } from 'react'
import { Heading, Text } from 'rebass'
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

  const storedTags = localStorage.getItem('selectedTags')
  const startingTags = (storedTags && JSON.parse(storedTags)) || availableTags
  const [selectedTags, setSelectedTagsState] = useState<string[]>(startingTags)

  const setSelectedTags = (tags: string[]) => {
    setSelectedTagsState(tags)
    localStorage.setItem('selectedTags', JSON.stringify(tags))
  }

  return (
    <Layout location={location}>
      <Container>
        <Heading textAlign="center" fontSize={[6, 8]} color="text" mt={5}>
          Hello
        </Heading>
        <Text color="text" mt={5} mx={5}>
          Some poetry. Maybe thoughts about existing in the world. Ideas about technology.
        </Text>
        <Text color="text" mb={5} mx={5}>
          Site title from e.e. cummings' <i>who are you,little i</i>.
        </Text>
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
