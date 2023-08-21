import React,{useState} from 'react';
import ItemDate from './ItemDate';
import Card from './card';
import './Item.css';

function Item(props){
    const [title, setTitle] = useState(props.title);

    function clickHandler(){
        console.log("heeloo");
        setTitle("Popcorn");
    }
    
    return(
    <Card className = 'product-item'>
        <ItemDate date={props.date} />
        <div className='product-item_desc'>
            <h2>{title}</h2>
        </div>
        <button onClick={clickHandler} className='btn'>Add to cart</button>
    </Card>
    );
}

export default Item;