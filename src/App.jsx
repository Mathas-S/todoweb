import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Addpage from './pages/addpage/addpage';
import Historypage from './pages/historypage/historypage';
import Profilepage from './pages/profilepage/profile'
import SignInPage from './pages/signinpage/signinpage'
import Registerpage from './pages/registerpage/registerpage'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  // เส้นทางที่ไม่ต้องแสดง Navbar และ Footer
  const hideLayoutPaths = ['/', '/register'];
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className='wrapper'>
      {!hideLayout && <Navbar />}

      <div className='main-content'>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/Home' element={<Homepage />} />
          <Route path='/addtodo' element={<Addpage />} />
          <Route path='/history' element={<Historypage />} />
          <Route path='/profile' element={<Profilepage />} />
          <Route path='/register' element={<Registerpage />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App
