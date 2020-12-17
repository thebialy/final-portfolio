import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
        <Hero/>
        <Footer />
    </Layout>
  )
}

export default IndexPage