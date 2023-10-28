import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../Axios'
import { API_KEY, imgUrl } from '../constants/constant'


function RowPoster(props) {
  const [movies, setmovie] = useState([])
  useEffect(() => {
    axios.get(props.urls).then((response) => {
      console.log(response.data)
      setmovie(response.data.results)
    })



  }, [])




  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>

      <div className="posters">
        {movies.map((obj) => 
          <img src={`${movies? imgUrl+obj.backdrop_path:""}`} alt="" className={props.isSmall?'smallPoster':'poster'}/>


        )}
      </div>


    </div>
  )
}

export default RowPoster