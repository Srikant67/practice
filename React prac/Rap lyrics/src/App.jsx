import "./App.css";
import Lyrics from "./components/Lyrics";
import data from "./data";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Random Sus Lyrics</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
        <Lyrics data={data}></Lyrics>
      </div>
    </div>
  );
}

export default App;
