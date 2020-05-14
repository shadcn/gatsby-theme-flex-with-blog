require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `Flex Starter`,
    description: `Starter for the Flex theme.`,
    siteUrl: process.env.SITE_URL || `http://localhost`,
    logo: `logo.png`,
    copyright: `© YYYY Flex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
      {
        title: `Blog`,
        path: `/posts`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
      {
        title: `Blog`,
        path: `/posts`,
      },
    ],
  },
  plugins: [
    `gatsby-theme-flex`,
    {
      resolve: `@arshad/gatsby-theme-blog-core`,
      options: {
        basePath: `/posts`,
        postsPerPage: 10,
      },
    },
  ],
};
