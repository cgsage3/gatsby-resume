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
            "image": "",
            "email": "info@cgranda.com",
            "website": "http://cgranda.com",
            "summary": "A senior web developer with 7+ years of experience in front-end and back-end development. I possess a comprehensive understanding of WordPress, PHP and JavaScript. I am Passionate about building excellent applications utilizing innovative solutions.",
            "location": {
              "address": "90-31 Whitney Ave",
              "postalCode": "11373",
              "city": "Elmhurst ",
              "countryCode": "US",
              "region": "New York"
            },
            "profiles": [{
              "network": "LinkedIn",
              "username": "Cesar Granda",
              "url": "https://www.linkedin.com/in/cesar-granda/"
            }]
          },
          "work": [
            {
              "company": "CUNY Baruch College",
              "position": "Lead Web Developer",
              "url": "https://baruch.cuny.edu",
              "startDate": "2018-08",
              "endDate": "Present",
              "summary": "",
              "highlights": [
                  "Developed a faculty profile App used to display faculty profiles with a back-end connected to an Oracle database, which imported daily data from a third-party JSON API, and coded the front-end of the App using SQL, JavaScript and a custom PHP framework.",
                  "Worked on .NET application using C#, SQL and an Oracle database which students used to schedule exam proctoring.",
                  "Developed applications and websites with adherence to ADA and WCAG guidelines on accessibility.",
                  "Developed sites using WordPress Multisite and utilizing Custom Post Types (CPT) and Advanced Custom Fields(ACF) in order fulfill institutional requirements.",
                  "Migrated legacy content from thousands of static HTML files into MySQL database using PHP and SQL so editors could modify the content using WordPress.",
                  "Maintained documentation of all WordPress plugins and features in a wiki that over 40 content editors used as guides. ",
                  "Created a tuition calculator to display tuition costs to prospective students using JavaScript, PHP and SCSS.",
                  "Developed a search app for the Library that retrieved data from multiple third-party software and API’s so students could find library materials for their specific needs.",
                  "Coded a WordPress plugin to connect to Twitter's API in order to display tweets on the Library website that informed students of updates.",
                  "Coded third party apps to match the Library website design using HTML, CSS and JavaScript.",
                  "Tasked with implementing a git workflow for all projects in development.",
                  "Held regular training sessions on content editing, plugin usage and general troubleshooting for content editors.",
                  "Held regular meetings with stakeholders of various departments to gather requirements and vision in order to create a project scope and project timeline.",        
              ]
            },
            {
              "company": "Uchiha LLC",
              "position": "Senior Web Developer",
              "url": "",
              "startDate": "2016-08",
              "endDate": "2018-02",
              "summary": "",
              "highlights": [
                "Met with clients to discuss their project needs and deliverables.",
                "Taught a team to do WordPress installations through the implementation of MySQL, phpMyAdmin, WP CLI and server environment setups.",
                "Worked with a team of 10 people consisting of Art Director, Designers, coders and interns on various projects.",
                "Set-up and maintained Linux servers used on all projects.",
                "Developed apps using Node.js,  React, and Express.",
                "Developed web sites using Laravel, Bootstrap, and JQuery.",
                "Coded all apps and websites using the MVC development model.",
                "Developed e-commerce sites in WordPress, Squarespace and Shopify.",
                "Used Adobe suite programs to create images, icons and vector graphics for websites and apps.",              
              ]
            },            
            {
              "company": "Team 7 Media Inc",
              "position": "Junior Web Developer",
              "url": "",
              "startDate": "2014-11",
              "endDate": "2016-06",
              "summary": "",
              "highlights": [
                "Created landing pages for products and services using PHP, JavaScript, HTML and CSS.",
                "Utilized GIT on all project development.",
                "Worked in cPanel to create projects for clients.",
                "Developed apps and websites using Bootstrap on all projects.",
                "Developed apps and websites using Laravel as the back-end framework on all projects.",
                "Developed e-stores on different platforms like Shopify, Squarespace and WordPress.",
                "Integrated customer relationship management (CRM) software into e-stores to control checkout process, cart abandonment and customer re-targeting.",
                "Created website for clients ranging from Dentists to Video marketing firms.",
                "Used Adobe suite programs to create images, icons and vector graphics for websites and apps.",
                "Used Adobe Premier to create and edit videos and commercials used in Online marketing.",
              ]
            },            
            {
              "company": "Team 7 Media Inc",
              "position": "Junior Web Developer",
              "url": "",
              "startDate": "2011-08",
              "endDate": "2014-10",
              "summary": "",
              "highlights": [
                "Worked alongside Art Director in creating high end luxury sites implementing WordPress with HTML, PHP and CSS.",
                "Developed landing pages for Beauty Salons across the U.S.A that sold vouchers to customers.",
                "Utilized Salesforce to facilitate project management.",
                "Used Dreamweaver for developing websites using HTML, PHP and CSS.",
                "Designed ads using Photoshop that were used to promote Salon services.",
                "Developed Ads using HTML and CSS that consumers clicked on and purchased products.",
                "Developed on an Ecommerce platform utilizing PHP, HTML and CSS.",
              ]
            },
          ],
          "education": [
            {
            "institution": "NYIT",
            "url": "https://www.nyit.edu/",
            "area": "Communication Arts",
            "studyType": "Masters",
            "startDate": "2015-09",
            "endDate": "2017-06",
            },
            {
              "institution": "NY City Tech CUNY",
              "url": "https://www.citytech.cuny.edu/",
              "area": "Graphic Arts Management",
              "studyType": "Bachelors",
              "startDate": "2007-09",
              "endDate": "2011-06",
            },
          ],          
        },
        theme: 'jsonresume-theme-flat',
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
