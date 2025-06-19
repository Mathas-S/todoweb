import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Addpage from './pages/addpage/addpage';
import Historypage from './pages/historypage/historypage';
import Profilepage from './pages/profilepage/profile'
import SignInPage from './pages/signinpage/signinpage'
import Registerpage from './pages/registerpage/registerpage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<SignInPage/>}/>
       <Route path='/Home' element={<Homepage/>}/>
      <Route path='/addtodo' element={<Addpage/>}/>
      <Route path='/history' element={<Historypage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
    </Routes>
  );
  
}

export default App
