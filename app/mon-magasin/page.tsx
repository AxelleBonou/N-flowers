import React from "react";

const MonMagasinPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mon Magasin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Informations du magasin</h2>
          <p className="mb-2">Adresse: 123 Rue des Fleurs, 75000 Paris</p>
          <p className="mb-2">Téléphone: 01 23 45 67 89</p>
          <p className="mb-2">Email: contact@n-flower.com</p>
          <p className="mb-2">Horaires d'ouverture:</p>
          <ul className="list-disc pl-4">
            <li>Lundi - Vendredi: 9h00 - 19h00</li>
            <li>Samedi: 10h00 - 18h00</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Carte</h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            Carte du magasin
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonMagasinPage; 