import {useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestSearch from './component/TestSearch';

//<Route path="/anime/:id" element={<AnimeItem />} />
function App(){
    return (
  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestSearch />} />
                
            </Routes>
        </BrowserRouter>
       
    )
}

export default App
