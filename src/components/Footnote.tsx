import React from 'react'
import { Link, LinkProps } from 'rebass'

export default (props: LinkProps) => {
  const { children, ...rest } = props
  return (
    <Link {...rest} sx={{ verticalAlign: 'super', textDecoration: 'none' }} fontSize={1} color="muted">
      {children}
    </Link>
  )
}
