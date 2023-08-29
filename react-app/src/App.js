import {useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './FetchData';
import TestSearch from './component/TestSearch';

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
