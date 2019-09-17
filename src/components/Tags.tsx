import React from 'react'
import { Button, Flex, Text } from 'rebass'
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
        <Checkbox name="tags" onChange={onClick} checked={isSelected} />
        {tag}
      </Label>
    )
  })

  return (
    <>
      <Flex color="white" mb={1} justifyContent="space-between">
        <Text fontSize={3}>Filter by Tag</Text>
        <Button variant="outline" ml={1} onClick={() => setSelectedTags([])} sx={{ cursor: 'pointer' }}>
          clear
        </Button>
      </Flex>
      <Flex justifyContent="center" mb={5}>
        {tagButtons}
      </Flex>
    </>
  )
}

export default Tags
