import React from 'react'
import { Flex } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'

const calculateTags = (tags: string[], clickedTag: string): string[] => {
  if (tags.includes(clickedTag)) {
    return tags.filter(t => t !== clickedTag)
  }

  return [...tags, clickedTag]
}

interface Tags {
  availableTags: string[]
  selectedTags: string[]
  setSelectedTags: (tags: string[]) => void
}
const Tags: React.FC<Tags> = ({ availableTags, selectedTags, setSelectedTags }) => {
  const tagButtons = availableTags.map(tag => {
    const onClick = () => setSelectedTags(calculateTags(selectedTags, tag))
    const isSelected = selectedTags.includes(tag)
    return (
      <Label key={tag} alignItems="center" color="white" sx={{ cursor: 'pointer' }}>
        <Checkbox name="tags" onClick={onClick} defaultChecked={isSelected}/>
        {tag}
      </Label>
    )
  })

  return (
    <Flex justifyContent="center" mb={3}>
      {tagButtons}
    </Flex>
  )
}

export default Tags
