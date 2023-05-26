import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StarWarsFilm from "./StarWarsFilm";

const StarWarsFilmWrapper = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StarWarsFilm />
    </QueryClientProvider>
  );
};

export default StarWarsFilmWrapper;
