import { FaStar} from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import styles from './MealCard.module.css'
import axios from "axios";
import { BASE_URL } from "../../../constants";

function MealCard({meal, mealImage,isMeal,setDeleteId,setUpdateId,setShouldShow,setArticle}) {
    

    const extractIdFromUrl = (url) => {
        const parts = url.split('/');
        const index = parts.indexOf('articles');
        if (index !== -1 && index + 1 < parts.length) {
          return parts[index + 1];
        }
        return null;
      };

    const handleUpdate = () => {
        setArticle(meal)
        setUpdateId(extractIdFromUrl(meal._links.self.href))
        console.log("Update clicked for meal:", meal);
        setShouldShow(true)
    };

    const handleDelete = () => {
        axios.post(`http://localhost:8080/api/v2/article/${extractIdFromUrl(meal._links.self.href)}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log("Delete clicked for meal:", meal);
        setDeleteId(extractIdFromUrl(meal._links.self.href))
    };

    return (
    <div className={styles.mealCard}>
        {
            isMeal && (
            <div className={styles.buttonsWrapper}>
                <RxUpdate onClick={handleUpdate} className={styles.update} />
                <MdDelete onClick={handleDelete} className={styles.delete} />
            </div>) 
        }
        <div className={styles.mealImgSrc}><img className="meal-img-src" src={mealImage} /></div>
        <div className={styles.mealInfo}>
            <div className={styles.mealName}>{meal.name}</div>
            <div className={styles.mealRatingPrice}>
                <div className={styles.mealPrice}>{meal.prix + " mad"}</div>
                <div className={styles.mealRating}>
                    <p className={styles.rating}>{meal.rating}</p>
                    <FaStar className={styles.startRatMeal}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MealCard;