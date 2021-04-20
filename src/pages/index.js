import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Projects from "../components/project"
import Header from "../components/header"


const IndexPage = () => {
  return (
    <Layout>
        <Header/>
        <Hero/>
        <Projects/>
        <Footer/>
    </Layout>
  )
}

export default IndexPage