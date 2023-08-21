import React from 'react';
import Item from './Item';
import Card from './card';

import './products.css';

function products(props){
    return (
        <Card className="main-card">
            <Item title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <Item title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <Item title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <Item title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        </Card>
    );
}

export default products;