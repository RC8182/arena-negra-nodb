import React from 'react'
import '../globals.css';
import GoogleCalendar from './calendar';


export default function Page({params}) {
    const idioma= params.lang;
  return (
    <div className='bg-gray-900 h-full min-h-screen'>
      <div className='p-5 pt-10 justify-center text-center text-white'>
      <h2 className='mb-5 text-4xl text-metal'>Agenda grupo DieDrei</h2>
      <GoogleCalendar/>
      <h3 className='mt-5 text-2xl text-metal'>* Selecionar el día para ver las reservas</h3>
      </div>      
    </div>
  )
}
