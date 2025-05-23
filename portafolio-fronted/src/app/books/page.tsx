"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Layout from '@/modules/layouts/layout'

const featuredBooks = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    cover: "/books/cien.anos.de.soledad.jpg",
    description: "Obra maestra del realismo mágico que narra la historia de la familia Buendía en Macondo.",
    genre: "Realismo mágico",
    year: 1967,
    pages: 471,
    language: "Español",
    isbn: "978-0307474728"
  },
  {
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    cover: "/books/cronica.de.una.muerte.anunciada.jpg",
    description: "Novela corta que reconstruye un asesinato y sus circunstancias en un pueblo caribeño.",
    genre: "Novela",
    year: 1981,
    pages: 144,
    language: "Español",
    isbn: "978-1400034956"
  },
   {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    cover: "/books/el.principito.jpg",
    description: "Fábula filosófica para niños y adultos sobre el sentido de la vida y las relaciones humanas.",
    genre: "Fábula filosófica",
    year: 1943,
    pages: 96,
    language: "Francés (traducido al español)",
    isbn: "978-0156013987"
  },
  {
  title: "Don Quijote de la Mancha",
  author: "Miguel de Cervantes",
  cover: "/books/don.quijote.jpg",
  description: "Considerada la primera novela moderna de la literatura universal, relata las aventuras de un hidalgo que enloquece leyendo libros de caballerías.",
  genre: "Novela clásica",
  year: 1605 ,
  pages: 928,
  language: "Español antiguo",
  isbn: "978-8420412146"
},
{
  title: "Orgullo y prejuicio",
  author: "Jane Austen",
  cover: "/books/orgulloyprejuicio.jpg",
  description: "Clásico de la literatura inglesa que analiza las relaciones sociales y matrimoniales en la sociedad rural del siglo XIX.",
  genre: "Novela romántica",
  year: 1813,
  pages: 432,
  language: "Inglés (traducido al español)",
  isbn: "978-8497941739"
},
{
  title: "1984",
  author: "George Orwell",
  cover: "/books/1984.jpg",
  description: "Distopía que retrata un estado totalitario donde se manipula la información y se vigila constantemente a los ciudadanos.",
  genre: "Ficción distópica",
  year: 1949,
  pages: 328,
  language: "Inglés (traducido al español)",
  isbn: "978-8499890944",
}
]

export default function PageBooks() {
  const [selectedBook, setSelectedBook] = useState<any>(null)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-emerald-800 mb-8">Libros Destacados</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-80 relative overflow-hidden rounded-t-xl">
                <Image 
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                  fill
                  className="object-contain hover:opacity-90 hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
                <p className="text-emerald-600 mb-3">{book.author}</p>
                <p className="text-gray-600 line-clamp-3 mb-4">{book.description}</p>
                
                <button 
                  onClick={() => setSelectedBook(book)}
                  className="w-full py-2 px-4 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition-colors"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalles */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-emerald-800">{selectedBook.title}</h2>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={selectedBook.cover}
                      alt={`Portada de ${selectedBook.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Autor:</h3>
                      <p className="text-gray-600">{selectedBook.author}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Género:</h3>
                      <p className="text-gray-600">{selectedBook.genre}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Año de publicación:</h3>
                      <p className="text-gray-600">{selectedBook.year}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Páginas:</h3>
                      <p className="text-gray-600">{selectedBook.pages}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Idioma:</h3>
                      <p className="text-gray-600">{selectedBook.language}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">ISBN:</h3>
                      <p className="text-gray-600 font-mono">{selectedBook.isbn}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción completa:</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedBook.description}</p>
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="mt-6 w-full py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}