import "../components/Header.css";
import trollFace from "../assets/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="troll face image" className="header__logo" />
      <h2 className="header__title">Meme Generator</h2>
    </header>
  );
}

export default Header;
