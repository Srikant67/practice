import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import Toast from 'react-hot-toast';
const NavBar = (props) =>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] pt-4 pb-0 mx-auto">
            <Link to="/"><img src={logo} alt="" width={160} height={32} loading="lazy"></img></Link>
            <nav>
                <ul className="flex gap-x-6 text-slate-300">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login"><button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>Login</button></Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup"><button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>signup</button></Link>
                }
                { isLoggedIn &&
                    <Link to="/login" ><button  className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600' onClick={() => {
                        setIsLoggedIn(false);
                        Toast.success("Logged out");
                    }}>log out</button></Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard"><button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>dashboard</button></Link>
                }
            </div>
        </div>
    )
}

export default NavBar;