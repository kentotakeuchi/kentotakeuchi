import { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type Mode = 'inc' | 'dec'

const useLikes = () => {
  // query "id" and "likes"
  const data = useStaticQuery(graphql`
    query {
      allSanityBlog(filter: { active: { eq: true } }) {
        edges {
          node {
            _id
            likes
          }
        }
      }
    }
  `)
  // formatted query data into { id: likes }
  const likesObj: any = {}
  data.allSanityBlog.edges.forEach(({node: blog}: any) => {
    likesObj[blog._id] = blog.likes
  })
  // put all values of likes as state
  const [allLikes, setAllLikes] = useState(likesObj)

  // update a value of likes
  const setLikesHandler = (id: string, likes: number) => {
    setAllLikes((prevState: any) => {
      return {
        ...prevState,
        [id]: likes,
      }
    })
  }

  // if there is id in local storage
  const [hasLikes, setHasLikes] = useState<boolean>(false)

  // check if there is id in local storage & set state accordingly
  const checkLikesHandler = (id: string): void => {
    const storedData = localStorage.getItem(id)
    storedData === 'yes' ? setHasLikes(true) : setHasLikes(false)
  }

  // state of loading spinner
  const [loading, setLoading] = useState<boolean>(false)

  // triggered when user click heart icon
  // update(inc or dec) value of likes
  const updateLikesHandler = async (id: string, mode: Mode): Promise<void> => {
    try {
      setLoading(true)

      // Send to serverless function to create the Checkout Session.
      const response = await fetch('/.netlify/functions/update-likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({id, mode}),
      }).then(res => res.json())

      // if user likes the article
      if(mode === 'inc') {
        localStorage.setItem(id, 'yes')
        setHasLikes(true)
      // if user dislike the article
      } else {
        localStorage.removeItem(id)
        setHasLikes(false)
      }
      console.log({response})
      // setLikesHandler(response._id, response.likes)
      setLoading(false)
    } catch (err) {
      console.log({err})
      setLoading(false)
    }
  }

  return { allLikes, hasLikes, loading, setLikesHandler, checkLikesHandler, updateLikesHandler }
}

export default useLikes
