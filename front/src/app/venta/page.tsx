'use client';
import React, { useEffect, useState } from 'react'
import Layout from '../../module/layout';
import { useUserStore } from '@/store/ventaStore';

export default function page() {
   const { setUser, getReservation, ventas } = useUserStore();
    
      const [formData, setFormData] = useState({
        userId: "",
        productId: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          await setUser(formData);
          alert("Venta creada con éxito");
        } catch (error) {
          alert("Error al crear la venta");
        }
      };
      useEffect(() => {
    getReservation();
  }, [getReservation]);
    return (
      <Layout>
        <main className="min-h-screen flex items-center justify-center ">
            <form
              onSubmit={handleSubmit}
              className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              <h2 className="text-3xl font-semibold text-gray-900">Registro</h2>
    
              <div>
                <label htmlFor="userId" className="block text-gray-700 mb-1">
                  Id de Usuario
                </label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                  className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="productId" className="block text-gray-700 mb-1">
                  Id de Producto
                </label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                  required
                  className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                Registrar Venta
              </button>
            </form>
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ventas registradas</h3>
          {ventas.length === 0 ? (
            <p className="text-gray-600">No hay ventas registradas.</p>
          ) : (
            <ul className="space-y-2">
              {ventas.map((res) => (
                <li
                  key={res.id}
                  className="text-gray-950 border border-gray-200 rounded-md p-4 bg-gray-50"
                >
                  <p><strong>Usuario:</strong> {res.user?.name} </p>
                  <p><strong>Producto:</strong> {res.product?.name}</p>
                  
                </li>
              ))}
            </ul>
          )}
        </div>
          </main>
      </Layout>
  )
}
