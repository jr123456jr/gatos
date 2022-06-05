import { useEffect, useState } from 'react'
import {useGetCat} from '../../customHooks/useGetCat'
import Form from '../Form'
import UserCats from '../UserCats'
import { firebase } from '../../firebase'

import './styles.css'



 const AppContainer = () => {
  
  const [catsArray, setCatsArray] = useState([])

  const { data,loading } = useGetCat('https://api.thecatapi.com/v1/images/search')

  useEffect(() => {
    const db = firebase.firestore(); 

    db.collection("cats").get()
    .then(data =>{
      const array = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setCatsArray(array)
    })

  }, [])
  
  return (
    <>
      <div className='text animate__animated animate__fadeIn animate__delay-2s'>
        <h2>Proyecto Final Web 1</h2>
        <p>La idea de esta app es agregar gatos en una lista.</p>
        <p>
          Cada vez que se refresque la pagina saldra un gato diferente,
          si te agrada puedes guardarlo si no simplemente refrescas la pagina.
        </p>
      </div>
      { loading && <div className='loading'></div> }
      <div className='container animate__animated animate__fadeIn animate__delay-2s'>
        { data && <img className='mainImg' src={data[0].url} alt="cat pic" />}
        { data && <Form imageUrl={data[0].url} /> }
      </div>
      <div className='animate__animated animate__fadeIn animate__delay-2s'>
        <h2 className='text'>Estos son los gatos que has agregado en la lista</h2>
        <UserCats catsArray={catsArray} />
      </div>
    </>
  )
}

export default AppContainer