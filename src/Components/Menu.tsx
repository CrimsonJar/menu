import { Link, useLocation } from "react-router-dom";
import articlesData from "./Data/data.json";

const Menu = () => {
  const location = useLocation();

  return (
    <nav className='menu'>
      {articlesData.map((article) => (
        <Link
          key={article.link}
          className={`menu__item ${
            location.pathname === `${article.link}` ? "menu__item-active" : ""
          }`}
          to={article.link}
        >
          {article.title}
        </Link>
      ))}
    </nav>
  );
};
export default Menu;
