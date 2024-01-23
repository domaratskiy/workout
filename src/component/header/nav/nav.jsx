import { Link } from "react-router-dom";

function Nav({ click }) {
  return (
    <nav>
      <Link to="/" onClick={click}>
        Главная
      </Link>
      <Link to="/hend" onClick={click}>
        Руки и Грудь
      </Link>
      <Link to="/back" onClick={click}>
        Спина
      </Link>
      <Link to="/legs" onClick={click}>
        Ноги
      </Link>
    </nav>
  );
}
export default Nav;
