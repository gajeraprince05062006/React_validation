import Home from './Home'
import About from './About'
import Contact from './Contact';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App(){
  return (<div>
    <h1>Welcome.</h1>
    <Router>
      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>|
      <Routes>
        <Route Path='/' element={<Home/>}/>
        <Route Path='/home' element={<Home/>}/>
        <Route Path='/about' element={<About/>}/>
        <Route Path='/contact' element={<Contact/>}/>
        <Route Path='/cake/ahmedabad' element={<h1>Ahmedabad Cake</h1>}/>
        <Route Path='/cake/surat' element={<h1>Surat Cake</h1>}/>
        <Route Path='*' element={<h1>404 File Not Found</h1>}/>
      </Routes>
    </Router>
  </div>); 
}

export default  App