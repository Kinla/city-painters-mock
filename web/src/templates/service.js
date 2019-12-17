import React from 'react';
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import 'bootstrap/dist/css/bootstrap.min.css';

export const query = graphql`
  query ServiceTemplate($slug: String) {
    service: sanityService(slug: {current: {eq: $slug}}) {
      title {
        _key
        _type
        bannerImage {
          _key
          _type
          asset {
            id
            fluid {
                ...GatsbySanityImageFluid
            }
          }
        }
        header
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`;


export default ({ data }) => {
    console.log(data.service._rawContent)
    
    return (
        <Layout>
            <div style={{
                backgroundImage: `url(${data.service.title.bannerImage.asset.fluid.src}) `,
                backgroundRepeat  : 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '1rem 2rem',
                marginBottom: '1rem'
                }}>
                <h2 style={{color: 'white'}}>{data.service.title.header}</h2>
            </div>
            <div className="row">
              {data.service._rawContent.map(el => {
                switch (el._type) {
                  case "section":
                    return (
                      <div className={el.css}>
                        <BlockContent blocks={el.content} />
                      </div>  
                    )
                    break;
                  case "featureList":
                    return (
                      <div className={el.css}>
                        <h2>{el.title}</h2>
                        <ul>
                          {el.Features.map(feat => {
                          return <li>{feat.title}</li>
                          })}
                        </ul>
                      </div>  
                    )
                    break;                    
                  case "testimonialList":
                    return (
                      <div className={el.css}>
                        <h2>{el.title}</h2>
                        {el.list.map(test => {
                          return(
                            <div className="card">
                              <div className="card-body">
                                <p>{test.customerTestimonial}</p>
                                <p>{test.customerName}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>  
                    )
                    break;
                  case "ctaLarge":
                    return (
                      <div className="text-center col-md-12 my-3">
                        <h2>{el.title}</h2>
                        <p>{el.subTitle}</p>
                        <a href={el.url} class="btn btn-primary">{el.button}</a>
                      </div>  
                    )
                    break;                    
                  default:
                    break;
                }
              })}
            </div>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}