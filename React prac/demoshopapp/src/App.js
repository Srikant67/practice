import React from 'react';
import Products from './components/products'
import NewProduct from './components/newProd'
function App() {
  const response = [
    {
      title:"Nirma",
      amount:130,
      id:"p1",
      date:new Date(2001, 5, 5)
    },
    {
      title:"Surf Excel",
      amount:150,
      id:"p2",
      date:new Date(2005, 12, 3)
    },
    {
      title:"555",
      amount:80,
      id:"p3",
      date:new Date(1994, 10, 24)
    },
    {
      title:"Ariel",
      amount:170,
      id:"p4",
      date:new Date(2007, 7, 12)
    }
  ];

  return (
    <div className='appp'>
        <NewProduct></NewProduct>
        <Products items={response}/>
    </div>
  );
}

export default App;