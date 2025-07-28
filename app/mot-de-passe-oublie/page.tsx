'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function MotDePasseOublie() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulation d'une requête API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Ici vous pouvez ajouter votre logique de réinitialisation
      console.log('Réinitialisation pour:', email);
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
        <div className="text-center max-w-md px-6">
          <h2 className="text-3xl font-bold text-black mb-4">
            Email envoyé !
          </h2>
          <p className="text-black mb-6">
            Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>. 
            Veuillez vérifier votre boîte de réception et suivre les instructions.
          </p>
        </div>
        
        {/* Lien de retour dans l'angle inférieur gauche */}
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
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="text-center max-w-md px-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          Mot de passe oublié ?
        </h2>
        
        <p className="text-black mb-8">
          Veuillez renseigner l'adresse e-mail que vous avez utilisée à la création de votre compte. 
          Vous recevrez un lien temporaire pour réinitialiser votre mot de passe.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Envoi en cours...' : 'Valider'}
          </button>
        </form>
      </div>
      
      {/* Lien de retour dans l'angle inférieur gauche */}
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
  );
} 