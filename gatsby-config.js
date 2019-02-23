'use strict'

module.exports = {
  siteMetadata: {
    title: 'if day has to become night',
    description: 'Words',
    siteUrl: 'https://trumanshuck.com',
    author: {
      name: 'Truman Shuck',
      url: 'https://trumanshuck.com',
      email: 'truman.shuck@gmail.com'
    },
    poems: [
      { title: 'We move along', url: '/poems/we-move-along'},
      { title: 'I try to', url: '/poems/i-try-to'},
      { title: 'I walk a little more slowly', url: '/poems/i-walk-a-little'},
      { title: 'Sometimes I feel old', url: '/poems/sometimes-i-feel-old'},
      { title: 'If I bend my neck', url: '/poems/if-i-bend-my-neck'},
      { title: 'Above my small bed', url: '/poems/above-my-small-bed'},
      { title: 'We slept in the closet', url: '/poems/we-slept-in-the-closet'},
      { title: 'When the summer sun carves', url: '/poems/when-the-summer-sun-carves'},
      { title: 'When I die', url: '/poems/when-i-die'},
      { title: 'I knew a girl who asked', url: '/poems/i-knew-a-girl-who-asked'},
      { title: 'The wind', url: '/poems/the-wind'},
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131507852-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
