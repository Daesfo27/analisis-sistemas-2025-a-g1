"use client"

import Layout from '@/modules/layouts/layout'
import React, { useState } from 'react'
import Image from 'next/image'

const allBooks = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    cover: "/books/cien.anos.de.soledad.jpg",
    owner: "Usuario1",
    status: "disponible"
  },
  {
    id: 2,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    cover: "/books/cronica.de.una.muerte.anunciada.jpg",
    owner: "Usuario2",
    status: "en intercambio"
  },
  {
    id: 3,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    cover: "/books/el.principito.jpg",
    owner: "Usuario3",
    status: "disponible"
  },
  {
    id: 4,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "/books/don.quijote.jpg",
    owner: "Usuario4",
    status: "disponible"
  },
  {
    id: 5,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    cover: "/books/orgulloyprejuicio.jpg",
    owner: "Usuario5",
    status: "disponible"
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    cover: "/books/1984.jpg",
    owner: "Usuario6",
    status: "disponible"
  }
]

const mockExchanges = [
  {
    id: 1,
    bookOffered: "Cien años de soledad",
    bookRequested: "1984",
    status: "pendiente",
    users: ["Usuario1", "Usuario6"]
  },
  {
    id: 2,
    bookOffered: "El Principito",
    bookRequested: "Don Quijote de la Mancha",
    status: "completado",
    users: ["Usuario3", "Usuario4"]
  }
]

export default function PageExchange() {
  const [selectedBook, setSelectedBook] = useState<any>(null)
  const [showExchangeModal, setShowExchangeModal] = useState(false)
  const [myBooks] = useState(allBooks.filter(book => book.owner === "UsuarioActual"))

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl font-semibold text-emerald-800'>Sistema de Intercambios</h1>
          
          {/* Mis libros disponibles */}
          <section>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Mis libros para intercambiar</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {myBooks.map(book => (
                <div 
                  key={book.id}
                  className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'
                >
                  <div className='relative h-48 w-full'>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <h3 className='font-medium mt-2'>{book.title}</h3>
                  <p className='text-sm text-gray-600'>{book.author}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${book.status === 'disponible' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {book.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Intercambios activos */}
          <section>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Intercambios activos</h2>
            <div className='space-y-4'>
              {mockExchanges.map(exchange => (
                <div 
                  key={exchange.id}
                  className='bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-xl shadow-sm'
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-lg'>
                        {exchange.bookOffered} ↔ {exchange.bookRequested}
                      </h3>
                      <p className='text-gray-600'>Entre {exchange.users.join(' y ')}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      exchange.status === 'pendiente' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {exchange.status}
                    </span>
                  </div>
                  {exchange.status === 'pendiente' && (
                    <div className='mt-4 flex gap-2'>
                      <button className='px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700'>
                        Aceptar
                      </button>
                      <button className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'>
                        Rechazar
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Todos los libros disponibles */}
          <section>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Libros disponibles para intercambio</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {allBooks.map(book => (
                <div 
                  key={book.id}
                  className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'
                  onClick={() => {
                    setSelectedBook(book)
                    setShowExchangeModal(true)
                  }}
                >
                  <div className='relative h-48 w-full'>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <h3 className='font-medium mt-2'>{book.title}</h3>
                  <p className='text-sm text-gray-600'>{book.author}</p>
                  <div className='mt-2 flex justify-between items-center'>
                    <span className='text-xs text-gray-500'>{book.owner}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${book.status === 'disponible' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal de intercambio */}
        {showExchangeModal && selectedBook && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-xl max-w-md w-full p-6'>
              <h3 className='text-xl font-semibold mb-4'>Proponer intercambio</h3>
              <p className='mb-4'>Quieres intercambiar tu libro por: <strong>{selectedBook.title}</strong></p>
              
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-2'>Selecciona tu libro:</label>
                  <select className='w-full p-2 border rounded-lg'>
                    {myBooks.map(book => (
                      <option key={book.id} value={book.id}>{book.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className='flex gap-2 justify-end'>
                  <button 
                    onClick={() => setShowExchangeModal(false)}
                    className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
                  >
                    Cancelar
                  </button>
                  <button className='px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700'>
                    Enviar propuesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}