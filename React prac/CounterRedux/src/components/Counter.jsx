import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/slices/CounterSlice";
import { decrement } from "../redux/slices/CounterSlice";

export default function Counter(){
    const count = useSelector(
        (state) => state.counter.value
    )

    const dispatch = useDispatch();
    return (
        <div className="flex flex-row justify-center items-center w-full h-screen mx-auto gap-x-3 text-5xl">
            <button onClick={()=>dispatch(decrement())}>-</button>
            <div>{count}</div>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}