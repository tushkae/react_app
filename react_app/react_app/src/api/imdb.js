import { useState, useEffect } from 'react';

const API_HOST = 'imdb-top-100-movies.p.rapidapi.com';
const API_KEY = '1639e9db90msh11451ad43ff6315p10ce55jsnbd4b76f208ff';

// API Functions
const fetchAllMovies = async () => {
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  return response.json();
};

const fetchMovieById = async (id) => {
  const response = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/${id}`, {
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  return response.json();
};

// Custom Hooks
export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchAllMovies();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading, error };
};

export const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  return { movie, loading, error };
};
