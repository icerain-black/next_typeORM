import axios from "axios"
import { useEffect, useState } from "react"

const usePosts = () => {
  const [list,setList] = useState<markData>([])

  const [isLoding,setIsLoding] = useState(false)

  const [isEmpty,setIsEmpty] = useState(false)

  useEffect(() => {
    setIsLoding(true)
    axios.get("/api/posts").then(result => {
      setIsLoding(false)
      if (result.data.length === 0) {
        setIsEmpty(true)
      }else{
        setList(result.data)
      }
    })
  },[])

  return {list,setList,isLoding,setIsLoding,isEmpty,setIsEmpty}
}

export default usePosts