import ListItem from './ListItem'

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
                        <ListItem key={Math.random()} listData={hotel}></ListItem>
                    )}
                )}
            </ul>
        </div>
        
    )
}

export default List