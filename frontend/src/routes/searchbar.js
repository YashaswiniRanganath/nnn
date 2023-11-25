import Header from '../container/header'
import './searchbar.css'
import {getRequest} from '../utils/serverhelper.js'
import {useState} from 'react'
import HotelComp from '../components/hotelcomponent.js'

export default function Search(){

    const [city, setCity] = useState('')

    const [hotels, setHotels] = useState([])

    const searchResults = async() => {
        const response = await getRequest('search/get/allhotels/' + city);

        if(response && !response.err){
            setHotels(response)
        }
        else{
            console.log("OK");
        }
    }

    return(
        <Header>
            <div className="SearchBar">
                <input id="InputSearch" type="text" placeholder="Enter city" onChange={(e) => (setCity(e.target.value))}/>
                <button id="SearchButton" onClick={() => {
                    searchResults();
                }}>Search</button>
            </div>
            <div className='search-results'>
                {hotels.length > 0?hotels.map((item,index) => {
                    return(<HotelComp 
                        key = {index}
                        img = {item.image}
                        name = {item.name}
                        city = {item.city}
                        capacity = {item.capacity}
                        />
                )}):<div></div>}
            </div>
        </Header>
    )
}