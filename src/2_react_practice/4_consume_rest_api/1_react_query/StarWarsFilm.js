import React from 'react';
import { useQuery } from 'react-query';

const StarWarsFilm = () => {
    // Define a query function to fetch film data
    const fetchFilm = async () => {
        const response = await fetch('https://swapi.dev/api/films/1/');
        const data = await response.json();
        return data;
    };

    // Use the useQuery hook to fetch film data
    const { data, isLoading, error } = useQuery('film', fetchFilm);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Here we are fetching data using ReactQuery!!</h1>
            <h2>{data?.title}</h2>
            <p>Director: {data?.director}</p>
            <p>Release Date: {data?.release_date}</p>
            <p>Opening Crawl: {data?.opening_crawl}</p>
        </div>
    );
};

export default StarWarsFilm;
