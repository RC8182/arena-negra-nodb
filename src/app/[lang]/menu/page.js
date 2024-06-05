import { Acordion } from '@/components/menu/acordion';
import React from 'react'
import { bebidas } from './dbBebidas';
import { paellas } from './dbPaellas';
import { entrantes } from './dbEntrantes';
import { pescados } from './dbPescados';
import { carnes } from './dbCarnes';
import { postres } from './dbPostres';
import { Logo } from '@/components/logo';
import { pizzas } from './dbPizzas';

export default function Page({params}) {
    const idioma= params.lang;
  return (
    <div>
        <div className='bg-black flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-center'>Menu</h1>
        <Logo width={'150px'}/>
        </div>
        <Acordion idioma={idioma} db={bebidas}/>
        <Acordion idioma={idioma} db={entrantes}/>
        <Acordion idioma={idioma} db={paellas}/>
        <Acordion idioma={idioma} db={pescados}/>
        <Acordion idioma={idioma} db={carnes}/>
        <Acordion idioma={idioma} db={pizzas}/>
        <Acordion idioma={idioma} db={postres}/>
    </div>
  )
}
