import React, { useState, useEffect } from "react";

const StarWarsFilmViaFetch = () => {
  const [filmData, setFilmData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/1/");
        if (!response.ok) {
          throw new Error("Failed to fetch film data");
        }
        const data = await response.json();
        setFilmData(data);
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
      <h1>Here we are fetching data using FETCH API !</h1>
      <h2>{filmData?.title}</h2>
      <p>Director: {filmData?.director}</p>
      <p>Release Date: {filmData?.release_date}</p>
      <p>Opening Crawl: {filmData?.opening_crawl}</p>
    </div>
  );
};

export default StarWarsFilmViaFetch;
