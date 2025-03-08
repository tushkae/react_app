import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from '../../api/imdb';

const Movies = () => {
  const { movies, loading, error } = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <div className="movies-container">
        <div className="movies-grid">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="pagination">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`pagination-number ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            ))}
          </div>

          <button 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
