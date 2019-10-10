import React from 'react'
import { Sliders } from 'react-feather'
import { Box, Flex, Text } from 'rebass'
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
      <Label key={tag} alignItems="center" color="text" mr={2} width="auto" sx={{ cursor: 'pointer' }}>
        <Checkbox name="tags" onChange={onClick} checked={isSelected} color="accent" />
        <Text>{tag}</Text>
      </Label>
    )
  })

  return (
    <Box mb={5}>
      <Flex pb={3} fontSize={2} color="muted">
        <Sliders size={18} />
        <Box px={2}>Filter By</Box>
      </Flex>
      <Flex flexWrap="wrap">
        {tagButtons}
      </Flex>
      <Box as="hr" my={2} bg="hr" height="2px" sx={{ border: 'none' }} />
    </Box>
  )
}

export default Tags
