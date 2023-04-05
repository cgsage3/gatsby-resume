module.exports = {
  siteMetadata: {
    title: 'Cesar Granda - Resume Site',
    description:
      'This is my site created to display my Resume',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: { 
          // ...JSON Resume Schema }

          "basics": {
            "name": "Cesar Granda",
            "label": "Web Developer at Baruch College",
            "picture": "",
            "email": "",
            "website": "http://cgranda.com",
            "summary": "A senior web developer with 7+ years of experience in front-end and back-end development. I possess a comprehensive understanding of WordPress, PHP and JavaScript. I am Passionate about building excellent applications utilizing innovative solutions.",
            "location": {
              "address": "90-31 Whitney Ave",
              "postalCode": "11373",
              "city": "Elmhurst ",
              "countryCode": "USA",
              "region": "NY"
            },
            "profiles": []
          }
        },
        theme: 'jsonresume-theme-spartan',
      },
    },     
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: 'portfolio',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/testimonials/`,
        name: 'testimonials',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/team/`,
        name: 'team',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Teko`,
          `Poppins\:300,400,500,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false,
        transpileTemplateLiterals: false,
        pure: false,
        ssr: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
