import React from 'react'
import Layout from '../layouts/application'

const Home = () => (
  <h1 className="page-title">Home</h1>
)

const HomeWithLayout = () => (
  <Layout>
    <Home />
  </Layout>
)

export default HomeWithLayout
