import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import { colors, widths, device, dimensions } from '../styles/variables'


const Children = styled.div`
`

const Nav = styled.ul`
  width: ${widths.xs}px;
  padding: ${dimensions.containerPadding}rem;
  margin: 0;
  border-right: thin solid ${colors.brand};
  list-style-type: none;
  line-height: ${dimensions.lineHeight.list}rem;

  @media ${device.xs} {
    width: 100%;
    border-right: 0;
    border-top: thin solid ${colors.brand};
  }

  @media ${device.lg} {
    width: ${widths.xs}px;
    border-right: thin solid ${colors.brand};
    border-top: 0;
    margin-right: 5rem;
  }
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
        <li key={p.url}><Link to={p.url}>{p.title}</Link></li>
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
            <Children>
              {children}
            </Children>
          </LayoutMain>
        </LayoutRoot>
      )
    }}
  />
)

export default PoemsLayout
