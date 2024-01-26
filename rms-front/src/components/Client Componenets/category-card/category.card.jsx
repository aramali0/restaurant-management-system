import './category.style.css'
function CategoryCard({categoryName, color, itemCount, imageUrl, onTap, key}) {
    return ( <>
        <div onClick={onTap} className="card" style={{backgroundColor : color}}>
            <div className="title">{categoryName}</div>
            <div className="item-count">{itemCount}</div>
            <div className="image"><img width="100" src={imageUrl}/> </div>
        </div>
    </> );
}
export default CategoryCard;