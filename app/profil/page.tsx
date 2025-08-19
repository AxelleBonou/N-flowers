"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  MdPerson,
  MdShoppingBag,
  MdBook,
  MdLogout,
  MdVpnKey,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function ProfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Informations enregistrées !");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile nav toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-green-900 text-white p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <MdMenu size={28} />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-green-900 text-white flex flex-col py-8 px-6 transform transition-transform duration-200 md:static md:translate-x-0 md:relative md:flex md:w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ minHeight: "100vh" }}
      >
        {/* Close button on mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setSidebarOpen(false)}
          aria-label="Fermer le menu"
        >
          <MdClose size={28} />
        </button>
        <div className="flex flex-col items-center mb-10 mt-8 md:mt-0">
          <div className="rounded-full bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-10 xl:h-10 flex items-center justify-center text-green-900 text-xl sm:text-2xl md:text-2xl xl:text-xl font-bold mb-2 transition-all duration-200">
            <MdPerson />
          </div>
          <div className="font-semibold text-lg"> Axelle Bonou</div>
        </div>
        <nav className="flex flex-col gap-3 flex-1">
          <button className="flex items-center gap-2 bg-green-800 rounded px-3 py-2 text-sm font-medium focus:outline-none">
            <MdPerson className="text-lg" />
            <span>Mes informations</span>
          </button>
          <Link href="/profil/commandes">
            <div className="flex items-center gap-2 hover:bg-green-800 rounded px-3 py-2 text-sm font-medium focus:outline-none">
              <MdShoppingBag className="text-lg" />
              <span>Mes commandes</span>
            </div>
          </Link>
          <Link href="/profil/carnetdadresse">
            <div className="flex items-center gap-2 hover:bg-green-800 rounded px-3 py-2 text-sm font-medium focus:outline-none">
              <MdBook className="text-lg" />
              <span>Carnets d'adresse</span>
            </div>
          </Link>
        </nav>
        <button className="flex items-center gap-2 mt-10 hover:bg-green-800 rounded px-3 py-2 text-sm font-medium focus:outline-none text-white">
          <MdLogout className="text-lg" />
          <span>Déconnexion</span>
        </button>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main content */}
      <main className="flex-1 p-4 md:p-10 md:ml-0 ml-0">
        <div className="bg-green-100 rounded-md px-6 py-4 mb-6">
          <h2 className="text-green-900 font-bold text-lg">
            Informations Personnelles
          </h2>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded border border-green-200 p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h3 className="text-green-700 font-bold text-xl">
              Changer vos infos
            </h3>
            <button className="bg-green-700 text-white px-4 py-1 rounded font-medium text-sm hover:bg-green-800">
              Modifier
            </button>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            onSubmit={handleSave}
          >
            <div>
              <label className="block text-sm mb-1">Nom</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50"
                placeholder="Entrez votre nom"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Prénoms</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50"
                placeholder="Entrez votre ou vos prénoms"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50"
                placeholder="Entrez votre email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Téléphone</label>
              <div className="flex gap-2">
                <select className="border rounded px-2 py-2 text-sm bg-gray-50">
                  <option value="bj">🇧🇯</option>
                  <option value="fr">🇫🇷</option>
                </select>
                <input
                  type="tel"
                  className="flex-1 border rounded px-3 py-2 text-sm bg-gray-50"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Date de naissance</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50"
                placeholder="Entrez votre bda ici"
              />
            </div>
          </form>
          <div className="mb-2">
            <h3 className="text-green-700 font-bold text-lg mb-2">
              Changer de mot de passe
            </h3>
            <p className="text-sm mb-4">
              Nous vous recommandons d'utiliser un mot de passe compliqué que
              vous n'utilisiez nulle part ailleurs
            </p>
            <button className="flex items-center gap-2 bg-green-100 text-green-900 px-4 py-2 rounded font-medium border border-green-200 hover:bg-green-200">
              <MdVpnKey className="text-lg" />
              <span>Changer de mot de passe</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
