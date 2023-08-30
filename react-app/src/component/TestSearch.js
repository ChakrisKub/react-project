import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/global";
import styled from "styled-components";

function TestSearch() {
  const { searchResults } = useGlobalContext();

  const conditionalRender = () => {
    return searchResults.map((anime) => {
      return (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" />
        </Link>
      );
    });
  };

  return (
    <PopularStyled>
      <div>
        <div class="popular-anime">
          {/* render function */}
          {conditionalRender()}
        </div>
      </div>
    </PopularStyled>
  );
}

const PopularStyled = styled.div`
  .popular-anime {
    margin-top: 3rem;
    padding: 2rem 5rem 2rem 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;

    a {
      height: 400px;
      width: 300px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }
    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export default TestSearch;
