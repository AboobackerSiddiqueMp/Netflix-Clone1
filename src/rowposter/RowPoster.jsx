import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPoster.css'
import axios from '../Axios'
import { API_KEY, imgUrl } from '../constants/constant'


function RowPoster(props) {
  const[urlId,seturlId]=useState('')

  const [movies, setmovie] = useState([])
  useEffect(() => {
    axios.get(props.urls).then((response) => {
      console.log(response.data)
      setmovie(response.data.results)
    })



  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length !==0){
        seturlId(response.data.results[0])


      }
      else{
        seturlId('')
      }
    }).catch((error)=>{
      console.log("a erroe",error)
    });


  }


  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>

      <div className="posters">
        {movies.map((obj) => 
          <img onClick={()=>handleMovie(obj.id)} src={`${movies? imgUrl+obj.backdrop_path:""}`} alt="" className={props.isSmall?'smallPoster':'poster'}/>


        )}
      </div>
     {  urlId && <YouTube  videoId={urlId.key} opts={opts}  />  }



    </div>
  )
}

export default RowPoster