import { useState,useEffect } from "react";
import Category from "./Category";
import FetchGenres from "./FetchData";
import axios from 'axios';

const API_KEY = 'fdf7bbf576msh7765785d0be9847p1d1177jsn41e14426508a';
const API_URL = 'https://anime-db.p.rapidapi.com/anime';

export default function Navbar(){
  const [genres, setGenres] = useState([]);

  //useEffect(() => {
  //  const options = {
  //    method: 'GET',
  //    url: 'https://anime-db.p.rapidapi.com/anime',
  //    params: {
  //      page: '1',
  //      size: '30',
  //      search: '',
  //      genres: '',
  //      sortBy: 'ranking',
  //      sortOrder: 'asc'
  //    },
  //    headers: {
  //      'X-RapidAPI-Key': 'fdf7bbf576msh7765785d0be9847p1d1177jsn41e14426508a',
  //      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  //    }
  //  };
  
  //  async function getGenres() {
  //    const response = await axios.request(options);
  //    console.log(response.data);

      //response.data.data[0].genres  <-- HOW TO ACCESS GENRES
  //    setGenres(response);
  
  //  }
  //  getGenres();
  //  }, []);

  //<a class="header--category--genres" href="/" >แฟนตาซี</a>
    return (
        <header>
      <div class="header--logo">
        <a href="/">
          <img src="/images/round-logo.png" alt="img" />
        </a>
      </div>
      <Category />
      
      <form action="" class="header--searchbar">
        <input type="text" placeholder="Search.." />
        <button type="submit">
          <img src="/images/search.png" alt="img" />
        </button>
      </form>
    </header>
    )
}