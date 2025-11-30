import { games } from '../data/games';
import GameCard from '../components/GameCard';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>私の作ったゲーム</h1>
        <p>ここでは自作ゲームを公開しています。好きなゲームを選んでプレイしてください！</p>
      </div>
      <div className="games-container">
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
