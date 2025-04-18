import './App.css';
import BookingPage from './pages/BookingPage';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
