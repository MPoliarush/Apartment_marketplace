
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

console.log(hotelsList)
// localStorage.setItem('localData', JSON.stringify(hotelsList))


useEffect(() => {
  const savedData= JSON.parse(localStorage.getItem('localData'));
  
  if(savedData==null){
    setHotelsList(hotelsList)
  } else if (savedData.length>0){
    setHotelsList(savedData)
  }
}, [setHotelsList]);



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
}


  return (
    <div className='main'>
    <h1>APPARTMENTS MARKETPLACE</h1>
      <Form onSubmit={addNewItem}></Form>
      <List  list={hotelsList} onDelete={removeItem}></List>
    </div>
  );
}

export default App;
