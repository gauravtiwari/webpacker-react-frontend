import React from 'react'
import Layout from '../layouts/application'

const About = () => (
  <h1 className="page-title">About</h1>
)

const AboutWithLayout = () => (
  <Layout>
    <About />
  </Layout>
)

export default AboutWithLayout
