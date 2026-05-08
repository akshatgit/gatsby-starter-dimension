const path = require('path')
const { cvePosts } = require('./src/data/cveData')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  cvePosts.forEach((cve) => {
    createPage({
      path: `/blog/${cve.id.toLowerCase()}`,
      component: path.resolve('./src/templates/cve-detail.js'),
      context: { cve },
    })
  })
}
