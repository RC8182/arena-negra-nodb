export const ReservationPopup = ({ onClose, idioma, reservations, onNewReservation }) => (
  <div className="popup-container">
    <div className="popup-content">
      <h2>{idioma === 'es' ? '¡Gracias por su reserva!' : 'Thank you for your reservation!'}</h2>
      
      {/* Mostrar todas las reservas */}
      <div className="reservations-list">
        <h3>{idioma === 'es' ? 'Reservas realizadas:' : 'Reservations made:'}</h3>
        <ul>
          {reservations.length > 0 ? (
            reservations.map((reservation, index) => (
              <li key={index}>
                {idioma === 'es'
                  ? `Nombre: ${reservation.name}, Personas: ${reservation.people}, Fecha: ${reservation.date}, Hora: ${reservation.time}`
                  : `Name: ${reservation.name}, People: ${reservation.people}, Date: ${reservation.date}, Time: ${reservation.time}`}
              </li>
            ))
          ) : (
            <li>
              {idioma === 'es' ? 'No hay reservas en este momento.' : 'No reservations at this time.'}
            </li>
          )}
        </ul>
      </div>
      
      <p>
        {idioma === 'es'
          ? '¿Desea anular o modificar su reserva?'
          : 'Do you wish to cancel or modify your reservation?'}
      </p>
      <button
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=34648416513', '_blank')}
        className="whatsapp-button text-red-500 hover:text-red-700"
      >
        {idioma === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
      </button>

      <p className="mt-4">
        {idioma === 'es' ? '¿Quiere hacer otra reserva?' : 'Do you want to make another reservation?'}
      </p>
      <button
        onClick={() => {
          onNewReservation(); // Llama a la función para restablecer el formulario
          onClose();          // Cierra el popup
        }}
        className="new-reservation-button text-red-500 hover:text-red-700 mt-2"
      >
        {idioma === 'es' ? 'Hacer otra reserva' : 'Make another reservation'}
      </button>
    </div>
  </div>
);
