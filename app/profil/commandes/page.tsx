"use client";
import React, { useState } from "react";

const onglets = ["Tous", "En traitement", "Validés", "Annulés"];

export default function CommandesPage() {
  const [ongletActif, setOngletActif] = useState(0);

  // Les données seront récupérées du backend, ici on met un tableau vide
  const commandes = [];

  return (
    <main className="flex-1 p-10">
      <div className="bg-green-100 rounded-md px-6 py-4 mb-6">
        <h2 className="text-green-900 font-bold text-lg">Mes Commandes</h2>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded border border-green-200 p-6">
        {/* Onglets */}
        <div className="flex border-b mb-4">
          {onglets.map((tab, idx) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium ${
                ongletActif === idx
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-500"
              }`}
              onClick={() => setOngletActif(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tableau */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-green-50 text-green-900">
                <th className="px-3 py-2 text-left">N°</th>
                <th className="px-3 py-2 text-left">Produits commandés</th>
                <th className="px-3 py-2 text-left">Date & heure</th>
                <th className="px-3 py-2 text-left">Prix total</th>
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Adresse</th>
              </tr>
            </thead>
            <tbody>
              {commandes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">
                    Aucune commande pour le moment.
                  </td>
                </tr>
              ) : null}
              {/* Les lignes de commandes seront générées dynamiquement ici */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
