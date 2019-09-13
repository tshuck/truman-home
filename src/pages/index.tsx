import React, { useState } from 'react';
import styled from '@emotion/styled'

import { Container, Page, PreviewItems, Tags } from '../components'
import { IndexLayout } from '../layouts'
import { colors } from '../styles/variables'

export const Splash = styled.h1`
  color: ${colors.brand};
  text-align: center;
  font-size: 5rem;
`

const IndexPage = () => {
  const [tags, setTags] = useState<string[]>([]);

  return <IndexLayout>
    <Page>
      <Container>
        <Splash>Hello</Splash>
      </Container>
      <Container>
        <Tags tags={tags} setTags={setTags} />
      </Container>
      <Container>
        <PreviewItems tags={tags} />
      </Container>
    </Page>
  </IndexLayout>
}

export default IndexPage
