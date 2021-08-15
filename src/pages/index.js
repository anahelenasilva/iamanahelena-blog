import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>
    <PostItem
      category="misc"
      date="August 15th 2021"
      description="ddaasd daskdshdjksa ddjashdkjas dsakj sdjhcbzxnbz"
      title="dsassssss"
      slug="/about/"
      timeToRead="5"
    />
  </Layout >
)

export default IndexPage
