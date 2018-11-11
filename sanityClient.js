const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'n3f1vhuk',
  dataset: 'website',
  token: 'skpBItCRC6W1dJAsCHH7SNhJdgHuusdaMzDAeTgHz30LT1Sqs15bvUnt3YKmLK2iJG2ZTtiqqC1dP9YEJ', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client 
