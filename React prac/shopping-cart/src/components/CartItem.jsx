import {FcDeleteDatabase} from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removerd from cart");
  }

  return (
    <div>
      <div><img src={item.image} alt="item-img"></img></div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div><p>{item.price}</p></div>
        <div><FcDeleteDatabase onClick={removeFromCart}></FcDeleteDatabase></div>
      </div>

    </div>
  );
};

export default CartItem;