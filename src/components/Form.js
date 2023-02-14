import { useState } from "react"

const Form = (props)=>{

const [newInputs, setNewInputs] = useState({
     id:Math.random(),
     name:'',
     rooms:'1',
     price:'1',
     descr:''
})

const [isTitlevalid, setTitleValid] = useState(true)
const [isRoomsvalid, setRoomseValid] = useState(true)
const [isPricevalid, setPricevalid] = useState(true)

const titleHandler=(event)=>{
    console.log(event.target.value)
    setNewInputs( prev => (
        {...prev,
        name:event.target.value
        }
    )
    )

    console.log(newInputs)
}

const roomsHandler=(event)=>{
    console.log(event.target.value)
    setNewInputs( prev => (
        {...prev,
        rooms:event.target.value
        }
    )
    )
}

const priceHandler=(event)=>{
    console.log(event.target.value)
    setNewInputs( prev => (
        {...prev,
        price:event.target.value
        }
    )
    )
}

const descrHandler=(event)=>{
    console.log(event.target.value)
}


const submitHalndler = () =>{
    console.log(newInputs)
    if (newInputs.name.length>99 || newInputs.name.length === 0 ){
        console.log(newInputs.name.length)
        setTitleValid(false)
    }else { 
        setTitleValid(true)
    }

    if (newInputs.rooms==='0'){
        console.log('logged')
        setRoomseValid(false)
    } else {
        setRoomseValid(true)
    }

    if (newInputs.price<='0' || newInputs.price==='00'){
        console.log('logged')
        setPricevalid(false)
    } else {
        setPricevalid(true)
    }

    props.onSubmit(newInputs)

}

return (
    <div className="form_wrapper">
        <h3>Create a new rent</h3>
        <div className="form_container">
            <div className="forms">
                <form className="title_form">
                    <label htmlFor='title'>Title*</label>
                    <input className={isTitlevalid==false ? 'invalid' : '' } id='title' type='text' min='1' max='99' placeholder="name" onChange={titleHandler}></input>
                </form>
                <form className="rooms_form">
                    <label htmlFor='rooms'>Rooms*</label>
                    <input className={isRoomsvalid==false ? 'invalid' : '' } id='rooms' type='number' min='1' max='99999' step='1' defaultValue='1' placeholder="1" onChange={roomsHandler}></input>
                </form>
                <form className="price_form">
                    <label htmlFor='rooms'>Price*</label>
                    <input className={isPricevalid==false ? 'invalid' : '' } id='rooms' type='number' min='1' step='1' defaultValue='50' onChange={priceHandler}></input>
                </form>
                <form className="descr_form">
                    <label htmlFor='rooms'>Description</label>
                    <input id='rooms' type='text' min='0' max='999' placeholder="Flat in the city center" onChange={descrHandler}></input>
                </form>
            </div>
            <button type="sumbit" onClick={submitHalndler}>Add</button>
        </div>
    </div>
)
}

export default Form