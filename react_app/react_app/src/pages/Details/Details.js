import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useMovieDetails } from '../../api/imdb';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <Header />
      <div className="movie-details-container">
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          ← Back to Movies
        </button>
        
        <div className="movie-details-header">
          <h1>#{movie.rank} {movie.title} ({movie.year})</h1>
          <div className="movie-details-info">
            <span className="movie-rating">⭐ {movie.rating}</span>
            <span className="movie-genres">
              {movie.genre.join(" • ")}
            </span>
          </div>
        </div>

        <div className="movie-details-content">
          <div className="movie-poster">
            <img src={movie.big_image} alt={movie.title} />
          </div>
          
          <div className="movie-info">
            <div className="movie-description">
              <h3>Overview</h3>
              <p>{movie.description}</p>
            </div>

            <div className="movie-credits">
              <div className="credit-section">
                <h3>Director</h3>
                <p>{movie.director?.join(", ")}</p>
              </div>
              
              <div className="credit-section">
                <h3>Writers</h3>
                <p>{movie.writers?.join(", ")}</p>
              </div>
            </div>

            <div className="movie-trailer">
              <h3>Trailer</h3>
              <div className="trailer-wrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={movie.trailer_embed_link}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="movie-actions">
              <a 
                href={movie.imdb_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="imdb-link"
              >
                View on IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
