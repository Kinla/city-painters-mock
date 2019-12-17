/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions, graphql}) => {
    const result = await graphql (`
        {
            allSanityService {
              edges{
                node {
                  slug {
                    current
                  }
                }
              }
            }
          }
    `)

    const services = result.data.allSanityService.edges.map(({node}) => node)
    services.forEach(service => {
        actions.createPage({
            path: service.slug.current,
            component: path.resolve('./src/templates/service.js'),
            context: {
                slug: service.slug.current
            }
        })
    })
}