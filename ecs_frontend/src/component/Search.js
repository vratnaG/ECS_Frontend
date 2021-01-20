import React, { useState, useEffect } from 'react'
import "../style/search.css"
import { useHistory } from 'react-router-dom'
import { Data } from "./Data"
import BookCard from "./BookCard"
function Search() {
    const [data, setData] = useState(Data.sort(function (a, b) { return a.average_rating - b.average_rating }).reverse())
    const [searchvalue, setSearchValue] = useState(null)
    const [searchdata, setSearchData] = useState(null)
    const history = useHistory()


    function SearchFilter() {
        let sev = data.filter(data => data.authors.indexOf(searchvalue) > -1)
        setSearchData(sev);
    }

    useEffect(() => { }, [searchdata])

    return (
        <div>
            <div className="close" onClick={() => history.push('/')}><i class="fa fa-times" aria-hidden="true"></i></div>
            <div className="search-icon">
                <input type="text" value={searchvalue} placeholder={"enter the name author"} onChange={(e) => setSearchValue(e.target.value)} />
                <div onClick={() => SearchFilter()}><i class="fa fa-search" aria-hidden="true"></i></div>
            </div>
            {searchdata && searchdata.map((data) => <div className="cards-container"><BookCard data={data} /></div>)}
        </div>
    )
}

export default Search
