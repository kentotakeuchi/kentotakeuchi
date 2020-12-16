import { createContext } from 'react'

interface Props {
  allLikes: any
  setLikes: (id: string, likes: number) => void
}

const likesContext = createContext<Props>({
  allLikes: {},
  setLikes: () => {},
})

export default likesContext
