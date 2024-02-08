'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCard({type}) {
  const [images, setImages] = useState([]);
  const folder=type;

  useEffect(() => {
    // Función para obtener las imágenes de la API
    const fetchImages = async () => {
      const res = await fetch('/api/get');
      const data = await res.json();
      setImages(data);
    };

    // Llamar a la función cuando el componente se monta
    fetchImages();
  }, []);

  // Funciones para manejar las acciones de editar y eliminar
  const handleEdit = (image) => {
    // Aquí puedes agregar la lógica para editar la imagen
    console.log('Editar imagen:', image);
  };

  const handleDelete = async (id) => {

    try {
      const res = await fetch(`/api/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
    
      if (res.ok) {
        window.location.reload();
        console.log('Imagen eliminada con éxito');
      } else {
        console.error('Error al eliminar la imagen');
      }
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
    
  };

// Filtrar las imágenes primero
const filteredImages = images.filter(image => image.url.includes(`/uploads/${folder}/`));

return (
  <div className="flex m-5 text-white ">
    <div className="bg-zinc-950 p-5 rounded-lg border border-white">
      
      {filteredImages.map((image, index) => (
        <div key={index} className="m-5 flex flex-col items-center">
          <h1 className="text-4xl text-center my-4">{image.title_file}</h1>
          <Image
            src={image.url}
            alt={image.title_file}
            className="w-64 h-64 object-contain mx-auto"
            width={256}
            height={256}
            priority={true}
          />
          {(type === 'especialidades')
          ?<div>{image.comment}</div>
          :null}
          <p>{image.id}</p>
          <div className="flex">
            <button onClick={() => handleEdit(image)}>🖉 Editar</button>
            <button onClick={() => handleDelete(image.id)}>🗑️ Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
