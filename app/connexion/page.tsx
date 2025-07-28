'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

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
      
      // Ici vous pouvez ajouter votre logique de connexion
      console.log('Connexion pour:', email);
      
      // Redirection ou gestion de la connexion
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
          <div className="flex mb-6 bg-gray-100 p-1 rounded-md">
            <button
              type="button"
              className={`flex-1 py-1 px-2 font-medium text-sm h-9 rounded transition-colors duration-150 ${activeTab === 'client' ? 'bg-green-600 text-white' : 'bg-white text-black'}`}
              onClick={() => setActiveTab('client')}
            >
              Déjà client(e) ?
            </button>
            <button
              type="button"
              className={`flex-1 py-1 px-2 font-medium text-sm h-9 rounded transition-colors duration-150 ${activeTab === 'new' ? 'bg-green-600 text-white' : 'bg-white text-black'}`}
              onClick={() => setActiveTab('new')}
            >
              Pas encore client(e) ?
            </button>
          </div>

          {/* Formulaires selon l'onglet sélectionné */}
          {activeTab === 'client' ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

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

              <div className="flex justify-end">
                <Link 
                  href="/mot-de-passe-oublie" 
                  className="text-sm text-black hover:text-gray-700"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion en cours...' : 'Je me connecte'}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center space-y-4 py-6">
              <p className="text-black text-base text-center">Vous n'avez pas encore de compte ?<br/>Créez-en un pour profiter de tous nos services !</p>
              <Link href="/connexion/register">
                <button className="py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Je crée mon compte
                </button>
              </Link>
            </div>
          )}

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
