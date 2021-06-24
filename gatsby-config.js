module.exports = {
  siteMetadata: {
    title: "My Site Template",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/pages`,
      }
    },
    'gatsby-transformer-remark',
    "gatsby-plugin-sass",
  ],
};
