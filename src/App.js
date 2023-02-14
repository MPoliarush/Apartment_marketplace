
import { useState,useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'

function App() {
const [hotelsList, setHotelsList] = useState([
  {id:Math.random(),
   rooms:2,
   name:'Sun Hotel',
   price:'100',
   descr:'Nice hotel'
  },
  {id:Math.random(),
   rooms:1,
   name:'Maris Hotel',
   price:'50',
   descr:'Nice hotel'
  },
  {id:Math.random(),
   rooms:1,
   name:'Primera Hotel',
   price:'60',
   descr:'Nice hotel'
  }
])




useEffect(() => {
  const savedData= JSON.parse(localStorage.getItem('localData'));
  
  if(savedData==undefined){
    setHotelsList(hotelsList)
  } else if (savedData=='empty'){
    setHotelsList([])
  } else if (savedData.length>0){
    setHotelsList(savedData)
  }
}, []);



const addNewItem = (data)=>{
  console.log(hotelsList)
  setHotelsList([...hotelsList, data])
  localStorage.setItem('localData', JSON.stringify([...hotelsList, data]))
}

const removeItem=(deletedItemID)=>{
  const newHotelsList = hotelsList.filter( hotel =>{
    return hotel.id !==deletedItemID
  })
  setHotelsList(newHotelsList)
  localStorage.setItem('localData', JSON.stringify(newHotelsList))

  if(JSON.parse(localStorage.getItem('localData'))==0){
    localStorage.setItem('localData', JSON.stringify('empty'))
  }
}


  return (
    <div className='main'>
    <h1>APARTMENTS MARKETPLACE</h1>
      <Form onSubmit={addNewItem}></Form>
      <List  list={hotelsList} onDelete={removeItem}></List>
    </div>
  );
}

export default App;
