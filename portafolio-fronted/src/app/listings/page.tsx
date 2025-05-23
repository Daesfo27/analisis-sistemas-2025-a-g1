"use client"

import Layout from '@/modules/layouts/layout'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

type Book = {
  id: number
  title: string
  author: string
  cover: string
  genre?: string  // Hacemos opcionales los nuevos campos
  year?: number
  rating?: number
  owner: string
  status: 'disponible' | 'en intercambio'
}

// Example data for demonstration; replace with your actual data source or fetching logic
const allBooks = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    cover: "/books/cien.anos.de.soledad.jpg",
    genre: "Realismo mágico",
    year: 1967,
    status: "disponible",
    owner: "Juan Pérez",
    rating: 4.8
  },
  {
    id: 2,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    cover: "/books/cronica.de.una.muerte.anunciada.jpg",
    genre: "Novela",
    year: 1981,
    status: "prestado",
    owner: "María López"
  },
  {
    id: 3,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    cover: "/books/el.principito.jpg",
    genre: "Fábula filosófica",
    year: 1943,
    status: "disponible",
    owner: "Carlos Ruiz"
  },
  {
    id: 4,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "/books/don.quijote.jpg",
    genre: "Novela clásica",
    year: 1605,
    status: "disponible",
    owner: "Ana Gómez"
  },
  {
    id: 5,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    cover: "/books/orgulloyprejuicio.jpg",
    genre: "Novela romántica",
    year: 1813,
    status: "disponible",
    owner: "Luis Fernández"
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    cover: "/books/1984.jpg",
    genre: "Distopía",
    year: 1949,
    status: "disponible",
    owner: "Sofía Martínez",
    rating: 4.7
  } 
]

export default function PageListings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('todos')
  const [sortBy, setSortBy] = useState('title')

  // Filtrado y ordenación
  const filteredBooks = allBooks
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => 
      selectedGenre === 'todos' || book.genre === selectedGenre
    )
.sort((a, b) => {
  const aRating = a.rating || 0;
  const bRating = b.rating || 0;
  const aYear = a.year || 0;
  const bYear = b.year || 0;

  if (sortBy === 'title') return a.title.localeCompare(b.title);
  if (sortBy === 'year') return bYear - aYear;
  return bRating - aRating;
})

  // Géneros únicos para filtro
  const genres = ['todos', ...new Set(allBooks.map(book => book.genre))]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-emerald-800 mb-8">Catálogo de Libros</h1>
        
        {/* Controles de filtrado y búsqueda */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Buscar por título o autor..."
            className="p-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="p-2 border rounded-lg"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
          
          <select
            className="p-2 border rounded-lg"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Ordenar por título</option>
            <option value="year">Ordenar por año</option>
            <option value="rating">Ordenar por rating</option>
          </select>
        </div>

        {/* Listado de libros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="rounded-t-xl object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-1">{book.author}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{book.genre}</span>
                  <span className="text-sm font-medium text-emerald-600">
                    {book.year}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm">{book.rating}</span>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    book.status === 'disponible' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {book.status}
                  </span>
                </div>
                
                <div className="mt-3 border-t pt-2">
                  <p className="text-xs text-gray-500">
                    Propietario: <span className="font-medium">{book.owner}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}