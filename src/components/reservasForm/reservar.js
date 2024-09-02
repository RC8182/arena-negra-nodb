import ReservationForm from "./reservarForm";

export const Reservar = ({ idioma }) => {
  const reservaid= (idioma==='es')?'reservar':'booking';
  return (
    <div className=" bg-black text-black w-full min-w-[300px] lg:min-w-full flex justify-center items-center">
      <div className="m-5 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-bold text-metal" id={reservaid}>
          {idioma === 'es' ? 'Reserva tu Mesa' : 'Book a Table'}
        </h1>
        <div className="flex justify-center items-center">
          <ReservationForm idioma={idioma} pagina={'Arena Negra'} />
        </div>
      </div>
    </div>
  );
};
