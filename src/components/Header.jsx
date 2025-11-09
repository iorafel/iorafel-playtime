import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <h1>ゲームギャラリー</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/">ホーム</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
