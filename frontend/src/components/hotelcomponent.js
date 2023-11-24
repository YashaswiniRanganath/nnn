import './hotelcomponent.css';

export default function HotelComp(props){
    return(
        <div className="div-Tweet">
            <div className="HotelImg">
                <img src={props.img} alt="X" width={220} height={200} style={{borderRadius:30, margin:20}}/>
            </div>
            <div className="Rest-Add">
                <div className="NameHotel"><h1>Hotel : {props.name}</h1></div>
                <div className="CityHotel">
                    <h1>City : {props.city}</h1>
                    <h1>Capacity : {props.capacity}</h1>
                </div>
                <div className="BookingHotel">
                    <button id="BookBtn">Book</button>
                </div>
            </div>
        </div>
    )
}