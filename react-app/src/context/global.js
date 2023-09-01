import React, { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

//actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";
const GET_ANIME_DETAILS = "GET_ANIME_DETAILS";
const GET_ANIME_GENRES = "GET_ANIME_GENRES";
const SET_SELECTED_GENRE = "SET_SELECTED_GENRE";
const GET_WINTER_ANIME = "GET_WINTER_ANIME";
const GET_SUMMER_ANIME = "GET_SUMMER_ANIME";
const GET_SPRING_ANIME = "GET_SPRING_ANIME";
const GET_FALL_ANIME = "GET_FALL_ANIME";

const GlobalContextProvider = ({ children }) => {
  //intial state
  const intialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    winterAnime: [],
    summerAnime: [],
    springAnime: [],
    fallAnime: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
    animeGenres: [], // Add animeGenres
    selectedGenre: null, // Add selectedGenre
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  const [search, setSearch] = useState("");

  //handle change
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a search term");
    }
  };

  //fetch popular anime
  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/top/anime  `); // <-- change Fetch to axios
    console.log(response);
    dispatch({ type: GET_POPULAR_ANIME, payload: response.data.data }); //<-- add more .data
  };

  //fetch upcoming anime
  const getUpcomingAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/top/anime?filter=upcoming`);
    dispatch({ type: GET_UPCOMING_ANIME, payload: response.data.data });
  };

  //fetch airing anime
  const getAiringAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/top/anime?filter=airing`);
    dispatch({ type: GET_AIRING_ANIME, payload: response.data.data });
  };

  //search anime
  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    const response = await axios.get(
      `${baseUrl}/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    dispatch({ type: SEARCH, payload: response.data.data });
  };

  //get anime pictures
  const getAnimePictures = async (id) => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/characters/${id}/pictures`);
    dispatch({ type: GET_PICTURES, payload: response.data.data });
  };

  //fetch anime by genre https://api.jikan.moe/v4/genres/anime
  const getAnimeGenres = async () => {
    try {
      console.log("Fetching anime genres...");
      const response = await axios.get(`${baseUrl}/genres/anime`);
      dispatch({ type: GET_ANIME_GENRES, payload: response.data.data });
      console.log("Anime genres fetched:", response.data.data);
    } catch (error) {
      console.error("Error fetching anime genres:", error);
    }
  };

  // Fetch anime details by ID
  const getAnimeDetails = async (id) => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/anime/${id}`);
    dispatch({ type: GET_ANIME_DETAILS, payload: response });
  };

  // Action to set the selected genre
  const setSelectedGenre = (genreId) => {
    dispatch({ type: SET_SELECTED_GENRE, payload: genreId });
  };

  // Define the getAnimeNamesByGenre function
  // Inside your context file
  const getAnimeNamesByGenre = async (genreId) => {
    const genre = state.animeGenres.find((genre) => genre.mal_id === genreId);
    if (genre && genre.name) {
      return genre.name; // Return the genre name as a single string
    }
    return "";
  };

  // fetchWinterAnime: '/seasons/2022/winter'
  const getWinterAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/seasons/2022/winter`);
    dispatch({ type: GET_WINTER_ANIME, payload: response.data.data });
  };

  // fetchAutumnAnime: '/seasons/2022/spring'
  const getSpringAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/seasons/2022/spring`);
    dispatch({ type: GET_SPRING_ANIME, payload: response.data.data });
  };

  //fetchFallAnime:'/seasons/2022/Fall'
  const getFallAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/seasons/2022/fall`);
    dispatch({ type: GET_FALL_ANIME, payload: response.data.data });
  };

  // fetchSummerAnime:'/seasons/2022/summer'
  const getSummerAnime = async () => {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseUrl}/seasons/2022/summer`);
    dispatch({ type: GET_SUMMER_ANIME, payload: response.data.data });
  };

  // useEffect(() => {
  //   getPopularAnime();
  //   getUpcomingAnime();
  //   getAiringAnime();
  //   getWinterAnime();
  //   getSummerAnime();
  //   getSpringAnime();
  //   getFallAnime();
  // }, []);

  useEffect(() => {
    const delay = 1800;

    const fetchWithDelay = async (fetchFunction) => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      fetchFunction();
    };
    const fetchAllData = async () => {
      await fetchWithDelay(getPopularAnime);
      await fetchWithDelay(getUpcomingAnime);
      await fetchWithDelay(getAiringAnime);
      await fetchWithDelay(getWinterAnime);
      await fetchWithDelay(getSummerAnime);
      await fetchWithDelay(getSpringAnime);
      await fetchWithDelay(getFallAnime);
    };

    fetchAllData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        searchAnime,
        search,
        getPopularAnime,
        getUpcomingAnime,
        getAiringAnime,
        getWinterAnime,
        getSummerAnime,
        getSpringAnime,
        getFallAnime,
        getAnimePictures,
        getAnimeGenres,
        getAnimeDetails,
        getAnimeNamesByGenre,
        setSelectedGenre, // Add this action to the value
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };
