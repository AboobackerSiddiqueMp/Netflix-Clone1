import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../Axios'
import { API_KEY, imgUrl } from '../constants/constant'


function RowPoster() {
  const [movies, setmovie] = useState([])
  useEffect(() => {
    axios.get(`trending/tv/day?api_key=${API_KEY}`).then((response) => {
      console.log(response.data)
      setmovie(response.data.results)
    })



  }, [])




  return (
    <div className='row'>
      <h2 className="title">NETFLIX ORIGINALS</h2>

      <div className="posters">
        {movies.map((obj) => 
          <img src={`${movies? imgUrl+obj.backdrop_path:""}`} alt="" className="poster" />


        )}
      </div>


    </div>
  )
}

export default RowPoster