"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [currency, setCurrency] = useState("");
  const [birthday, setBirthday] = useState("");
  const [acceptPromo, setAcceptPromo] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [activeTab, setActiveTab] = useState<"client" | "new">("new");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!acceptTerms) {
      setError("Vous devez accepter les conditions générales.");
      return;
    }
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulation d'une requête API
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Ici vous pouvez ajouter votre logique d'inscription
      console.log("Inscription avec:", {
        fullName,
        email,
        currency,
        password,
        birthday,
        acceptPromo,
        acceptTerms,
      });

      let data = JSON.stringify({
        name: fullName,
        email: email,
        password: password,
        date_of_birth: birthday,
        devise: currency,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3032/v1/users/register",
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
          Connection: "keep-alive",
          Origin: "null",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response: { data: any }) => {
            console.log(JSON.stringify(response.data));
            window.location.href = "/connexion";
        })
        .catch((error: any) => {
          if (error.response) {
            // La requête a été faite et le serveur a répondu avec un code d'état
            if (error.response.status === 409) {
              setError("Email déjà utilisé");
            } else {
              setError("Erreur lors de l'inscription.");
            }
          } else {
            // Erreur lors de la configuration de la requête
            setError("Erreur de connexion au serveur.");
          }
          console.log(error);
        });
      // Redirection ou gestion de l'inscription
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="text-center max-w-md px-6">
        <h2 className="text-3xl font-bold text-black mb-6 mt-4">
          Création de compte
        </h2>
        <div className="bg-white p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-6">
            Bienvenue chez Flowa
          </h3>

          {/* Sélection du type de client */}
          <div className="flex mb-6 bg-gray-100 p-1 rounded-md">
            <button
              type="button"
              className={`flex-1 py-1 px-2 font-medium text-sm h-9 rounded transition-colors duration-150 ${
                activeTab === "client"
                  ? "bg-green-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("client")}
            >
              Déjà client(e) ?
            </button>
            <button
              type="button"
              className={`flex-1 py-1 px-2 font-medium text-sm h-9 rounded transition-colors duration-150 ${
                activeTab === "new"
                  ? "bg-green-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("new")}
            >
              Pas encore client(e) ?
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                placeholder="Nom et prénoms *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="relative">
              <select
                id="currency"
                name="currency"
                required
                className={`w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white appearance-none ${
                  !currency ? "text-gray-400" : "text-black"
                }`}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                disabled={isLoading}
              >
                <option value="" disabled className="text-gray-400">
                  Devise *
                </option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="FCFA">FCFA</option>
              </select>
              {/* Chevron */}
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 bg-white text-black"
                placeholder="Mot de passe *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-4 w-4 text-gray-400" />
                ) : (
                  <FaEye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 bg-white text-black"
                placeholder="Confirmer votre mot de passe *"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="h-4 w-4 text-gray-400" />
                ) : (
                  <FaEye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            <div>
              <label className="block text-black font-medium mb-1">
                Recevez un cadeau le jour de votre anniversaire
              </label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                placeholder="Entrez votre date de naissance *"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center text-sm text-black">
                <input
                  type="checkbox"
                  checked={acceptPromo}
                  onChange={() => setAcceptPromo(!acceptPromo)}
                  className="mr-2 accent-green-600 w-5 h-5 border-2 border-green-600 focus:ring-2 focus:ring-green-500"
                  disabled={isLoading}
                />
                Je souhaite recevoir par email les actualités promotionnelles,
                les offres et conseils de Jardin et Saisons
              </label>
              <label className="flex items-center text-sm text-black">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="mr-2 accent-green-600 w-5 h-5 border-2 border-green-600 focus:ring-2 focus:ring-green-500"
                  required
                  disabled={isLoading}
                />
                J'accepte les conditions générales et la politique de
                confidentialité
              </label>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? "Inscription en cours..." : "Je crée mon compte"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black text-base">
              Déjà un compte ?{" "}
              <Link
                href="/connexion"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
