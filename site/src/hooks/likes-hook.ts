import { useState } from 'react'
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: process.env.GATSBY_SANITY_UPDATE_LIKES_TOKEN,
  useProjectHostname: false
})

type Mode = 'inc' | 'dec'

const useLikes = () => {
  // if there is id in local storage
  const [hasLikes, setHasLikes] = useState<boolean>(false)
  // current likes
  const [curLikes, setCurLikes] = useState<number|undefined|null>(999)

  // set current value of likes
  // used when initial render occurs
  const setLikes = (likes: number|undefined|null): void => {
    setCurLikes(likes)
  }

  // check if there is id in local storage & set state accordingly
  const checkLikesHandler = (id: string): void => {
    const storedData = localStorage.getItem(id)
    storedData === 'yes' ? setHasLikes(true) : setHasLikes(false)
  }

  // triggered when user click heart icon
  // update(inc or dec) value of likes
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
      setCurLikes(response.likes)
      console.log({response});
    } catch (err) {
      console.log({err});
    }
  }

  return { hasLikes, curLikes, setLikes, checkLikesHandler, updateLikesHandler }
}

export default useLikes
