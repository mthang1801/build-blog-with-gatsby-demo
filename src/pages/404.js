import React from 'react'
import Layout from "../components/Layout/layout.component"
import {Link} from "gatsby"
const PageNotFound = () => {
  return (
    <Layout>
      <h1>Page not found :(</h1>
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export default PageNotFound
