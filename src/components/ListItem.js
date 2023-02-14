

const ListItem=(props)=>{



const deleteHandler = ()=>{
    const deletedItemId = props.listData.id
    console.log(deletedItemId)
    props.onDelete(deletedItemId)
}


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
                <button onClick={deleteHandler}>Delete</button>
            </li>
    )
}

export default ListItem