import { useState } from 'react'
import { LikesProps } from '../types/types'

type Mode = 'inc' | 'dec'

const useLikes = () => {
  // put all values of likes as state
  const [allLikes, setAllLikes] = useState({})

  // set an initial value of likes
  const setInitialLikesHandler = (initialData: LikesProps): void => {
    setAllLikes(initialData)
  }

  // update a value of likes
  const setLikesHandler = (id: string, likes: number): void => {
    setAllLikes(prevState => {
      return {
        ...prevState,
        [id]: likes,
      }
    })
  }

  // if there is id in local storage
  const [hasLikes, setHasLikes] = useState({})

  // check if there is id in local storage & set state accordingly
  const checkLikesHandler = (id: string): void => {
    const data = localStorage.getItem(id)

    setHasLikes(prevState => {
      return {
        ...prevState,
        [id]: data === 'yes' ? true : false,
      }
    })
  }

  // set updated hasLikes
  const setHasLikesHandler = (id: string, updated: boolean): void => {
    setHasLikes(prevState => {
      return {
        ...prevState,
        [id]: updated,
      }
    })
  }

  // triggered when user click heart icon
  // update(inc or dec) value of likes
  const updateLikesHandler = async (id: string, mode: Mode): Promise<void> => {
    try {
      // Send to serverless function to update likes
      const { _id, likes } = await fetch('/.netlify/functions/update-likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ id, mode }),
      }).then(res => res.json())

      // if user likes the article
      if (mode === 'inc') {
        localStorage.setItem(id, 'yes')
        setHasLikesHandler(id, true)
        // if user dislike the article
      } else {
        localStorage.removeItem(id)
        setHasLikesHandler(id, false)
      }
      setLikesHandler(_id, likes)
    } catch (err) {
      console.log({ err })
    }
  }

  return {
    allLikes,
    hasLikes,
    setInitialLikesHandler,
    setLikesHandler,
    checkLikesHandler,
    updateLikesHandler,
  }
}

export default useLikes
