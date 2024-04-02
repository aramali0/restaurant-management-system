import { useContext, useEffect, useState } from 'react';
import './cart.page.style.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom';
import { Context } from "../Layout/layout";

function CartPage() {
    const [index, setIndex] = useContext(Context);
    const [articles,setArticles] = useState([]);
    const [quantite, setQuantite] = useState([]);
    const [currentPanierId, setCurentPanierId] = useState(NaN);
    const [totalPrice, setTotalPrice] = useState([]);
    const [message,setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigat = useNavigate();
    const getPaniers = ()=>{
        fetch("http://localhost:8080/api/clients/1/panier").then((resp)=>{resp.json().then(
            (resp)=>{
            setCurentPanierId(resp.idPanier);
            fetch(resp._links.articles.href).then(
                (resp)=>{
                    resp.json().then((resp)=>{
                        setArticles(resp._embedded.articles);
                        setIndex(resp._embedded.articles.length);
            })})
        })})
    }
    useEffect(()=>{
        getPaniers();
        articles.map((_,key)=>{
            setQuantite(prevState=>{
                const tab = prevState;
                tab[key] = quantite[key];
                return [...tab];
            })
        })
    }, [])
    useEffect(()=>{
        var S =0;
        articles.map((article,key)=>{
            S = S + article.prix *(isNaN(quantite[key]) ? 1 : quantite[key])
        })
        setTotalPrice(S)
        
    }, [articles, quantite]);
    const handleRemoveArticleFromPanier = (idArticle)=>{
        if(!isNaN(idArticle)){
            fetch(`http://localhost:8080/api-c/paniers/panier/${idArticle}/${currentPanierId}`,
                {method: 'DELETE', body:{}, }
            )
            setMessage(prevState =>{
                return "Item deleted succesfully !"
            })
            document.querySelector('.cart-page-message').style.display='block'
            getPaniers();
            setTimeout(() => {
                document.querySelector('.cart-page-message').style.display='none'
            }, 2000);
        }
        getPaniers();
    }
    const handleQuntChange = (e,index)=>{
        const target = e.currentTarget;
        setQuantite(prevState=>{
            const tab = prevState;
            tab[index] = target.value;
            return [...tab];
        })
    }
    
    const handleOrderNow = ()=>{
        fetch(
            "http://localhost:8080/api/commandes", 
            {
                method : "POST", 
                body : JSON.stringify({
                    date: (new Date()).toISOString(),
                    status: "Pending",
                    totalPrix: totalPrice,
                    client : "http://localhost:8080/api/client/1",
                    articles : [],
                }),
            },
            ).then((resp)=>{
                resp.json().then((resp)=>{
                    const idCommande = resp.idCommande;
                    articles.map((article)=>{
                        fetch(
                            `http://localhost:8080/api-c/commandes/commande/${article.idArticle}/${idCommande}`, 
                            {
                                method : "POST",
                                
                                  
                            }
                            ).then((result) => {
                                console.log((result));
                                setMessage("Order passed succesfully !");
                                document.querySelector('.cart-page-message').style.display='block'
                                setTimeout(() => {
                                    document.querySelector('.cart-page-message').style.display='none'
                                }, 2000);
                            }).catch((err) => {
                                console.log(message);
                                setMessage(err);
                                document.querySelector('.cart-page-message').style.display='block'
                                document.querySelector('.cart-page-message').style.backgroundColor='red'
                                setTimeout(() => {
                                    document.querySelector('.cart-page-message').style.display='none'
                                    document.querySelector('.cart-page-message').style.backgroundColor='black'
                                }, 2000);
                            });
                    })
                    
                })
            })
    }
    return ( <>
    {
        articles.length>0 ? <div className="cart-page-container">
            
                <div className="cart-page-message">{message}</div>
            <div className="cart-page-left-column">
                <div className='header' >
                    <div className='cart-page-title'>Panier</div>
                    <div className='cart-page-item-count'>{articles.length ? (articles.length ===1 ? "1 ITEM" : articles.length + " ITEMS") : undefined}</div>
                </div>
                <hr />
                <div className='table-container'>
                <table className='cart-page-table' >
                    <thead>
                        <tr>
                            <th>ARTICLE DETAILS</th>
                            <th>QUANTITE</th>
                            <th>PRIX</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articles.map((article,key)=>{
                                return <tr>
                                <td className='article-details'>
                                    <div className='article-image'><img width src="/src/assets/client-assets/restautant-images/meal1.jpg" alt="article-image" /></div>
                                    <div className='article-info'>
                                        <div className='article-name'>{article.name}</div>
                                        <div className='categorie'>{article.categorie}</div>
                                        <div className='remove-btn' onClick={()=>handleRemoveArticleFromPanier(article.idArticle)}>remove</div>
                                    </div>
                                </td>
                                <td className='quantite'><input defaultValue={1} min="1" onChange={(e)=>handleQuntChange(e,key)} type="number" /></td>
                                <td className='price'>{article.prix}$</td>
                                <td className='total'>{ isNaN(quantite[key]) ? article.prix : quantite[key]*article.prix}$</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
                <div className='go-back' onClick={()=> {navigat("/client/home")}} >
                    <IoMdArrowRoundBack className='back-btn' />
                    <span>Continue Shoping</span>
                </div>
            </div>
            <div className="cart-page-right-column">
                <div className='title'><p>Order summary</p></div>
                <hr />
                <div className='header'>
                    <div className='items'>{articles.length ? (articles.length ===1 ? "1 ITEM" : articles.length + " ITEMS") : undefined}</div>
                    <div className='price'>{totalPrice}$</div>
                </div>
                <div className='aditional-info'>
                    <div>PROMO CODE:<span>(optional)</span></div>
                    <input type="text" placeholder="Your promo code ... " />
                    <button>APPLY</button>
                </div>
                <hr />
                <div className='header'>
                    <div className='total-cost'>TOTAL COST</div>
                    <div className='price'>{totalPrice}$</div>
                </div>
                <div className='order-btn' onClick={handleOrderNow} >ORDER NOW</div>
            </div>
        </div>
        : <h1>No articles</h1>
        }
    </> );
}

export default CartPage;