import './cart.page.style.css'
import { IoMdArrowRoundBack } from "react-icons/io";

function CartPage() {
    return ( <>
        <div className="cart-page-container">
            <div className="cart-page-left-column">
                <div className='header' >
                    <div className='cart-page-title'>Panier</div>
                    <div className='cart-page-item-count'>3 Items</div>
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
                            [1,2,3,4,5,6,7].map((value)=>{
                                return <tr>
                                <td className='article-details'>
                                    <div className='article-image'><img width src="src/assets/client-assets/restautant-images/meal1.jpg" alt="article-image" /></div>
                                    <div className='article-info'>
                                        <div className='article-name'>Sandawich</div>
                                        <div className='categorie'>Fast food</div>
                                        <div className='remove-btn'>remove</div>
                                    </div>
                                </td>
                                <td className='quantite'><input min="1" type="number" /></td>
                                <td className='price'>7$</td>
                                <td className='total'>23.6$</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
                <div className='go-back' >
                    <IoMdArrowRoundBack className='back-btn' />
                    <span>Continue Shoping</span>
                </div>
            </div>
            <div className="cart-page-right-column">
                <div className='title'><p>Order summary</p></div>
                <hr />
                <div className='header'>
                    <div className='items'>ITEMS 17</div>
                    <div className='price'>120$</div>
                </div>
                <div className='aditional-info'>
                    <div>PROMO CODE:</div>
                    <input type="text" placeholder="Your promo code ... " />
                    <button>APPLY</button>
                </div>
                <hr />
                <div className='header'>
                    <div className='total-cost'>TOTAL COST</div>
                    <div className='price'>145$</div>
                </div>
                <div className='order-btn'>ORDER NOW</div>
            </div>
        </div>
    </> );
}

export default CartPage;