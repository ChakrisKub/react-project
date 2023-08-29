import { useState,useEffect } from "react";
import Category from "../Category";
import { useGlobalContext } from "../context/global";
import axios from 'axios';

const API_KEY = 'fdf7bbf576msh7765785d0be9847p1d1177jsn41e14426508a';
const API_URL = 'https://anime-db.p.rapidapi.com/anime';

export default function Navbar(){
  const [genres, setGenres] = useState([]);
  const {handleChange, handleSubmit, search, searchAnime} = useGlobalContext();

      //response.data.data[0].genres  <-- HOW TO ACCESS GENRES
 
  //<a class="header--category--genres" href="/" >แฟนตาซี</a>
    return (
        <header>
      <div class="header--logo">
        <a href="/">
          <img src="/images/round-logo.png" alt="img" />
        </a>
      </div>
      <Category />
      
      <form action="" class="header--searchbar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search.." value={search} onChange={handleChange} />
        <button type="submit">
          <img src="/images/search.png" alt="img" />
        </button>
      </form>
    </header>
    )
}