"use client"

import Layout from '@/modules/layouts/layout'
import React, { useState } from 'react'

interface Message {
  id: string
  bookTitle: string
  content: string
  author: string
  timestamp: string
}

export default function PageMessage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState({
    bookTitle: '',
    content: '',
    author: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message: Message = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      ...newMessage
    }
    
    setMessages([message, ...messages])
    setNewMessage({ bookTitle: '', content: '', author: '' })
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Comentarios sobre Libros</h1>
        
        {/* Formulario de comentario */}
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Título del libro"
              className="p-2 border rounded"
              value={newMessage.bookTitle}
              onChange={(e) => setNewMessage({...newMessage, bookTitle: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Tu nombre"
              className="p-2 border rounded"
              value={newMessage.author}
              onChange={(e) => setNewMessage({...newMessage, author: e.target.value})}
              required
            />
          </div>
          <textarea
            placeholder="Escribe tu comentario..."
            className="w-full p-2 border rounded mb-4 h-32"
            value={newMessage.content}
            onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Publicar Comentario
          </button>
        </form>

        {/* Lista de comentarios */}
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

// Componente para mostrar cada mensaje
const MessageCard = ({ message }: { message: Message }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-gray-800">{message.bookTitle}</h3>
      <span className="text-sm text-gray-500">{message.timestamp}</span>
    </div>
    <p className="text-gray-600 mb-2">{message.content}</p>
    <p className="text-sm text-gray-500">Por: {message.author}</p>
  </div>
)