module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath:'/blog'
      },
    },
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
