import Image from 'next/image';

export const Productos = ({img, alt, titulo, texto}) => {

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <Image
          src={img}
          alt={alt}
        />
        <div className="mt-6 space-y-3">
          <h2 className=" text-lg font-semibold text-metal">{titulo}</h2>
          <p className='text-black'>
            {texto}
          </p>
        </div>
      </div>
    </div>
  )
}
