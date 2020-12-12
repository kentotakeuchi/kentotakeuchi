import { useState } from 'react'
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: process.env.GATSBY_SANITY_UPDATE_LIKES_TOKEN,
})

type Mode = 'inc' | 'dec'

const useLikes = () => {
  const [hasLikes, setHasLikes] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const checkLikesHandler = (id: string): void => {
    const storedData = localStorage.getItem(id)
    storedData === 'yes' ? setHasLikes(true) : setHasLikes(false)
  }

  const updateLikesHandler = async (id: string, mode: Mode): Promise<void> => {
    try {
      let response
      // if user likes the article
      if(mode === 'inc') {
        localStorage.setItem(id, 'yes')
        response = await client
              .patch(id)
              .inc({
                likes: 1,
              })
              .commit()
        setHasLikes(true)
      // if user dislike the article
      } else {
        localStorage.removeItem(id)
        response = await client
              .patch(id)
              .dec({
                likes: 1,
              })
              .commit()
        setHasLikes(false)
      }
      console.log({response});
      setIsClicked(true)
    } catch (err) {
      console.log({err});
    }
  }

  return { hasLikes, isClicked, checkLikesHandler, updateLikesHandler }
}

export default useLikes
