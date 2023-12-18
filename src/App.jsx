import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import HomePage from '../src/pages/HomePage';
import MenuPage from '../src/pages/MenuPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
