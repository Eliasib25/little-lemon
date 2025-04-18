import './App.css';
import BookingPage from './pages/BookingPage';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
