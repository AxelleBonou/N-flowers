'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";

const ConnexionPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'client' | 'new'>('client');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulation d'une requête API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      let data = JSON.stringify({
        "email": email,
        "password": password
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3032/v1/users/login',
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
        // Stocker les infos utilisateur dans le localStorage ou context
        localStorage.setItem('user', JSON.stringify(response.data));
        // Redirection vers la page d'accueil ou dashboard après connexion réussie
        window.location.href = "/"; // Remplacez par la route de votre choix
      })
      .catch((error) => {
        if (error.response) {
          // La requête a été faite et le serveur a répondu avec un code d'état
          // qui sort de la plage des 2xx
          setError("Identifiants incorrects. Veuillez vérifier votre email et mot de passe.");
        } else if (error.request) {
          // La requête a été faite mais aucune réponse n'a été reçue
          setError('Aucune réponse du serveur. Veuillez réessayer plus tard.');
        } else {
          // Quelque chose s'est passé lors de la configuration de la requête
          setError('Erreur de configuration de la requête. Veuillez réessayer.');
        }
        console.log(error);
      });
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="text-center max-w-md px-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          Connectez-vous à votre compte
        </h2>
        
        <div className="bg-white p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-6">
            Bienvenue chez Flowa
          </h3>

          {/* Sélection du type de client */}
        

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                  placeholder="Mot de passe *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-4 text-gray-400" />
                  ) : (
                    <FaEye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

        

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion en cours...' : 'Je me connecte'}
              </button>
        
         
            <div className="flex flex-col items-center space-y-4 py-6">
              <p className="text-black text-base text-center">Vous n'avez pas encore de compte ?<br/>Créez-en un pour profiter de tous nos services !</p>
              <Link href="/connexion/register">
                <button className="py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Je crée mon compte
                </button>
              </Link>
            </div>
        

          <div className="mt-6 text-center">
            <p className="text-black">
              Pas de compte ?{" "}
              <Link href="/connexion/register" className="text-green-600 hover:text-green-700 font-medium">
                Créez-en un
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnexionPage; 
