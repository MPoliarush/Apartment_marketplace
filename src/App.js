
import { useState } from 'react'
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

const addNewItem = (data)=>{
  console.log(hotelsList)
  setHotelsList([...hotelsList, data])
}

const removeItem=(deletedItemID)=>{
  const newHotelsList = hotelsList.filter( hotel =>{
    return hotel.id !==deletedItemID
  })
  setHotelsList(newHotelsList)
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
