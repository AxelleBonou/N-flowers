'use client'
import React from 'react'
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
const page = () => {
  return (
    <div>
        <h1 className='text-center'>Mot de passe oublié?</h1>
        <h2 className='text-center'>Un email vous a été envoyé.</h2>
         <div className="absolute bottom-6 left-6">
        <Link 
          href="/connexion" 
          className="flex items-center text-black hover:text-gray-700"
        >
          <FaArrowLeft className="mr-2 text-green-600" />
          Retour à la connexion
        </Link>
      </div>
    </div>
  )
}

export default page