import './styles/navbar.css'
import { categories } from './data/navbarCategories';
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import Category from "./Category";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Brand/>
        <div className="navbar-categories">
      {categories.map((category, i) => {
        if (category.render) {
          return <Category key={i} name={category.name} link={category.link} />;
        }
      })}
    </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
