import { useEffect, useState } from "react"

export const useGetCat = (url) => {

  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
      (
        async function(){
          try{
            setLoading(true)
            const response = await fetch(url)
            response.json().then(res => setData(res))
          }catch(err){
            setError(err)
          }finally{
            setLoading(false)
          }
        }
      )()
  }, [url])

  return { data, error, loading }

}