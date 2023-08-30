import { useState, useEffect } from "react";
import Category from "../Category";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import TestSearch from "./TestSearch";

export default function Navbar() {
  const { handleChange, handleSubmit, search } = useGlobalContext();

  return (
    <header>
      <div className="header--logo">
        <Link to="/">
          <img src="/images/round-logo.png" alt="img" />
        </Link>
      </div>
      <Category />

      <form action="" className="header--searchbar" onSubmit={handleSubmit}>
        <Link to="/TestSearch" element={<TestSearch />}>
          <input
            type="text"
            placeholder="Search.."
            value={search}
            onChange={handleChange}
          />
        </Link>
        <button type="submit">
          <img src="/images/search.png" alt="img" />
        </button>
      </form>
    </header>
  );
}
