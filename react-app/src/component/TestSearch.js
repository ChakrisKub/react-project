import React from "react";
import {Link} from "react-router-dom";
import { useGlobalContext } from "../context/global";
import styled from "styled-component";

function TestSearch() {
    const {popularAnime,isSearch, searchResults} = useGlobalContext();

        const conditionalRender = () => {
            if(!isSearch) {
                return popularAnime.map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                })
            }else{
                return searchResults.map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                })
            }
        }
    
        return (
            <div>
                <div class="popular-anime">
                    {conditionalRender()}
                </div>
            </div>
        )
}

const PopularStyled = styled.div`
    display: flex;
    .popular-anime{
        margin-top: 2rem;
        padding: 2rem 0 2rem 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;

    }
`;

export default TestSearch