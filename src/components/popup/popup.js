'use client';

import { useState } from "react";
import Image from "next/image";

const MenuPopup = ({ imageUrl, altText = "Menu" }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90%", // Máximo ancho relativo al viewport
          height: "90%", // Máximo alto relativo al viewport
          overflow: "hidden",
        }}
      >
        <Image
          src={imageUrl} // Ruta de la imagen
          alt={altText}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
          style={{
            objectFit: "contain", // Asegura que la imagen se muestre completa
            borderRadius: "10px",
          }}
          priority={true}
        />
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default MenuPopup;
