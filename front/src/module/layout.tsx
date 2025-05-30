'use client';
import { useLayout } from '@/hooks/ruta';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
interface Props {
  children: React.ReactNode;
}
export default function layout({children}: Props) {
  const pathname = usePathname();
    const { title, routes } = useLayout(pathname);
  return (
   <main className="">
    <div className=" flex gap-6 items-center justify-center bg-amber-50 rounded-b-full   px-50 ">
    <img src="https://img.freepik.com/vector-gratis/diseno-plantilla-logotipo-tienda-papeleria_23-2149881289.jpg?semt=ais_hybrid&w=740"
        alt="logo" width={150} height={150}  /> 
    <div className='flex flex-col items-center'> <nav >
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-green-700"
                        : "text-gray-950"
                    } font-semibold capitalize
                     text-lg`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav> </div>    
    </div>
    {children}
  </main>
    
    );
}
