import React from 'react';
import Image from 'next/image';
import award1 from "/public/arena/awards/guru.png";
import award2 from "/public/arena/awards/trip.png";


export const Awards = ({ idioma }) => {
    const title = (idioma === 'es') ? "Reconocimientos" : "Awards";

    return (
        <div className='flex justify-center flex-col'>
            <div>
                {title}
            </div>
            <div className='flex'>
                <Image src={award1.src} alt="Premio 1" width={100} height={100} style={{ margin: '10px' }} />
                <Image src={award2.src} alt="Premio 2" width={100} height={100} style={{ margin: '10px' }} />
            </div>
        </div>
    );
}
