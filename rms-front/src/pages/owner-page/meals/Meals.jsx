import React, { useEffect, useState } from 'react'
import styles from './meals.module.css'
import meal1 from '../../../assets/client-assets/restautant-images/meal1.jpg'
import FormUpdate from '../../../components/owner-page/form/FormUpdate'
import axios from 'axios'
import Model from '../../../components/owner-page/model/Model'
import { BASE_URL } from '../../../constants'
import MealCard from '../../../components/owner-page/meal-card/meal.card'
import { useNavigate } from 'react-router-dom'

function Meals() {

  const navigate = useNavigate();
  const [nbrPage, setNbrPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [meal,setMeal] = useState("")
  const [article,setArticle] = useState({})
  const [shouldShow,setShouldShow] = useState(false)
  const [tableData, setTableData] = useState([])
  const [deleteId,setDeleteId] = useState(0);
  const [updateId,setUpdateId] = useState(0);
  const restaurantId = 2;
 

  const SearchFn = () =>{
    axios.get(`${BASE_URL}articles/search/findArticlesByRestaurantIdRestaurantAndNameContainingIgnoreCase?restaurantId=${restaurantId}&name=${meal}&page=${nbrPage}&size=6`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.articles);
      });
  }

  const onRequestClose = () =>{
    setShouldShow(false);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}articles/search/findArticlesByRestaurantIdRestaurant?restaurantId=2&page=${nbrPage}&size=6`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.articles);
      });

      console.log("article : ",article);
  }, [nbrPage,deleteId,updateId]);

  return (
    <div className={styles.main}>
      <div  className={styles.header}>
        <div>
          <h1>Meals :</h1>
        </div>
        <div>
          <input onChange={(e) =>{ setMeal(e.target.value); SearchFn();}} className={styles.input} id='search' type="text" placeholder='Search for Meals' />
        </div>
        <div>
          <button onClick={() => navigate('/owner/create')}  className={styles.button}>Add Meal</button>
        </div>
      </div>
        <div className={styles.wrapper}>
           <button hidden={nbrPage === 0} onClick={() => setNbrPage(nbrPage - 1)} className={styles.button}>{"<"}</button>
         <div className={styles.wrapperCard}>
            {
              tableData.map((meal,index) => (
                <MealCard  setArticle={setArticle} setShouldShow={setShouldShow} setDeleteId={setDeleteId} setUpdateId={setUpdateId} isMeal={true} key={index} meal={meal} mealImage={meal1}/>
              ))
            }
          </div>
          <button hidden={nbrPage === totalPage - 1} onClick={() => setNbrPage(nbrPage + 1)} className={styles.button}>{">"}</button>

        </div>
        <Model shouldShow={shouldShow} onRequestClose={onRequestClose}>
            <FormUpdate setUpdateId={setUpdateId} setShouldShow={setShouldShow} article={article}/>
        </Model>
    </div>
  )
}

export default Meals;