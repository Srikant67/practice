import Random from "./components/Random"
import Tag from "./components/Tag"
import "./App.css";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-blue-300">
      <h1 className="bg-red-300 rounded-full w-3/12 text-center text-4xl mt-10 py-4 font-bold">Random GIFs</h1>
      <div className="w-full mb-[20px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}