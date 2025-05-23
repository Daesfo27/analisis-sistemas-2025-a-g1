import React, { Children } from 'react'

interface Props{
    children:React.ReactNode
}

export default function AboutPage({children}:Props) {
  return(
    <main className=''>
        {children}
    </main>
  )
}
