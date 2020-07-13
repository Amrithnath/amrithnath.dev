module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath:'/blog'
      },
    },
    'gatsby-theme-blog-darkmode',
    {
      resolve:`gatsby-plugin-offline`,
      options:{
        globPatterns: ['**/*']
      }
    },
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        icon:'src/images/gatsby-icon.png',
        name:'Bits and pieces',
        short_name:'B&P',
        start_url:'/',
        background_color:`#777777`,
        display:'minimal-ui',
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Bits and pieces`,
    author: `Amrithnath`,
    description: `This is my own tiny place on the netverse :D`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/arjunamrith`,
      },
      {
        name: `github`,
        url: `https://github.com/amrithnath`,
      },
      {
        name: `github`,
        url: `https://github.com/arjunamrith`,
      },
    ],
  },
}
