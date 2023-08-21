

function NewProdForm(){
    return(
        <form>
            <div className="new-product-title">
                <label>Title</label>
                <input type="text"></input>
            </div>
            <div className="new-product-date">
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2023-12-12'></input>
            </div>
            <button className="new-product-btn" type="submit">Add product</button>
        </form>
    )
}

export default NewProdForm;