import * as React from 'react'
import { Box } from 'rebass'

const Container: React.FC = ({children}) => <Box
  sx={{
    maxWidth: 800,
    mx: 'auto',
    px: 3,
    width: '100%',
  }}>
  {children}
</Box>

export default Container
