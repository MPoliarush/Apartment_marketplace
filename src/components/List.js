

const List = (props)=>{


    console.log(props.list)
    return(
        <div className='ul_wrapper'>
            <div className="ul_header">
                <h3>Available Apartments (3)</h3>
                <select name="select"> 
                    <option value="value1">Price: lowest to highest</option>
                    <option value="value2" selected>Price: highest to lowest</option>
                </select>
            </div>
        
            <ul className="">
                {props.list.map( hotel =>{ 
                return (
                    <li className="li" key={Math.random()}>
                        {/* <p>{hotel.name}/ {hotel.rooms} rooms/ {hotel.price} / {hotel.descr}</p> */}
                        <table>
                            <tr>
                                <th>{hotel.name}</th>
                                <th>{hotel.rooms}</th>
                                <th>{hotel.price}</th>
                                <th>{hotel.descr}</th>
                            </tr>
                        </table>
                        <button>Delete</button>
                    </li>
                )}
                )}
            </ul>
        </div>
        
    )
}

export default List