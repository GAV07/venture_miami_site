import { createClient } from 'contentful'

export const Client = createClient( {
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "new_site_changes",
  accessToken: process.env.CONTENTFUL_DEV_ACCESS_TOKEN
})




