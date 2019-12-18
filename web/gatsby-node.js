/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

async function createServicePages (actions, graphql){
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

async function createServicePages2 (actions, graphql){
  const result = await graphql (`
      {
        allSanityService2 {
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

  const services2 = result.data.allSanityService2.edges.map(({node}) => node)
  services2.forEach(service2 => {
      actions.createPage({
          path: service2.slug.current,
          component: path.resolve('./src/templates/service2.js'),
          context: {
              slug: service2.slug.current
          }
      })
  })    
}

exports.createPages = async ({ actions, graphql }) => {
  await createServicePages(actions, graphql)
  await createServicePages2(actions, graphql)
}