import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "../../axios";
import {API_KEY,imgaeUrl}from "../../constants/constants";

function Banner() {
  const [Movie,setMovie]= useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
      setMovie(Response.data.results[1])
    })

  }, [])
  return (
    
    <div style={{backgroundImage: `url(${Movie ? imgaeUrl+Movie.backdrop_path:''})`}}
    className='banner'>
     <div className='content'>
            <h1 className='title'>{Movie ? Movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='descripton'>{Movie ? Movie.overview :''}</h1>
      </div>
      <div className="fade_bottum"></div>

      
     </div>
    
    
  )
}

export default Banner

