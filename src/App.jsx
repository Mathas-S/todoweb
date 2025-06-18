import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Addpage from './pages/addpage/addpage';
import Historypage from './pages/historypage/historypage';
import Profilepage from './pages/profilepage/profile'
import Signinpage from './pages/signinpage/signinpage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Signinpage/>}/>
       <Route path='/Home' element={<Homepage/>}/>
      <Route path='/addtodo' element={<Addpage/>}/>
      <Route path='/history' element={<Historypage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
    </Routes>
  );
  
}

export default App
