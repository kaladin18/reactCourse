import { NavLink } from 'react-router-dom';
import './styles/category.css'
function Category({name, link}) {
    return ( 
        <NavLink to={`/category/${link}`} className={({ isActive }) => isActive ? "currentCategory" : "category"}>
            <p>{name}</p>
        </NavLink>
     );
}

export default Category;
