import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CartStatus } from '../utils/CartAdded'
import CartCard from "./CartCard"
function Cart() {
    const history = useHistory()
    const [data, setData] = useState(CartStatus.getStatus())
    function ItemRemove(id) {
        CartStatus.Deleted(data.filter((data) => data.bookID != id))
        setData(CartStatus.getStatus())
    }

    return (
        <div>
            <div className="close" onClick={() => history.push('/')}><i class="fa fa-times" aria-hidden="true"></i></div>
            {data.length ? data.map((data) => <CartCard data={data} ItemRemove={ItemRemove} />) : <div>Empty Cart</div>}
        </div>
    )
}

export default Cart
