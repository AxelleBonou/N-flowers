"use client";
import React from "react";
import { useRouter } from "next/navigation";

const adresse = {
  nom: "AWONON Harmonie",
  rue: "Rue 123, Quartier Fidjrossè,",
  codePostal: "01 BP 1234",
  pays: "Bénin",
  ville: "Cotonou",
  telephone: "53893625",
};

export default function ConfirmAdresse() {
  const router = useRouter();

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
      <div className="flex justify-center">
        <div className="bg-gray-50 rounded-lg shadow p-8 w-full max-w-md">
          <div className="flex items-center mb-2">
            <span className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center mr-2">
              <span className="w-3 h-3 rounded-full bg-green-600 block"></span>
            </span>
            <span className="font-semibold text-lg">Mon adresse</span>
          </div>
          <div className="ml-7 text-gray-800 text-sm mb-4">
            <div>{adresse.nom}</div>
            <div>{adresse.rue}</div>
            <div>{adresse.codePostal}</div>
            <div>{adresse.pays}</div>
            <div>{adresse.ville}</div>
            <div>{adresse.telephone}</div>
          </div>
          <button
            className="ml-7 text-green-600 font-medium text-sm hover:underline"
            onClick={() => router.push("/achat/infocommande")}
          >
            Modifier
          </button>
        </div>
      </div>
      
      {/* Bouton continuer */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded font-semibold text-base"
          onClick={() => router.push("/achat/payement")}
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
