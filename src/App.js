
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

const [selectedModeChanges,setSelectedModeChanges] = useState('')


useEffect(() => {
  const savedData= JSON.parse(localStorage.getItem('localData'));
  
  if(savedData==null){
    setHotelsList(hotelsList)
  } else if (savedData=='empty'){
    setHotelsList([])
  } else if (savedData.length>0){
    const fromLowestToHigth= savedData.sort( (a,b) =>{
      return a.price-b.price
    })
    setHotelsList(fromLowestToHigth)
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


let filteredData;


function selectedMode(selectedModeChoosed){
  console.log('kogged')
  if(selectedModeChoosed=='Price: lowest to highest'){
    filteredData=hotelsList.sort( (a,b) =>{
      return a.price-b.price
    })
  } else if(selectedModeChoosed=='Price: highest to lowest'){
    filteredData=hotelsList.sort( (a,b) =>{
      return b.price-a.price
    })
  }
 console.log(filteredData)

 sortChangeHandler(selectedModeChoosed)
 return 
}

const sortChangeHandler=(selectedModeChoosed)=>{
  setSelectedModeChanges(selectedModeChoosed)
  setHotelsList(filteredData)
}


  return (
    <div className='main'>
    <h1>APARTMENTS MARKETPLACE</h1>
      <Form onSubmit={addNewItem}></Form>
      <List  list={hotelsList} onDelete={removeItem}  selected={selectedMode}></List>
    </div>
  );
}

export default App;
