
import './App.css';
import './style.css';
import './style1.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Login from './components/Login';
import { Aboutus } from './components/Aboutus';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import Register from './components/Register';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<HomePage></HomePage>} ></Route>
      <Route path='/Aboutus' element={<Aboutus></Aboutus>} ></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/Register' element={<Register></Register>}></Route>
       <Route path='/Contact' element={<Contact></Contact>}></Route>
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
