require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Kevin Chen`,
    siteTitleAlt: `Kevin Chen`,
    siteUrl: `https://kevchentw.com`,
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/kevchentw`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/kuan-yin-chen-kevin`,
      },
      {
        name: `Facebook`,
        url: `https://www.facebook.com/kevchentw`,
      },
      {
        name: `Resume`,
        url: `https://kevchentw.com/resume/kuan-yin-chen-resume.pdf`
      }
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `Publications`,
        slug: `/publications`,
      }
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-149417493-1',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Chen`,
        short_name: `kevin-chen-blog`,
        description: `Kevin Chen's profile and blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
