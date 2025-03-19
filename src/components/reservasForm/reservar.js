import ReservationForm from "./reservarForm1";

export const Reservar = ({ idioma, pagina, title_color, highVolume }) => {
  const reservaid = (idioma === 'es') ? 'reservar' : 'booking';
  const mensaje = (idioma === 'es') 
    ? 'Debido al alto volumen de gente esperado, no se admiten más reservas. Los invitamos a ir al restaurante a esperar su mesa.'
    : 'Due to the high expected volume of people, no more reservations are accepted. We invite you to go to the restaurant and wait for your table.';

  return (
    <div className="bg-black text-black w-full min-w-[300px] lg:min-w-full flex justify-center items-center">
      <div className="m-5 flex flex-col justify-center items-center space-y-4">
        <h1 className={`text-4xl font-bold ${title_color}`} id={reservaid}>
          {idioma === 'es' ? 'Reserva tu Mesa' : 'Book a Table'}
        </h1>
        <div className="flex justify-center items-center">
          {highVolume==='true' ? (
            <p className="text-white text-center">{mensaje}</p>
          ) : (
            <ReservationForm idioma={idioma} pagina={pagina} />
          )}
        </div>
      </div>
    </div>
  );
};
