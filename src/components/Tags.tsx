import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

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

const calculateTags = (tags: string[], clickedTag: string): string[] => {
  if(tags.includes(clickedTag)) {
    return tags.filter(t => t !== clickedTag)
  }

  return [...tags, clickedTag]
}

interface ITags {
  tags: string[]
  setTags: (tags: string[]) => void
}
const Tags: React.FC<ITags> = ({ tags, setTags }) => {
  const { allMdx: { group } }: Data = useStaticQuery(query)

  const tagButtons = group.map(g => {
    const onClick = () => setTags(calculateTags(tags, g.tag))
    const isToggled = tags.includes(g.tag) ? 'on' : 'off'
    return <button onClick={onClick}>{g.tag} {isToggled}</button>
  })

  return <div>
    {tagButtons}
  </div>
}

export default Tags
