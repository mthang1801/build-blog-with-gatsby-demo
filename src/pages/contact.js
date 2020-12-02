import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/Layout/layout.component"
const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>The best way to reach me is via <Link to="https://www.facebook.com/mvt.dev/" target="_blank">My Facebook</Link></p>     
    </Layout>
  )
}

export default ContactPage
