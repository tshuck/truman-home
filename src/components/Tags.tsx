import React from 'react'
import { Sliders } from 'react-feather'
import { Box, Flex } from 'rebass'
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
      <Label key={tag} alignItems="center" color="text" mx={2} width="auto" sx={{ cursor: 'pointer' }}>
        <Checkbox name="tags" onChange={onClick} checked={isSelected} color="accent" />
        {tag}
      </Label>
    )
  })

  return (
    <Box mb={5}>
      <Flex justifyContent="space-between" pb={3}>
        <Flex fontSize={2} color="muted" alignItems="center">
          <Sliders size={18} />
          <Box px={2}>Filter By:</Box>
        </Flex>
        <Flex justifyContent="flex-end" flex="1 1 0%">
          {tagButtons}
        </Flex>
      </Flex>
      <Box as="hr" my={2} bg="hr" height="2px" sx={{ border: 'none' }} />
    </Box>
  )
}

export default Tags
