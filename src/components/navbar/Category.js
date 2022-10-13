import './styles/category.css'
function Category({name, link}) {
    return ( 
        <a href = {`/category/${link}`} className = "category" >
            <p>{name}</p>
        </a>
     );
}

export default Category;