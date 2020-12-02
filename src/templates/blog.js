import React from "react"
import Layout from "../components/Layout/layout.component"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS } from "@contentful/rich-text-types"
// import {useContentfulImage} from "../utils/useContentfulImage"
// export const query = graphql`
//   query MarkDownRemark($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//       excerpt
//     }
//   }
// `

export const query = graphql`
  query ContentFullBlogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw

        references {
          contentful_id
          file {
            url
            fileName
          }
        }
      }
      publishedDate(formatString: "MM Do, YYYY")
    }
  }
`


const Blog = ({ data }) => {
  
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const contentful_id = node.data.target.sys.id        
        const {file} = data.contentfulBlogPost.body.references.find(n => n.contentful_id === contentful_id)
        const url= file.url;
        const alt = file.fileName;
      
        return <img alt={alt} src={url} width="650px"/>
      },
    },
  }
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
