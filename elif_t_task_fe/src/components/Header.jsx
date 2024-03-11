import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="head_nav">
      <Link to="/drugs">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Header;
