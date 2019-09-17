import React, { useState } from 'react'
import { Heading } from 'rebass'

import { Container, PreviewItems, Tags } from '../components'
import Layout from '../layouts'

const IndexPage = () => {
  const [tags, setTags] = useState<string[]>([])

  return (
    <Layout>
      <Container>
        <Heading textAlign="center" fontSize={8} color="white" m={5}>
          Hello
        </Heading>
      </Container>
      <Container>
        <Tags tags={tags} setTags={setTags} />
      </Container>
      <Container>
        <PreviewItems tags={tags} />
      </Container>
    </Layout>
  )
}

export default IndexPage
