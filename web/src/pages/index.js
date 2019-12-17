import React from "react"
import { Link, graphql } from "gatsby"
import Image  from 'gatsby-image'

import Layout from "../components/layout"

export const query = graphql`
  {
    allSanityService {
      edges{
        node {
          title {
            header
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = ({data}) => (
  <Layout>
    <h1>Our Services</h1>
    <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'space-between'}}>
      {data.allSanityService.edges.map(({node: service}) => {
        return (
        <li key={service.slug.current} style={{ flex: '1 45%', maxWidth: '45%', padding: '0', margin: '1rem'}}>
          <h2 style={{fontSize: '24px'}}>{service.title.header}</h2>
          <Link to={service.slug.current}>See service details</Link>
        </li>          
        )
      })}
    </ul>
  </Layout>
)

export default IndexPage
