import { createContext } from 'react'
import { LikesProps } from '../types/types'

type Mode = 'inc' | 'dec'

interface Props {
  allLikes: LikesProps | any
  hasLikes: any
  setInitialLikes?: (initialData: LikesProps) => void
  setUpdatedLikes: (id: string, likes: number) => void
  checkLikes: (id: string) => void
  updateLikes: (id: string, mode: Mode) => void
}

const likesContext = createContext<Props>({
  allLikes: {},
  hasLikes: {},
  setInitialLikes: () => {},
  setUpdatedLikes: () => {},
  checkLikes: () => {},
  updateLikes: () => {},
})

export default likesContext
