import { createClient } from 'contentful'

const SPACE_ID = 'wby4w0sk2gzn'
const ACCESS_TOKEN = 'UIebK8lb22HNEVAODIIxdCX0m388c5Z05fkAR2jyDH0'

export function getPosts() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })

  return client.getEntries()
}

export function getPostBySlug(slug) {
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

  return client.getEntries({ content_type: 'title', 'fields.path': slug })
}
