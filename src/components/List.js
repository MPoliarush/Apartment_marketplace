import ListItem from './ListItem'

const List = (props)=>{
  

    // const removeItem=(id)=>{
    //     const decreasedList = props.list.filter( item =>{
    //         return item.id !== id
    //     } )
    //     console.log(decreasedList)
       
    // }

    return(
        <div className='ul_wrapper'>
            <div className="ul_header">
                <h3>Available Apartments (3)</h3>
                <div className='filters'>
                    <div className='roomsFilter'>
                        <span>Filter by rooms</span>
                        <input type='number' min='1' defaultValue='1'/>
                    </div>
                    <div className='priceFilter'>
                        <span>Order by</span>
                        <select name="select"> 
                            <option value="value1">Price: lowest to highest</option>
                            <option value="value2" selected>Price: highest to lowest</option>
                        </select>
                    </div>
                </div>                             
            </div>
        
            <ul className="">
    
                {props.list.map( hotel =>{ 
                    return (
                        <ListItem key={Math.random()} listData={hotel} onDelete={props.onDelete}></ListItem>
                    )}
                )}
            </ul>
        </div>
        
    )
}

export default List