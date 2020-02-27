import React from "react"
import PropTypes from 'prop-types'
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import { StaticQuery, graphql } from 'gatsby'



const MainLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Navigation />
        <div>{children}</div>
      </>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout