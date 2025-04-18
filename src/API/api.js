export const fetchAPI = (date) => {
  const hours = [];
  const random = seedRandom(date.getDate());

  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      hours.push(`${i}:00`);
    }
    if (random() < 0.5) {
      hours.push(`${i}:30`);
    }
  }
    return hours;
  };
  
  export const submitAPI = (formData) => {
    // Simula envío exitoso de la reserva
    console.log("Reserva enviada:", formData);
    return true;
  };

  function seedRandom(seed) {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
  
    return function () {
      return (s = (s * a) % m) / m;
    };
  }