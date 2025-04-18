import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm Component', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renderiza correctamente etiquetas y campos del formulario', () => {
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeInTheDocument();
  });

  test('muestra correctamente las opciones de horarios disponibles', () => {
    mockTimes.forEach((time) => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  test('llama a dispatch cuando cambia la fecha', () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2025-04-20' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE',
      payload: '2025-04-20',
    });
  });

  test('envía el formulario con datos correctos', () => {
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-04-20' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-04-20',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });
});
