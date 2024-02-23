import React from 'react';
import { datos } from './db';
import ReviewCard from '../reviews/reviewCard';

export const Reviews = ({idioma}) => {
    const datosReviews =( idioma==='es') ? datos?.es: datos?.en;
    const titulo= datosReviews.reviews.titulo
    const sub1= datosReviews.reviews.subtitulo
    const Sites= datosReviews.reviews.sites;

    return (
        <div className="bg-black text-white w-full min-w-[300px] lg:min-w-[100vw]">
            <div className="m-5">
                <div className="flex flex-col items-center space-y-0 ">
                    <h1 className="text-3xl font-bold">{titulo}</h1>
                    <p className="text-base">{sub1}</p>
                </div>
                <div className="m-3 flex flex-col lg:flex-row space-y-10 md:space-y-4 lg:space-y-0 lg:space-x-12 items-center justify-center">
                    {Sites.map((e,i) => (
                        <div key={i}>
                            <ReviewCard logo={e.logo} alt={e.alt} name={e.name} activity={e.activity} points={e.points} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
