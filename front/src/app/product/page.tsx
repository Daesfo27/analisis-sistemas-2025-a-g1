'use client';
import React, { useState } from 'react'
import Layout from '../../module/layout';
import { useUserStore } from '@/store/prodcutStore';

export default function page() {
  const { setUser } = useUserStore();
    
      const [formData, setFormData] = useState({
        name: "",
        price: "",
        cantidad: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          await setUser(formData);
          alert("Producto creado con éxito");
        } catch (error) {
          alert("Error al crear el Producto");
        }
      };
    return (
      <Layout>
        <main className="min-h-screen flex items-center justify-center ">
            <form
              onSubmit={handleSubmit}
              className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              <h2 className="text-3xl font-semibold text-gray-900">Registro</h2>
    
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Nombre del producto
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-gray-700 mb-1">
                  Precio del producto
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="cantidad" className="block text-gray-700 mb-1">
                  Cantidad del producto
                </label>
                <input
                  type="text"
                  id="cantidad"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                  className="text-gray-950 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                Registrar Producto
              </button>
            </form>
          </main>
      </Layout>
  )
}
