

const ListItem=(props)=>{
    return(
            <li className="li" >
                <table>
                    <tbody>
                    
                    <tr>
                        <th className="textLi">{props.listData.name}</th>
                        <th className="numbersLi">{props.listData.rooms} rooms</th>
                        <th className="numbersLi">${props.listData.price} per day</th>
                        <th className="textLi descr">{props.listData.descr}</th>
                    </tr>
                    </tbody>
                   
                </table>
                <button>Delete</button>
            </li>
    )
}

export default ListItem