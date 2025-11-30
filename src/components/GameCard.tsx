import type { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../types/game';
import './GameCard.css';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image';
  };

  return (
    <Link to={`/game/${game.id}`} className="game-card">
      <div className="game-card-thumbnail">
        <img
          src={game.thumbnail}
          alt={game.title}
          onError={handleImageError}
        />
      </div>
      <div className="game-card-content">
        <h3>{game.title}</h3>
        <p className="game-card-description">{game.description}</p>
        <div className="game-card-tags">
          {game.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p className="game-card-date">リリース: {game.releaseDate}</p>
      </div>
    </Link>
  );
}

export default GameCard;
