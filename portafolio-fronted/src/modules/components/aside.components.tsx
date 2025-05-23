import React from 'react';
import Image from 'next/image';
import Profile from '../profile/components/profile.components';

export default function Aside() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 text-center">Intercambio de Libros Usados</h1>
        <span className="mt-2 px-3 py-1 bg-emerald-200 text-neutral-950 text-xs font-medium rounded-full">
          Encuentra tu libro favorito aqui 
        </span>
      </div>

      <div className="border-t border-gray-200 my-4">
      <Profile/>

      </div>


      <div className="flex-grow flex flex-col justify-center">

      </div>

      <div className="mt-1 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </aside>
  );
}