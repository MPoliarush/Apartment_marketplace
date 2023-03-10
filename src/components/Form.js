import { useState } from "react"

const Form = (props)=>{

    const [newInputs, setNewInputs] = useState({
        name:'',
        rooms:'',
        price:'',
        descr:''
    })

    const [isTitlevalid, setTitleValid] = useState(true)
    const [isRoomsvalid, setRoomseValid] = useState(true)
    const [isPricevalid, setPricevalid] = useState(true)

    const titleHandler=(event)=>{
        if (event.target.value.length>99){
            setTitleValid(false)
        }else { 
            setTitleValid(true)
            setNewInputs( prev => (
                {...prev,
                name:event.target.value
                }
            ))
        }
    }

    const roomsHandler=(event)=>{
        setRoomseValid(true)
        setNewInputs( prev => (
            {...prev,
            rooms:event.target.value
            }
        ))   
    }


    const priceHandler=(event)=>{
        setPricevalid(true)
        setNewInputs( prev => (
            {...prev,
            price:event.target.value
            }
        ))
    }

    const descrHandler=(event)=>{
        setNewInputs( prev => (
            {...prev,
            descr:event.target.value
            }
        ))
    }


    const submitHalndler = () =>{
    
        if (newInputs.name.length =='' ){
            setTitleValid(false)
            return
        }

        if (newInputs.rooms =='' || newInputs.rooms<=0){
            setRoomseValid(false)
            return
        }

        if (newInputs.price=='' || newInputs.price<=0){
            setPricevalid(false)
            return
        }

        if (isTitlevalid!==true || isRoomsvalid!==true || isPricevalid!==true){
            return
        }

        props.onSubmit(newInputs) 

        setNewInputs( prev => (
            {...prev,
                name:'',
                rooms:'',
                price:'',
                descr:''
            }
        ))

    }

    return (
        <div className="form_wrapper">
            <h3>Create a new rent</h3>
            <div className="form_container">
                <div className="forms">
                    <form className="title_form">
                        <label htmlFor='title'>Title*</label>
                        <input className={isTitlevalid==false ? 'invalid' : '' } id='title' type='text' min='0' max='99' placeholder="name" onChange={titleHandler} value={newInputs.name}></input>
                    </form>
                    <form className="rooms_form">
                        <label htmlFor='rooms'>Rooms*</label>
                        <input className={isRoomsvalid==false ? 'invalid' : '' } id='rooms' type='number' min='1' max='99999' step='1' placeholder='1' onChange={roomsHandler} value={newInputs.rooms}></input>
                    </form>
                    <form className="price_form">
                        <label htmlFor='rooms'>Price*</label>
                        <input className={isPricevalid==false ? 'invalid' : '' } id='rooms' type='number' min='1' step='1' placeholder='50' onChange={priceHandler} value={newInputs.price}></input>
                    </form>
                    <form className="descr_form">
                        <label htmlFor='rooms'>Description</label>
                        <input id='rooms' type='text' min='0' max='999' placeholder="Flat in the city center" onChange={descrHandler} value={newInputs.descr}></input>
                    </form>
                </div>
                <button type="sumbit" onClick={submitHalndler}>Add</button>
            </div>
        </div>
    )
}

export default Form