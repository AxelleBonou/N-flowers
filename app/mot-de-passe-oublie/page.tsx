'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import axios from "axios";

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
      let data = JSON.stringify({
        "email": email
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3032/v1/users/forgot-password',
        headers: { 
          'Accept': '*/*', 
          'Accept-Language': 'en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7', 
          'Connection': 'keep-alive', 
          'Origin': 'null', 
          'Sec-Fetch-Dest': 'empty', 
          'Sec-Fetch-Mode': 'cors', 
          'Sec-Fetch-Site': 'cross-site', 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"', 
          'sec-ch-ua-mobile': '?0', 
          'sec-ch-ua-platform': '"Windows"', 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          // Ici vous pouvez gérer la réponse, par exemple afficher un message de succès
          window.location.href = "/connexion"; // Redirection vers la page de connexion
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              setError("Email non trouvé");
            } else {
              setError('Une erreur est survenue. Veuillez vérifier votre adresse e-mail.');
            }
          } else {
            // Erreur lors de la configuration de la requête
            setError('Une erreur est survenue. Veuillez réessayer plus tard.');
          }
          console.log(error);
        });

      
      // Ici vous pouvez ajouter votre logique de réinitialisation
      console.log('Réinitialisation pour:', email);
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
                      {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Envoi en cours...' : 'Valider'}
          </button>
        </form>
      </div>
      
      {/* Lien de retour  */}
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