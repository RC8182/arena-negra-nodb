'use client';
import React, { useState, useEffect } from 'react';

const ReservationForm = ({ idioma, pagina }) => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Horario configurable de apertura y cierre
  const openingTime = "12:45";
  const closingTime = "22:00";

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  useEffect(() => {
    setIsFormValid(name !== '' && people !== '' && date !== '' && time !== '');
  }, [name, people, date, time]);

  const isWithinOperatingHours = (time) => {
    return time >= openingTime && time <= closingTime;
  };

  const handleReservation = async () => {
    if (!isFormValid) return;

    if (!isWithinOperatingHours(time)) {
      alert(idioma === 'es' ? 'La cocina está cerrada, no se pueden realizar reservas en este horario.' : 'The kitchen is closed; reservations cannot be made at this time.');
      return;
    }

    // Usar formato ISO 8601 en la fecha y hora antes de enviarlas
    const startDateTime = new Date(`${date}T${time}:00`).toISOString(); // Convertir a ISO 8601
    const endDateTime = new Date(new Date(startDateTime).getTime() + 1.5 * 60 * 60 * 1000).toISOString(); // Añadir 1.5 horas

    const mensajeES = `Hola, me gustaría reservar una mesa en ${pagina} el ${new Date(startDateTime).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} a las ${new Date(startDateTime).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}. Somos ${people} personas y mi nombre es ${name}.`;
    const mensajeEN = `Hello, I would like to book a table at ${pagina} on ${new Date(startDateTime).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date(startDateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}. We are ${people} people and my name is ${name}.`;

    const whatsappUrl = idioma === 'es'
      ? `https://api.whatsapp.com/send/?phone=34648416513&text=${encodeURIComponent(mensajeES)}`
      : `https://api.whatsapp.com/send/?phone=34648416513&text=${encodeURIComponent(mensajeEN)}`;

    // Llamar al backend para crear la reserva en Google Calendar
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          people,
          date: startDateTime, // Enviar en formato ISO 8601
          time: endDateTime, // Enviar en formato ISO 8601
          pagina
        }),
      });

      if (response.ok) {
        console.log('Reserva creada en Google Calendar');
      } else {
        console.error('Error al crear la reserva en Google Calendar');
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }

    // Abrir WhatsApp para el cliente
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border border-metal rounded-lg shadow-md max-w-[300px]">
      <input
        type="text"
        placeholder={idioma === 'es' ? 'Nombre' : 'Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder={idioma === 'es' ? 'Cantidad de personas' : 'Number of people'}
        value={people}
        onChange={(e) => setPeople(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {!isFormValid && (
        <p className="text-red-500 mb-4">
          {idioma === 'es' ? 'Completa todos los campos para reservar tu mesa' : 'Complete all fields to book your table'}
        </p>
      )}
      <button
        onClick={handleReservation}
        className={`text-white border border-metal bg-black p-2 rounded-md hover:border-2 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!isFormValid}
      >
        {idioma === 'es' ? 'Reservar' : 'Book a Table'}
      </button>
    </div>
  );
};

export default ReservationForm;
