import {useState, useEffect} from 'react';
import axios from 'axios';


const API_BASE = 'https://api.jikan.moe/v4/genres/anime';
const apiUrl = 'https://api.jikan.moe/v4/anime';
const MyAnimeList_API = 'https://api.myanimelist.net/v2/anime';

export const allGenres = {
  fetchAction: 'Action',
  fetchAdventure: 'Adventure',
  fetchComedy: 'Comedy',
  fetchSport: 'Sports',
  fetchFantasy: 'Fantasy',
  fetchHorror: 'Horror',
  fetchRomance: 'Romance',
  fetchDrama: 'Drama',
}

 function FetchGenres({fetchURL, title, id}){
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {    
      async function getGenres() {
        const response = await axios.get(`${apiUrl}`);
        setGenres(response);
 
        
      }
      getGenres();
      }, []);
      console.log(genres);

    return (  
      <li>{title}</li>
    
    )
}
export default FetchGenres





