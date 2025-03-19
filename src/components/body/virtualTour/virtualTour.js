import PanoramaViewer from "./panoramaView";

export default async function VirtualTour({idioma, text_color}) {

  const titulo =( idioma=='es') ? 'Tour Virtual' : 'Virtual Tour';

  return (
    <div className="bg-black text-white w-full p-5 lg:min-w-[100vw]">
      <div className="mt-5">
        <div className="m-4 flex flex-col items-center flex-wrap" id="galeria">
          <h1 className={`p-2 text-4xl font-bold ${text_color}`}>{titulo}</h1>        
          <PanoramaViewer idioma={idioma} firstScene={'arena'} />
        </div>
      </div>
    </div>
  )
}
