import React from 'react';
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import BlockTips from '../components/block-content/tipsList'
import 'bootstrap/dist/css/bootstrap.min.css';

export const query = graphql`
query ServiceTemplate2($slug: String) {
    service: sanityService2(slug: {current: {eq: $slug}}) {
      title {
        bannerImage {
          asset {
            fluid {
              src
            }
          }
        }
        header
      }
      serviceDetails {
        title
        _rawContent(resolveReferences: {maxDepth: 10})
      }
      testimonialList {
        title
        list {
          customerName
          customerTestimonial
        }
      }
      tips {
        title
        _rawContent(resolveReferences: {maxDepth: 10})
      }
      featureList {
        title
        Features {
          _key
          title
        }
      }
      ctaLarge {
        url
        title
        subTitle
        button
      }
    }
  }
  
`;


export default ({ data }) => {
    console.log(data.service)
    
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
            <div>
                <div className="row mb-3">
                    {data.service.serviceDetails.map((el, index) => {
                        if (index === 0 || index % 2 === 0) {
                            return (
                                <div className="col-md-8">
                                    <BlockContent blocks={el._rawContent} />
                                </div>
                            )
                        } else {
                            return (
                                <div className="col-md-4">
                                    <BlockContent blocks={el._rawContent} />            
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-8">
                    <h2>{data.service.testimonialList.title}</h2>
                        {data.service.testimonialList.list.map(test => {
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
                <div className="col-md-4">
                    <h2>{data.service.featureList.title}</h2> 
                    <ul>
                        {data.service.featureList.Features.map(feat => {
                        return <li>{feat.title}</li>
                        })}
                    </ul>
                </div>   
            </div>
            <div className="row mb-3">
                <div className={`text-center my-3 col-md-12`}>
                <h2>{data.service.ctaLarge.title}</h2>
                <p>{data.service.ctaLarge.subTitle}</p>
                <a href={data.service.ctaLarge.url} class="btn btn-primary">{data.service.ctaLarge.button}</a>
                </div>  
            </div>
            <div className="row mb-3">
                {data.service.tips.map((el, index) => {
                    if (index === 0) {
                        return (
                            <div className="col-md-12">
                                <BlockTips blocks={el._rawContent} />
                            </div>
                        )
                    } else {
                        const content = el._rawContent.filter(e => e._type !== 'figure')
                        const imageRight = el._rawContent.filter(e => e._type === 'figure')
                        return (
                            <>
                            <div className="col-md-8">
                                <BlockContent blocks={content} />            
                            </div>
                            <div className="col-md-4">
                                <BlockContent blocks={imageRight} />
                            </div> 
                            </>   
                        )
                    }
                })}
            </div>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}