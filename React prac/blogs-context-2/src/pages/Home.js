import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pageination from "../components/Pagination";

export default function Home(){
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <Pageination></Pageination>
        </div>
    )
}