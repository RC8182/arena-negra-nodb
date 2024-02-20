import Image from 'next/image';
import React from 'react';
import { FaUtensils } from 'react-icons/fa';
export default function ReviewCard({ logo, alt, name, activity, points }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg min-w-[250px] ">
      <div className="flex items-center">
        <Image src={logo} alt={alt} className="w-8 h-8 mr-2" />
        <span className="text-black text-lg">{name}</span>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex">
        {Array.from({ length: points }, (_, i) => (
            <div key={i} >
              <FaUtensils  color='blue' />
            </div>
          ))}
        </div>
        <span className="text-black text-sm ml-2">{points}</span>
      </div>
      <p className="text-black text-sm mt-2">Activity: {activity} reviews</p>
    </div>
  );
}
