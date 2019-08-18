module.exports = {
  siteMetadata: {
    title: "Akshat Sinha",
    author: "Akshat Sinha",
    description: "Personal Website: Akshat Sinha"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Akshat Sinha',
        short_name: 'site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
