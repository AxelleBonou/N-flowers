'use client'
import React from 'react'
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

const ForgotAnswerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Card principale */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Icône de succès */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-green-600 text-3xl" />
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Email envoyé !
          </h1>

          {/* Sous-titre */}
          <p className="text-gray-600 mb-6">
            Un email de réinitialisation a été envoyé à votre adresse email.
          </p>

          {/* Icône email */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              Veuillez vérifier votre boîte de réception et suivre les instructions 
              pour réinitialiser votre mot de passe.
            </p>
          </div>

          {/* Bouton retour */}
          <Link 
            href="/connexion" 
            className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Retour à la connexion
          </Link>

          {/* Lien de secours */}
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Vous n'avez pas reçu l'email ?{' '}
              <Link 
                href="/connexion/forgot" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Réessayer
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Besoin d'aide ?{' '}
            <Link 
              href="/contact" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotAnswerPage