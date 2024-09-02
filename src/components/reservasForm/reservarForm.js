'use client';
import React, { useState, useEffect } from 'react';

const ReservationForm = ({ idioma, pagina }) => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  useEffect(() => {
    setIsFormValid(name !== '' && people !== '' && date !== '' && time !== '');
  }, [name, people, date, time]);

  const handleReservation = () => {
    if (!isFormValid) return;

    const formattedDate = new Date(date).toLocaleDateString(idioma === 'es' ? 'es-ES' : 'en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString(idioma === 'es' ? 'es-ES' : 'en-US', {
      hour: '2-digit', minute: '2-digit'
    });

    const mensajeES = `Hola, me gustaría reservar una mesa en ${pagina} el ${formattedDate} a las ${formattedTime}. Somos ${people} personas y mi nombre es ${name}.`;
    const mensajeEN = `Hello, I would like to book a table at ${pagina} on ${formattedDate} at ${formattedTime}. We are ${people} people and my name is ${name}.`;

    const url = (idioma === 'es')
      ? `https://api.whatsapp.com/send/?phone=34648416513&text=${encodeURIComponent(mensajeES)}`
      : `https://api.whatsapp.com/send/?phone=34648416513&text=${encodeURIComponent(mensajeEN)}`;

    window.open(url, '_blank');
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
