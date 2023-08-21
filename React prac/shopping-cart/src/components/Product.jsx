import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";

const Product = ({prod}) => {
  const {cart} = useSelector((state)=> state);
  console.log(cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(prod));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(prod.id));
    toast.error("Item removerd from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div><p className="text-gray-700 font-semibold text-lg text-left trunc w-40 mt-1">{prod.title}</p></div>
      <div><p className="w-40 text-gray-400 font-normal text-[10px] text-left">{prod.description.split(" ").slice(0,10).join(" ")+"..."}</p></div>
      <div className="h-[180px]"><img className="h-full w-full" src={prod.image} alt="Product-img"></img></div>
      <div className="flex justify-between gap-12">
        <div><p className="text-green-600 font-semibold">${prod.price}</p></div>
        {
            cart.some((p) => p.id === prod.id) ? 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
             hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>) : 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
             hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add to cart</button>)
        }
      </div>
    </div>
  );
};

export default Product;
