import React from 'react'
import "../style/bookcard.css"
import "../style/cart.css"
import ReactStars from "react-rating-stars-component";
function CartCard(props) {
    return (
        <div>
            <div className="cart-container" id={props.data.bookID}>
                <div className="title">{props.data.title}</div>
                <div className="author"><i class="fa fa-user"></i>{props.data.authors}</div>
                <div className="rating-container">
                    <div className="language"><i class="fa fa-language" aria-hidden="true"></i>{props.data.language_code}</div>
                    <div className="isbn">ISBN:{props.data.isbn}</div>
                    <div className="rating"><ReactStars
                        count={5}
                        value={props.data.average_rating}
                        size={10}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    /></div>
                    <div className="likes"><i class="fa fa-thumbs-up"></i>{props.data.ratings_count}</div>
                </div>
                <div className="price-container">
                    <div className="price"><i class="fa fa-money"></i>{props.data.price}</div>
                    <div className="del" onClick={() => props.ItemRemove(props.data.bookID)}><i class="fa fa-trash" aria-hidden="true"></i></div>
                </div>
            </div>

        </div>
    )
}

export default CartCard
