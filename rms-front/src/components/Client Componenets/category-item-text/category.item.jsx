import './category.item.style.css'
function CategoryItemText({categoryTitle, onTap}) {
    const handleClick = (e)=>{
        onTap();
        e.currentTarget.classList.toggle('active')
        document.querySelectorAll('.category-item').forEach(
            (category)=>{
                category !==e.currentTarget ? category.classList.remove('active') : undefined;
            }
            )
    }
    return ( <div onClick={handleClick} className="category-item" >{categoryTitle}</div> );
}

export default CategoryItemText;