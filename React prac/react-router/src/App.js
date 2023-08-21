import { Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader'
import HomePage from './components/Home'
import Support from './components/support'
import About from './components/About'
import Labs from './components/Labs'
import Error from './components/error'

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/Labs">Labs</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<HomePage></HomePage>}/>
          <Route path="/support" element={<Support></Support>}/>
          <Route path="/About" element={<About></About>}/>
          <Route path="/Labs" element={<Labs></Labs>}/>
        </Route>
        <Route path="*" element={<Error></Error>}/>
      </Routes>
    </div>
  );
}

export default App;