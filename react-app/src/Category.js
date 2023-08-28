import React from "react";
import FetchData,{paramsGenres} from "./FetchData";

const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});



function Category(){
    return (
        <>
        <div class="dropdown">
            <div class="select">
                <span class="selected">Adventure</span>
                <div class="caret"></div>
            </div>
            <ul class="menu">
                <FetchData fetchURL={paramsGenres.fetchAdventure} title="Action">Action</FetchData>
                <li class="active">Adventure</li>
                <li>Comedy</li>
                <li>Slice of Life</li>
                <li>Fantasy</li>
                <li>Horror</li>
                <li>Romance</li>
                <li>Drama</li>
            </ul>
        </div>
       </>
    )
}

export default Category