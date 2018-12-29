import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import { colors, widths, dimensions } from '../styles/variables'

const Nav = styled.ul`
  width: ${widths.xs}px;
  padding: ${dimensions.containerPadding}rem;
  margin: 0;
  border-right: thin solid ${colors.brand};
  list-style-type: none;
  line-height: ${dimensions.lineHeight.list}rem;
`

const PoemsLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PoemsLayoutQuery {
        site {
          siteMetadata {
            title
            description
            poems {
              title
              url
            }
          }
        }
      }
    `}
    render={(data: GraphQL.data) => {
      const links = data.site.siteMetadata.poems.map(p => (
        <li><Link to={p.url}>{p.title}</Link></li>
      ))
      return (
        <LayoutRoot>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'truman, software, poems, oranges' }
            ]}
          />
          <Header title={data.site.siteMetadata.title} crumbs={[{url: '/poems', title: 'poems'}]}></Header>
          <LayoutMain>
            <Nav>{links}</Nav>
            {children}
          </LayoutMain>
        </LayoutRoot>
      )
    }}
  />
)

export default PoemsLayout
