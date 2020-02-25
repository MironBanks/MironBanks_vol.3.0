module.exports = {
  siteMetadata: {
    title: `Miron Banks Portfolio`,
    description: `A pretty cool portfolio site using React and GSAP.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Teko`,
            variants: [`100`, `200`, `300`, `400`, `600`, `700`],
          },
          {
            family: `Lato`,
            variants: [`100`, `200`, `300`, `400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //{
    //resolve: `gatsby-plugin-manifest`,
    //options: {
    //name: `gatsby-starter-default`,
    //short_name: `starter`,
    //start_url: `/`,
    //background_color: `#663399`,
    //theme_color: `#663399`,
    //display: `minimal-ui`,
    //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //},
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
