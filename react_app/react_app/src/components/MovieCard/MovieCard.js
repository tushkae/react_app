import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/details/${movie.id}`)}>
      <div className="movie-card-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-card-content">
        <div className="movie-card-header">
          <div className="movie-card-title">
            <h3>#{movie.rank} {movie.title}</h3>
          </div>
          <div className="movie-card-info">
            <span className="movie-card-rating">⭐ {movie.rating}</span>
            <span className="movie-card-year">{movie.year}</span>
          </div>
        </div>
        <div className="movie-card-description">
          <p>{movie.description}</p>
        </div>
        <div className="movie-card-genres">
          {movie.genre.map((genre) => (
            <span key={genre} className="genre-tag">{genre}</span>
          ))}
        </div>
        <div className="movie-card-link">
          <a href={movie.imdb_link} target="_blank" rel="noopener noreferrer">
            View on IMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;