import React,{useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css";
import axios from '../../axios';
import { imgaeUrl,API_KEY} from '../../constants/constants'



function RowPost(props) {
 const [Movie,setMovie] = useState([])
 const [urlId,setUrlId] =useState('')
  useEffect(()=>{
    axios.get(props.url).then(Response=>{
      
      setMovie(Response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  }, )
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
       if(response.data.results.length!==0){
        console.log(response.data);
        setUrlId(response.data.results[0])
       }else{
        console.log('array is empty')
       }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {Movie.map((obj)=>
        <img  onClick={()=>handleMovie(obj.id)} className= {props.isSmall ? 'smallposter': 'poster'} alt='poster'src={`${imgaeUrl+obj.backdrop_path}`}/>
        )}
        </div>
       {urlId  &&  <Youtube  opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
