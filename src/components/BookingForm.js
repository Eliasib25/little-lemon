import React, { useState } from 'react';
import '../styles/bookingform.css';
// import Modal from './Modal';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  // const [showModal, setShowModal] = useState(false);

  const cleanFlieds = () => {
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
  }

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < new Date().toISOString().split('T')[0]) {
        alert("Please select a future date.");
    } else {
        setDate(selectedDate);
        dispatch({ type: "UPDATE", payload: selectedDate });
    }
    
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData= { date, time, guests, occasion };
  //   const response = submitAPI(formData);
  //   if (response === true) {
  //       setShowModal(true);
  //       cleanFlieds();
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {date, time, guests, occasion};
    const response = submitForm(formData);
    if (response) cleanFlieds();
  }

  return (
    <di>
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="5"
        value={guests}
        onChange={(e) => {
            if (e.target.value < 1 || e.target.value > 5) {
                alert("Number of guests must be between 1 and 5.");
            } else {
                setGuests(e.target.value);
            }
        }}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />

      {/* {showModal && (
        <Modal 
            title="Reservation Confirmed"
            message= "Your reservation has been successfully submitted."
            onClose={() => setShowModal(false)}
        />
    )} */}
    </form>
    
    </di>
  );
};

export default BookingForm;
