"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const InfoCommande = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    nom: "",
    adresse: "",
    codePostal: "",
    pays: "",
    ville: "",
    telephone: "",
    facturation: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (
      !form.nom ||
      !form.adresse ||
      !form.codePostal ||
      !form.pays ||
      !form.ville ||
      !form.telephone
    ) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (token) {
        console.log(JSON.parse(token));
      }
      const res = await fetch("http://localhost:3032/v1/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token ? JSON.parse(token) : ""}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        if (res.status == 401) {
          // Rediriger vers la page de connexion avec un message
          router.push(
            "/connexion?message=Vous devez être connecté pour continuer"
          );
          return;
        }
        throw new Error("Erreur lors de l'enregistrement");
      }
      router.push("/achat/confirmadrsse");
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg mr-3">
          01
        </div>
        <span className="text-green-700 font-bold text-xl mr-8">Adresse</span>
        <div className="flex-1 h-0.5 bg-gray-200 mr-4" />
        <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-lg mr-3">
          02
        </div>
        <span className="text-gray-400 font-bold text-xl">Paiement</span>
      </div>
      <p className="mb-6 text-sm text-gray-700">
        L'adresse sélectionnée sera utilisée à la fois comme adresse personnelle
        (pour la facturation) et comme adresse de livraison.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Nom et prénoms*</label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Adresse*</label>
          <input
            type="text"
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Code postal*</label>
          <input
            type="text"
            name="codePostal"
            value={form.codePostal}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Pays*</label>
          <input
            type="text"
            name="pays"
            value={form.pays}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Ville*</label>
          <input
            type="text"
            name="ville"
            value={form.ville}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Téléphone*</label>
          <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="facturation"
            checked={form.facturation}
            onChange={handleChange}
            className="mr-2 accent-green-700"
          />
          <label className="text-sm">
            Utiliser aussi cette adresse pour la facturation
          </label>
        </div>
        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="bg-transparent border-none text-green-700 font-semibold text-base flex items-center hover:underline"
          >
            <span className="text-xl mr-2">&larr;</span>POURSUIVRE LES ACHATS
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-white rounded px-8 py-2 font-semibold text-base hover:bg-green-800 disabled:opacity-60"
          >
            {loading ? "Envoi..." : "Continuer"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoCommande;
