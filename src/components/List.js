import { useState } from 'react'

import ListItem from './ListItem'

const List = (props)=>{
  

    // const removeItem=(id)=>{
    //     const decreasedList = props.list.filter( item =>{
    //         return item.id !== id
    //     } )
    //     console.log(decreasedList)
       
    // }

const [state,setState]=useState() 

    const filterHandler = (event)=>{
        
    }

    const sortHandler = (event)=>{
        console.log(event.target.value)
        setState(event.target.value)
        props.selected(event.target.value)
    }

    

    return(
        <div className='ul_wrapper'>
            <div className="ul_header">
                <h3>Available Apartments ({props.list.length})</h3>
                <div className='filters'>
                    <div className='roomsFilter'>
                        <span>Filter by rooms</span>
                        <input type='number' min='1' defaultValue='1' onChange={filterHandler} />
                    </div>
                    <div className='priceFilter'>
                        <span>Order by</span>

                        <select name="select" onChange={sortHandler} value={state}> 
                            <option value="Price: lowest to highest" >Price: lowest to highest</option>
                            <option value="Price: highest to lowest" >Price: highest to lowest</option>
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