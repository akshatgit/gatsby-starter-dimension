module.exports = {
  siteMetadata: {
    title: 'Akshat Sinha',
    author: 'Akshat Sinha',
    description: 'Senior Site Reliability Engineer at Rubrik. Network security professional.',
    siteUrl: 'https://akshatsinha.xyz',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Akshat Sinha',
        short_name: 'Akshat',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
}
