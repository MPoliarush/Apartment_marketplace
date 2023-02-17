import { useState } from 'react'

import ListItem from './ListItem'

const List = (props)=>{
  

    // const removeItem=(id)=>{
    //     const decreasedList = props.list.filter( item =>{
    //         return item.id !== id
    //     } )
    //     console.log(decreasedList)
       
    // }

const [stateSort,setStateSort]=useState('') 
const [stateFilter,setStateFilter]=useState('') 

    
    const sortHandler = (event)=>{
        console.log(event.target.value)
        setStateSort(event.target.value)
        props.selected(event.target.value)
    }

    const filterHandler = (event)=>{
        console.log(event.target.value)
        setStateFilter(event.target.value)

        props.filtered(event.target.value)
    }

const filteredList = props.list.filter( item =>{
    return item.rooms == stateFilter}).map( hotel =>{ 
    return (
        <ListItem key={Math.random()} listData={hotel} onDelete={props.onDelete}></ListItem>
    )})



const ul = props.list.map( hotel =>{ 
    return (
        <ListItem key={Math.random()} listData={hotel} onDelete={props.onDelete}></ListItem>
    )}
)
   
   console.log(filteredList) 


    return(

        
        <div className='ul_wrapper'>
            <div className="ul_header">
                <h3>Available Apartments ({stateFilter.length>0 ? filteredList.length : ul.length})</h3>
                <div className='filters'>
                    <div className='roomsFilter'>
                        <span>Filter by rooms</span>
                        <input type='text' min='1' onChange={filterHandler} value={stateFilter}/>
                    </div>
                    <div className='priceFilter'>
                        <span>Order by</span>

                        <select name="select" onChange={sortHandler} value={stateSort}> 
                            <option value="Price: lowest to highest" >Price: lowest to highest</option>
                            <option value="Price: highest to lowest" >Price: highest to lowest</option>
                        </select>

                    </div>
                </div>                             
            </div>
        
            <ul >
                {stateFilter.length>0 ? filteredList : ul}
                {ul.length==0 ? <p class='no_apart'>No apartments available</p> :''}
            </ul>
        </div>
        
        
        
    )
}

export default List