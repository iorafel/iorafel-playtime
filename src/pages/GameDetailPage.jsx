import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';
import './GameDetailPage.css';

function GameDetailPage() {
  const { id } = useParams();
  const game = games.find((g) => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="game-detail-page">
        <div className="not-found">
          <h1>ゲームが見つかりません</h1>
          <Link to="/" className="back-link">ホームに戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="game-detail-page">
      <div className="game-header">
        <Link to="/" className="back-link">← ゲーム一覧に戻る</Link>
        <h1>{game.title}</h1>
        <div className="game-meta">
          <div className="game-tags">
            {game.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <p className="release-date">リリース日: {game.releaseDate}</p>
        </div>
        <p className="game-description">{game.description}</p>
      </div>

      <div className="game-player">
        <iframe
          src={game.gamePath}
          title={game.title}
          className="game-iframe"
          allowFullScreen
        />
      </div>

      <div className="game-info">
        <h2>遊び方</h2>
        <p>ゲームを楽しんでください！操作方法はゲーム内で確認できます。</p>
      </div>
    </div>
  );
}

export default GameDetailPage;
