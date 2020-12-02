import React from "react"
import Layout from "../components/Layout/layout.component"
import { Link, useStaticQuery, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"
const Blog = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
        sort :{
          fields : createdAt,
          order : ASC
        }
      ){
        edges{
          node{
            title        
            slug
            createdAt
            publishedDate ( formatString : "MM Do, YYYY" )
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol className={blogStyles.posts}>        
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post}>
            <Link to={edge.node.slug}>
              <h2>{edge.node.title}</h2>
              <p className={blogStyles.datetime}>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
