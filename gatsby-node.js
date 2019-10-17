'use strict'

const path = require('path')
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "layout",
      node,
      value: node.frontmatter.layout,
    })

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: value.replace(/\d\d\d\d-\d\d-\d\d-/, ''),
    })
  }
}

const createMDX = async (graphql, createPage, reporter) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/post.tsx`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createMDX(graphql, createPage, reporter)
}
