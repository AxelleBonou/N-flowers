import React from "react";
import {
  MdPerson,
  MdPhone,
  MdEmail,
  MdFlag,
  MdLocationCity,
  MdCalendarToday,
} from "react-icons/md";

export default function ModifierInfosPage() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl relative animate-fade-in">
        <h2 className="text-green-900 font-bold text-xl text-center mb-6">
          Enregistrer une adresse
        </h2>
        <form className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm mb-1 font-medium">
              Nom & Prénoms
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm bg-gray-50 focus:border-green-700 focus:ring-green-700"
              placeholder="Entrez le nom et prénom"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm mb-1 font-medium">
              Numéro de téléphone
            </label>
            <div className="flex items-center">
              <span className="mr-2 text-lg">🇧🇯</span>
              <input
                type="tel"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50 focus:border-green-700 focus:ring-green-700"
                placeholder="Entrez le numéro de téléphone"
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm mb-1 font-medium">Pays</label>
            <select className="w-full border rounded px-3 py-2 text-sm bg-gray-50 focus:border-green-700 focus:ring-green-700">
              <option value="">Sélectionnez le pays</option>
              <option value="bj">Bénin</option>
              <option value="fr">France</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm mb-1 font-medium">Ville</label>
            <select className="w-full border rounded px-3 py-2 text-sm bg-gray-50 focus:border-green-700 focus:ring-green-700">
              <option value="">Sélectionnez une ville</option>
              <option value="cotonou">Cotonou</option>
              <option value="paris">Paris</option>
            </select>
          </div>
          <div className="col-span-2 flex items-center mt-2">
            <input
              type="checkbox"
              className="form-checkbox text-green-600"
              id="defaultAddress"
            />
            <label
              htmlFor="defaultAddress"
              className="ml-2 text-sm cursor-pointer select-none"
            >
              Définir comme adresse de livraison par défaut
            </label>
          </div>
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded font-medium hover:bg-green-800"
            >
              Enregistrer
            </button>
            <button
              type="reset"
              className="border border-green-700 text-green-700 px-6 py-2 rounded font-medium hover:bg-green-50"
            >
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
