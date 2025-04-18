import { initializeTimes, updateTimes } from './bookingUtils';
import { fetchAPI } from '../API/api';

jest.mock('../API/api');

describe('Booking Utils', () => {
  beforeEach(() => {
    // Limpiamos cualquier simulación previa
    jest.clearAllMocks();
  });

  test('initializeTimes debe devolver horarios desde fetchAPI con la fecha actual', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); // simulamos retorno

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date)); // llamada con una fecha
    expect(result).toEqual(mockTimes); // se devuelve correctamente
  });

  test('updateTimes debe llamar a fetchAPI con la fecha proporcionada', () => {
    const mockTimes = ['20:00', '21:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const mockDate = '2025-04-20';
    const result = updateTimes([], { type: 'UPDATE', payload: mockDate });

    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes debe devolver el estado anterior si el tipo no es UPDATE', () => {
    const prevState = ['17:00', '18:00'];
    const result = updateTimes(prevState, { type: 'OTHER' });

    expect(result).toBe(prevState);
  });
});
