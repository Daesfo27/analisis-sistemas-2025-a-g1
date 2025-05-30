'use client';
import Image from "next/image";
import Layout from '../module/layout';

export default function Home() {
  return (
   <Layout>
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-amber-50 gap-8 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Nuestra papeleria</h1>
        <p className="text-gray-700 text-lg">
          Esta <strong>Papeleria moderna</strong> esta dedicada para ingresar usuarios, productos y ventas</p>
        
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGNB8fdq4pu_54eDlAdIdUI28p-HCQ5vyaw&s"
        alt="tienda"
        className="rounded-xl"
        width={500}
        height={500}
      />
    </main>
   </Layout>
  );
}
