import React from 'react'
import "../style/bookcard.css"
import ReactStars from "react-rating-stars-component";
import { CartStatus } from '../utils/CartAdded'
function BookCard(props) {
    return (
        <div>
            <div className="card-container" id={props.data.bookID}>
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
                    <div className="cart" onClick={() => CartStatus.Added(props.data)}><i class="fa fa-shopping-cart"></i>Add to cart</div>
                </div>
            </div>

        </div>
    )
}

export default BookCard
