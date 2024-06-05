'use client'
import React, { useState } from 'react';
import { ProductCard } from './productsCard';

export const Acordion = ({ idioma, db }) => {
    const lang = idioma === 'es' ? db.es : db.en;
    const title = lang.title;
    const productsList = lang.products;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center items-center">
            <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-2xl">
                <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-500 border border-b-2 border-black-200 dark:focus:ring-gray-800 ${isOpen ? 'bg-blue-100' : ''} gap-3`}
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded={isOpen}
                    aria-controls="accordion-collapse-body-1"
                    onClick={toggleAccordion}
                >
                        <span>{title}</span>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} shrink-0`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className={`border border-b-4 border-black-300 ${isOpen ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-20">
                        <table className="w-full">
                            <thead>
                                {/* Encabezado de la tabla, si es necesario */}
                            </thead>
                            <tbody>
                                {productsList && productsList.map((e, i) => (
                                    <tr key={i} >
                                        <td><ProductCard name={e.name} description={e.description} src={e.src} alt={e.alt} price={e.price}/></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
