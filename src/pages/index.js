import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout/layout.component"
import GlobalStyle from "../styles/global.styles"
import Head from "../components/Head/head.component";
export default function Home() {
  return <div>
    <Layout>    
      <Head />
      <h1>Home Page</h1>
      <p>More infomationa about me? <Link to="/contact">Contact me.</Link></p>
      <p>About my blog? <Link to="/about">About</Link></p>    
    </Layout>
   
  </div>
}
