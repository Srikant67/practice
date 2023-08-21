import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [prods, setProds] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      setProds(data);
    }
    catch(error){
      console.log("errorerror", error);
      setProds([]);
    }
    setLoading(false);
  }

  useEffect(
    () => {
      fetchProductData();  
    }    
  ,[])

  return (
    <div>
      {
        loading ? <Spinner></Spinner> : 
        prods.length > 0 ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
              prods.map(
                (prod) => (
                <Product key={prod.id} prod={prod}></Product>
                )
              )
            }
          </div>
        ) : 
        <div className="flex justify-center items-center"><p>no data found</p></div>
      }
    </div>
  );
};

export default Home;
