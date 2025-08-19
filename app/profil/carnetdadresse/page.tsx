"use client";

import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// import Modal from "../components/Modal";
const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onClose}
        aria-label="Fermer"
      >
        ×
      </button>
      {children}
    </div>
  </div>
);

const AddressBookPage = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Axelle Bonou",
      phone: "+229 0169 39 62 51",
      country: "Bénin",
      city: "Calavi",
      isDefault: true,
    },
    {
      id: 2,
      name: "Axelle Bonou",
      phone: "+229 0169 39 62 51",
      country: "Bénin",
      city: "Cotonou",
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetDefault = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const handleDelete = (id: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== id)
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Carnets d'adresse</h1>

      <div className="flex justify-end mb-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Nouvelle adresse
        </button>
      </div>

      {addresses.map((address) => (
        <div
          key={address.id}
          className="bg-white p-4 rounded shadow mb-4 border border-gray-300"
        >
          <p className="font-bold text-green-600 ">Nom: {address.name}</p>
          <p className="text-green-600 ">
            Numéro de téléphone: {address.phone}
          </p>
          <p className="text-green-600 ">Pays: {address.country}</p>
          <p className="text-green-600 ">Ville: {address.city}</p>

          <div className="flex items-center mt-4">
            <input
              type="radio"
              name="defaultAddress"
              checked={address.isDefault}
              onChange={() => handleSetDefault(address.id)}
              className="mr-2"
            />
            <span>Définir comme adresse de livraison par défaut</span>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="text-red-600 hover:text-red-800 mr-4 flex items-center"
              onClick={() => handleDelete(address.id)}
            >
              <FaTrash className="mr-2" />
            </button>
            <button className="text-blue-600 hover:text-blue-800 flex items-center">
              <FaEdit className="mr-2" />
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-green-600  mb-4">
              Enregistrer une adresse
            </h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom & Prénoms"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <select className="border border-gray-300 rounded px-4 py-2">
                  <option>Pays</option>
                </select>
                <select className="border border-gray-300 rounded px-4 py-2">
                  <option>Ville</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Définir comme adresse de livraison par défaut
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddressBookPage;
