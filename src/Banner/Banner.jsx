import React, { useEffect, useState } from 'react'
import './Banner.css'

import axios from '../Axios'
import {API_KEY,imgUrl} from '../constants/constant'


function Banner() {
    const[movie,setmovie]=useState()
    useEffect(() => {
        axios.get(`trending/movie/day?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data.results[0])
            setmovie(response.data.results[0])
        })
    .catch((error)=>{
        console.log('error fech data',error)

    });

     
    }, []);
    
    return (
        <div style={{backgroundImage:`url(${movie? imgUrl+movie.backdrop_path:""})`}}    className='banner'>
            <div className='content'>
                <h1 className='title'>{movie? movie.title:""}</h1>
                <div className="buttons">
                    <button className='button'>play</button>
                    <button className='button'>mylist</button>

                </div>
                <h1 className='description'>{movie? movie.overview:""}
                </h1>
            </div>
            <div className="fade"></div>


        </div>
    )
}

export default Banner