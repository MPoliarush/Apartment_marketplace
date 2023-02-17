
import { useState,useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'
import axios from 'axios'

const url='http://localhost:8000/apartments'

function App() {
const [hotelsList, setHotelsList] = useState([])


// {appId:1,
//   rooms:2,
//   name:'Sun Hotel',
//   price:'100',
//   descr:'Nice hotel'
//  },
//  {appId:2,
//   rooms:1,
//   name:'Maris Hotel',
//   price:'50',
//   descr:'Nice hotel'
//  },
//  {appId:3,
//   rooms:1,
//   name:'Primera Hotel',
//   price:'60',
//   descr:'Nice hotel'
//  }
// ]

console.log(hotelsList)

const [selectedModeChanges,setSelectedModeChanges] = useState('')



useEffect(() => {
  
  function fetchedData (){
    return fetch(url);
};


  fetchedData().then((request => request.json()))
    .then(data => setHotelsList(data.apartments.sort((a,b)=>{ return a.price-b.price})) )
  // .then(data => setHotelsList(data.apartments))
  .catch(err=>console.log(err));

  console.log(hotelsList)
 
}, []);

const addNewItem = (data)=>{
  console.log(hotelsList)
  setHotelsList([...hotelsList, data])
  localStorage.setItem('localData', JSON.stringify([...hotelsList, data]))

  const apart = {
      appId:data.appId,
      rooms:data.rooms,
      name:data.name,
      price:data.price,
      descr:data.descr  
  }

  axios.post(url, apart)
  .then(response=>console.log(response.data))
  
  setHotelsList([...hotelsList, data])
}

const removeItem=(deletedItemID)=>{
  const newHotelsList = hotelsList.filter( hotel =>{
    return hotel._id !==deletedItemID
  })
  
  localStorage.setItem('localData', JSON.stringify(newHotelsList))

  if(JSON.parse(localStorage.getItem('localData'))==0){
    localStorage.setItem('localData', JSON.stringify('empty'))
  }

  console.log(deletedItemID._id)

  axios.delete(`http://localhost:8000/apartments/${deletedItemID}` )
  .then(response=>console.log(response.data))
  
  setHotelsList(newHotelsList)
}


let filteredData;


function selectedMode(selectedModeChoosed){
  
  if(selectedModeChoosed==='Price: lowest to highest'){
    filteredData=hotelsList.sort( (a,b) =>{
      return a.price-b.price
    })
  } else if(selectedModeChoosed==='Price: highest to lowest'){
    filteredData=hotelsList.sort( (a,b) =>{
      return b.price-a.price
    })
  }

 sortChangeHandler(selectedModeChoosed)
 return 
}

const sortChangeHandler=(selectedModeChoosed)=>{
  setSelectedModeChanges(selectedModeChoosed)
  setHotelsList(filteredData)
}



  return (
    <>
       <div className='main'>
          <h1>APARTMENTS MARKETPLACE</h1>
         
              <Form onSubmit={addNewItem}></Form>
              <List  list={hotelsList ? hotelsList : null} onDelete={removeItem}  selected={selectedMode} ></List> 
           
      </div>
    </>
   
  );
}

export default App;
