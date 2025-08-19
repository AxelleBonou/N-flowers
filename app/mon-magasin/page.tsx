import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const MonMagasinPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">
        Mon Magasin
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Informations du magasin
          </h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-green-600 mr-2" />
            <p className="text-gray-700">Ab-Calavi Rue des Fleurs,Bidossessi</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-green-600 mr-2" />
            <p className="text-gray-700">01 69 39 62 51</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-green-600 mr-2" />
            <p className="text-gray-700">contact@n-flower.com</p>
          </div>
          <div className="flex items-start mb-4">
            <FaClock className="text-green-600 mr-2 mt-1" />
            <div>
              <p className="text-gray-700 font-semibold">
                Horaires d'ouverture:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Lundi - Vendredi: 9h00 - 19h00</li>
                <li>Samedi: 10h00 - 18h00</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Carte</h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Carte du magasin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonMagasinPage;
