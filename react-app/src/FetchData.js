import {useState, useEffect} from 'react';
import axios from 'axios';

export const paramsGenres = {
  fetchAction: 'Action',
  fetchAdventure: 'Adventure',
  fetchComedy: 'Comedy',
  fetchSliceOfLife: 'Slice of Life',
  fetchFantasy: 'Fantasy',
  fetchHorror: 'Horror',
  fetchRomance: 'Romance',
  fetchDrama: 'Drama',
}

 function FetchGenres({fetchURL, title}){
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
                page: '1',
                size: '30',
                search: '',
                genres: `${fetchURL}`,
                sortBy: 'ranking',
                sortOrder: 'asc'
              },
        headers: {
          'X-RapidAPI-Key': 'fdf7bbf576msh7765785d0be9847p1d1177jsn41e14426508a',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      };
    
      async function getGenres() {
        const response = await axios.request(options);
        setGenres(response);
        return response;

      }
      getGenres();
      }, []);

      console.log(genres);

    return (  
        <li></li>
    
    )
}
export default FetchGenres





