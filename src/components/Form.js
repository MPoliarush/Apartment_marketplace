

const Form = (props)=>{


return (
    <div className="form_wrapper">
        <h3>Create a new rent</h3>
        <div className="form_container">
            <div className="forms">
                <form className="title_form">
                    <label htmlFor='title'>Title*</label>
                    <input id='title' type='text' min='1' max='99' placeholder="name"></input>
                </form>
                <form className="rooms_form">
                    <label htmlFor='rooms'>Rooms*</label>
                    <input id='rooms' type='number' min='1' max='99999' step='1' defaultValue='1' placeholder="1"></input>
                </form>
                <form className="price_form">
                    <label htmlFor='rooms'>Price*</label>
                    <input id='rooms' type='number' min='1' step='1' defaultValue='50'></input>
                </form>
                <form className="descr_form">
                    <label htmlFor='rooms'>Description</label>
                    <input id='rooms' type='text' min='0' max='999' placeholder="Flat in the city center"></input>
                </form>
            </div>
            <button type="sumbit">Add</button>
        </div>
    </div>
)
}

export default Form