import React, { useState, useEffect } from "react";
import axios from "axios";

const StarWarsFilmViaAxios = () => {
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/1/");
        setFilmData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchFilm();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>This data is obtained via Axios HTTP library!</h1>
      <h2>{filmData?.title}</h2>
      <p>Director: {filmData?.director}</p>
      <p>Release Date: {filmData?.release_date}</p>
      <p>Opening Crawl: {filmData?.opening_crawl}</p>
    </div>
  );
};

export default StarWarsFilmViaAxios;
