// import "server only"
import { defineLive } from "next-sanity";
import { client } from './client'


const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error("Missing Sanity API read token")
}

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: 'vX' 
  }),
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0
  } 
});

