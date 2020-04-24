module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://megane-blog.com/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
