
import Form from './components/Form'
import List from './components/List'

function App() {

  const ul=[
    {id:'num',
     rooms:2,
     name:'Sun Hotel',
     price:'$100',
     descr:'Nice hotel'
    },
    {id:'num2',
     rooms:1,
     name:'Maris Hotel',
     price:'$50',
     descr:'Nice hotel'
    },
    {id:'num2',
     rooms:1,
     name:'Primera Hotel',
     price:'$60',
     descr:'Nice hotel'
    }
]




  return (
    <div className='main'>
    <h1>APPARTMENTS MARKETPLACE</h1>
      <Form></Form>
      <List  list={ul}></List>
    </div>
  );
}

export default App;
