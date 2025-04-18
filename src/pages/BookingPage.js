import React, { useReducer } from "react";
import Main from "../components/Main";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { fetchAPI } from "../API/api"; 

// Función que inicializa los horarios con la fecha actual
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer para actualizar los horarios cuando cambia la fecha
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
};

const BookingPage = () => {
  // Estado con useReducer para manejar horarios disponibles
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Main>
  );
};

export default BookingPage;
