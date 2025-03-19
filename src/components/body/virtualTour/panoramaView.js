'use client';

import React, { useEffect, useState } from 'react';

const PanoramaViewer = ({ idioma, firstScene }) => {
  const [isViewerInitialized, setIsViewerInitialized] = useState(false);

  // Traducciones
  const translations = {
    es: {
      paseo: 'Paseo Los Abrigos / La Niña',
      nina: 'La Niña',
      muelle: 'Muelle Los Abrigos',
      paella: 'La Paella',
      arena: 'Arena Negra',
      canita: 'La Cañita',
      park: 'Centro Pueblo',
    },
    en: {
      paseo: 'Los Abrigos Walk /  La Niña',
      nina: 'La Niña',
      muelle: 'Los Abrigos Pier',
      paella: 'La Paella',
      arena: 'Arena Negra',
      canita: 'La Cañita',
      park: 'Town Center',
    },
  };

  const text = translations[idioma] || translations.es;
  
  const createScene = (panorama, hotSpots) => ({
    hfov: window.innerWidth < 640 ? 5 : 180,
    minPitch: -30,
    maxPitch: 30,
    pitch: -3,
    yaw: 0,
    type: 'equirectangular',
    panorama,
    hotSpots,
  });

  const createHotspot = (yaw, sceneId, text) => ({
    pitch: 2.1,
    yaw,
    type: 'scene',
    sceneId,
    text,
    cssClass: 'custom-hotspot',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.pannellum) {
      window.pannellum.viewer('panorama-container', {
        default: {
          hfov: window.innerWidth < 640 ? 5 : 180,
          firstScene,
          sceneFadeDuration: 1000,
          autoLoad: true,
          compass: true,
        },
        scenes: {
          muelle: createScene('/uploads/muelle.jpg', [
            createHotspot( -30, 'nina', text.nina),
          ]),
          nina: createScene('/uploads/nina.jpg', [
            createHotspot( 30, 'nina1', text.nina),
            createHotspot( 100, 'muelle', text.muelle),
            createHotspot( -70, 'paseo', text.paseo),
          ]),
          nina1: createScene('/uploads/nina1.jpg', [
            createHotspot( 70, 'nina', `${text.nina}`),
          ]),
          paseo: createScene('/uploads/paseo.jpg', [
            createHotspot( 90, 'nina', text.nina),
            createHotspot( -90, 'paella', text.paella),
          ]),
          paella: createScene('/uploads/paella.jpg', [
            createHotspot( -15, 'paella1', text.paella),
            createHotspot( -60, 'arena', text.arena),
            createHotspot( 80, 'paseo', text.paseo),
          ]),
          paella1: createScene('/uploads/paella1.jpg', [
            createHotspot( 37.1, 'paella', `${text.paella}`),
          ]),
          arena: createScene('/uploads/arena.jpg', [
            createHotspot( 0, 'arena1', `${text.arena}`),
            createHotspot( -80, 'canita', text.canita),
            createHotspot( 90, 'paella', text.paella),
          ]),
          arena1: createScene('/uploads/arena1.jpg', [
            createHotspot( 37.1, 'arena', `${text.arena}`),
          ]),
          canita: createScene('/uploads/canita.jpg', [
            createHotspot( -90, 'park', text.park),
            createHotspot( 90, 'arena', text.arena),
          ]),
          park: createScene('/uploads/park.jpg', [
            createHotspot( 90, 'canita', text.canita),
          ]),
        },
      });

      setIsViewerInitialized(true);
    }
  }, [idioma, firstScene]);

  useEffect(() => {
    if (isViewerInitialized) {
      const existingRenderContainer = document.querySelector('.pnlm-render-container');
      if (existingRenderContainer) {
        existingRenderContainer.remove();
      }
    }
  }, [isViewerInitialized]);


  return <div id="panorama-container" style={{ width: '100%', height: '450px' }} />;
};

export default PanoramaViewer;
