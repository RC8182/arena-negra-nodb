'use client';
import React, { useState, useEffect } from 'react';
import { ReservationPopup } from './reservationPopup';

const countries = {
  es: [
    { code: 'ES', name: 'España', dialCode: '+34' },
    { code: 'UK', name: 'Reino Unido', dialCode: '+44' },
    { code: 'FR', name: 'Francia', dialCode: '+33' },
    { code: 'IT', name: 'Italia', dialCode: '+39' },
    { code: 'DE', name: 'Alemania', dialCode: '+49' },
    { code: 'PT', name: 'Portugal', dialCode: '+351' },
    { code: 'NL', name: 'Países Bajos', dialCode: '+31' },
    { code: 'US', name: 'Estados Unidos', dialCode: '+1' },
    { code: 'OT', name: 'Otro', dialCode: '' },
  ],
  en: [
    { code: 'ES', name: 'Spain', dialCode: '+34' },
    { code: 'UK', name: 'United Kingdom', dialCode: '+44' },
    { code: 'FR', name: 'France', dialCode: '+33' },
    { code: 'IT', name: 'Italy', dialCode: '+39' },
    { code: 'DE', name: 'Germany', dialCode: '+49' },
    { code: 'PT', name: 'Portugal', dialCode: '+351' },
    { code: 'NL', name: 'Netherlands', dialCode: '+31' },
    { code: 'US', name: 'United States', dialCode: '+1' },
    { code: 'OT', name: 'Other', dialCode: '' },
  ],
};

const ReservationForm = ({ idioma, pagina }) => {
  // Estados para gestionar los valores del formulario y la visibilidad del popup
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [country, setCountry] = useState('US');
  const [countryDial, setCountryDial] = useState('+34');
  const [phone, setPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [reservations, setReservations] = useState([]); // Nuevo estado para almacenar las reservas
  const [reservationBlocked, setReservationBlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const openingTime = "12:00";
  const closingTime = "21:00";

  // Configuración inicial del formulario y detección del país del usuario
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
    const userCountryCode = navigator.language.slice(-2).toUpperCase();
    const detectedCountry = countries[idioma].find(c => c.code === userCountryCode);
    if (detectedCountry) {
      setCountry(detectedCountry.code);
      setCountryDial(detectedCountry.dialCode);
    }
  }, [idioma]);

  // Validación del formulario en cada cambio de los campos
  useEffect(() => {
    setIsFormValid(name !== '' && people !== '' && date !== '' && time !== '' && phone !== '' && !reservationBlocked);
  }, [name, people, date, time, phone, reservationBlocked]);

  const isWithinOperatingHours = (time) => time >= openingTime && time <= closingTime;

  // Función para establecer la cookie
  const setCookie = (name, value, expirationDate) => {
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  // Función para obtener la cookie
  const getCookie = (name) => {
    const cookieString = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`));
    return cookieString ? JSON.parse(decodeURIComponent(cookieString.split('=')[1])) : null;
  };

// Función principal para manejar la reserva
const handleReservation = async () => {
  if (!isFormValid) return;

  // Validación del horario de operación
  if (!isWithinOperatingHours(time)) {
    alert(
      idioma === 'es'
        ? 'La cocina está cerrada, no se pueden realizar reservas en este horario.'
        : 'The kitchen is closed; reservations cannot be made at this time.'
    );
    return;
  }

  setLoading(true); // Activar el spinner de carga

  // Espera de 2 segundos antes de enviar la solicitud
  setTimeout(async () => {
    const startDateTime = new Date(`${date}T${time}:00`).toISOString();
    const endDateTime = new Date(new Date(startDateTime).getTime() + 1.5 * 60 * 60 * 1000).toISOString();

    try {
      // Envío de datos de la reserva al backend
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          people,
          date: startDateTime,
          time: endDateTime,
          pagina,
          dialCode: countryDial,
          phone,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        // Guardar la nueva reserva en el estado de reservas
        const newReservation = { name, people, date, time };
        const updatedReservations = [...reservations, newReservation];
        setReservations(updatedReservations);

        // Guardar los datos de reserva en una cookie con todas las reservas actualizadas
        const expirationDate = new Date(new Date(startDateTime).getTime() + 1 * 60 * 60 * 1000);
        setCookie('reservations', updatedReservations, expirationDate);

        setShowPopup(true); // Mostrar el popup
      } else {
        console.error('Error al crear la reserva en Google Calendar');
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    } finally {
      setLoading(false); // Desactivar el spinner de carga
    }
  }, 2000); // Espera de 2 segundos antes de procesar la reserva
};

// useEffect para inicializar las reservas desde la cookie al cargar la página
useEffect(() => {
  const savedReservations = getCookie('reservations');
  if (savedReservations) {
    setReservations(savedReservations);
    setShowPopup(true); // Mostrar el popup si hay reservas guardadas
  }
}, []);
  
  // Restablecer los valores del formulario
  const resetForm = () => {
    setName('');
    setPeople('');
    setDate(new Date().toISOString().split('T')[0]);
    setTime('');
    setPhone('');
    setIsFormValid(false);
  };

  // Obtener el código de marcación según el país seleccionado
  const getDialCode = () => {
    const selectedCountry = countries[idioma].find((c) => c.code === country);
    return selectedCountry ? selectedCountry.dialCode : '';
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 border border-metal rounded-lg shadow-md max-w-[300px]">
      {/* Mostrar el spinner y mensaje de carga si `loading` es true */}
      {loading ? (
        <div className="loading-container text-center">
          <p>{idioma === 'es' ? 'Estamos registrando su reserva...' : 'We are logging your reservation...'}</p>
          <div className="spinner mt-2 border-4 border-gray-300 border-t-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Si no se ha hecho ninguna reserva, mostrar el formulario */}
          {!showPopup && (
            <>
              {/* Campos de entrada de nombre, número de personas, fecha y hora */}
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
  
              {/* Selección de país y teléfono */}
              <div className="mb-4 flex items-center space-x-2">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="p-2 border w-2/4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countries[idioma].map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder={idioma === 'es' ? '+34 648416513' : '+44 648416513'}
                  value={country === 'OT' ? phone : `${getDialCode()} ${phone}`}
                  onChange={(e) => setPhone(e.target.value.replace(getDialCode(), '').trim())}
                  className="p-2 w-3/4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              {/* Mensaje de validación */}
              {!isFormValid && !reservationBlocked && (
                <p className="text-red-500 mb-4">
                  {idioma === 'es' ? 'Completa todos los campos para reservar tu mesa' : 'Complete all fields to book your table'}
                </p>
              )}
  
              {/* Botón de reserva */}
              <button
                onClick={handleReservation}
                className={`text-white border border-metal bg-black p-2 rounded-md hover:border-2 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isFormValid}
              >
                {idioma === 'es' ? 'Reservar' : 'Book a Table'}
              </button>
            </>
          )}
  
          {/* Popup de confirmación de reserva */}
          {showPopup && (
            <ReservationPopup
              onClose={() => setShowPopup(false)}
              idioma={idioma}
              reservations={reservations}  // Pasar todas las reservas al popup
              onNewReservation={resetForm}  // Pasar la función para restablecer el formulario
            />
          )}
        </>
      )}
    </div>
  );
  
};

export default ReservationForm;
