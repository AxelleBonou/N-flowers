"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Address {
  nom: string;
  adress: string;
  postal_code: string;
  country: string;
  city: string;
  phone: string;
}

export default function ConfirmAdresse() {
  const router = useRouter();
  const [adresses, setAdresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token non trouvé");
          setLoading(false);
          return;
        }

        const res = await fetch("http://localhost:3032/v1/address", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(token)}`
          },
        });

                 if (!res.ok) {
           if (res.status === 401) {
             // Rediriger vers la page de connexion avec un message
             router.push("/connexion?message=Vous devez être connecté pour accéder à cette page");
             return;
           }
           throw new Error("Erreur lors de la récupération de l'adresse");
         }

                 const data = await res.json();
         if (data.address && data.address.length > 0) {
           setAdresses(data.address); // Prendre toutes les adresses
           setSelectedAddress(0); // Sélectionner la première adresse par défaut
         } else {
           setError("Aucune adresse trouvée");
         }
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      {/* Étapes */}
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg mr-3">01</div>
        <span className="text-green-700 font-bold text-xl mr-8">Adresse</span>
        <div className="flex-1 h-0.5 bg-gray-200 mr-4" />
        <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-lg mr-3">02</div>
        <span className="text-gray-400 font-bold text-xl">Paiement</span>
      </div>
      <p className="mb-6 text-sm text-gray-700">
        L'adresse sélectionnée sera utilisée à la fois comme adresse personnelle (pour la facturation) et comme adresse de livraison.
      </p>
      {/* Bloc adresse */}
      {loading ? (
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-lg shadow p-8 w-full max-w-md">
            <div className="text-center">Chargement...</div>
          </div>
        </div>
      ) : error ? (
        <div className="flex justify-center">
          <div className="bg-red-50 rounded-lg shadow p-8 w-full max-w-md">
            <div className="text-red-600 text-center">{error}</div>
          </div>
        </div>
                           ) : adresses.length > 0 ? (
          <div className="space-y-4">
            {adresses.map((adresse, index) => (
              <div key={index} className="flex justify-center">
                <div className={`rounded-lg shadow p-8 w-full max-w-md cursor-pointer transition-all ${
                  selectedAddress === index 
                    ? 'bg-green-50 border-2 border-green-600' 
                    : 'bg-gray-50 border-2 border-transparent'
                }`} onClick={() => setSelectedAddress(index)}>
                  <div className="flex items-center mb-2">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                      selectedAddress === index 
                        ? 'border-green-600 bg-green-600' 
                        : 'border-gray-400'
                    }`}>
                      {selectedAddress === index && (
                        <span className="w-3 h-3 rounded-full bg-white block"></span>
                      )}
                    </span>
                    <span className="font-semibold text-lg">Adresse {index + 1}</span>
                    {selectedAddress === index && (
                      <span className="ml-2 text-green-600 text-sm font-medium">(Sélectionnée)</span>
                    )}
                  </div>
                  <div className="ml-7 text-gray-800 text-sm mb-4">
                    <div>{adresse.nom}</div>
                    <div>{adresse.adress}</div>
                    <div>{adresse.postal_code}</div>
                    <div>{adresse.country}</div>
                    <div>{adresse.city}</div>
                    <div>{adresse.phone}</div>
                  </div>
                  <button
                    className="ml-7 text-green-600 font-medium text-sm hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/achat/infocommande");
                    }}
                  >
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      
             {/* Bouton continuer */}
       <div className="flex justify-center mt-8">
         <button
           className={`px-8 py-2 rounded font-semibold text-base ${
             selectedAddress !== null 
               ? 'bg-green-600 hover:bg-green-700 text-white' 
               : 'bg-gray-400 text-gray-600 cursor-not-allowed'
           }`}
           onClick={() => {
             if (selectedAddress !== null) {
               // Ici tu peux sauvegarder l'adresse sélectionnée ou la passer à la page suivante
               console.log("Adresse sélectionnée:", adresses[selectedAddress]);
               router.push("/achat/payement");
             }
           }}
           disabled={selectedAddress === null}
         >
           Continuer
         </button>
       </div>
      {/* Lien pour suivre les achats */}
      <div className="flex justify-center mt-8">
        <button
          className="flex items-center text-green-600 font-medium text-base hover:underline"
          onClick={() => router.push("/connexion")}
        >
          <span className="text-xl mr-2">&larr;</span>POURSUIVRE LES ACHATS
        </button>
      </div>
    </div>
  );
}
