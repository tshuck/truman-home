import React from 'react'
import { Link, LinkProps } from 'rebass'

const Footnote: React.FC<LinkProps> = (props: LinkProps) => {
  const { children, ...rest } = props
  return (
    <Link {...rest} sx={{ verticalAlign: 'super' }} fontSize={1} color="accent">
      {children}
    </Link>
  )
}

export default Footnote
