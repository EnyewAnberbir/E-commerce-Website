import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';



export default function App() {
  return<BrowserRouter>  <Header /> 
  <Routes>
   
     <Route path="/profile" element={<Profile />}/>
     <Route path="/" element={<Home />}/>
     <Route path="/sign-in" element={<SignIn />}/>
     <Route path="/sign-up" element={<SignUp />}/>
     <Route path="/about" element={<About />}/>
     

  </Routes>
  </BrowserRouter> 
 
}
