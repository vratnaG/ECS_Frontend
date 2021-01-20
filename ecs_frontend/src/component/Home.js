import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Data } from "./Data"
import BookCard from "./BookCard"
import '../style/home.css'
import { useHistory } from 'react-router-dom'

function Home() {
    const [booksdata, setBookData] = useState(Data.sort(function (a, b) { return a.average_rating - b.average_rating }).reverse())
    const [currentlist, setCurrentList] = useState([])
    const [skip, setSkip] = useState(0)
    const history = useHistory()
    // useEffect(() => {
    //     axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json")
    //         .then((res) => {
    //             setBookData(res.data)
    //             console.log(booksdata)
    //         })
    //         .catch((err) => {
    //             alert('unable to fecth data:', err.messages)
    //         })

    // }, [])
    useEffect(() => {
        setCurrentList(booksdata.slice(0 + skip, 9 + skip))
    }, [skip])

    function Prev() {
        if (skip > 0) {
            setSkip(skip - 10)
        }

    }

    function Next() {
        if (skip < booksdata.length) {
            setSkip(skip + 10)
        }
    }

    return (
        <div>
            <div>
                <div className="title">Book List</div>
                <div className="cart-search">
                    <div className="search" onClick={() => history.push('/search')}>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div onClick={() => history.push('/cart')}><i class="fa fa-shopping-cart"></i></div>
                </div>
                {currentlist.map((data) => <div className="cards-container"><BookCard data={data} /></div>)}
                <div className="pagination">
                    <div className="prev" onClick={() => Prev()}>Prev</div>
                    <div className="next" onClick={() => Next()}>Next</div>
                </div>
            </div>

        </div>
    )
}

export default Home
