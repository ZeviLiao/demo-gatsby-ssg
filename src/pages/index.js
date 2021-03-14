import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)


  return (
    <h1> hello, { data.site.siteMetadata.title } </h1>
  )
}

export default Home