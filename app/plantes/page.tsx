'use client';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import FaqSection from 'app/components/FaqSection';
import GardenTips from 'app/components/GardenTips';
import AvisSection from 'app/components/AvisSection';
// Produits d'intérieur
  const produits = [
    {
      id: 1,
      nom: "Philodendron - Orchidée rose",
      prix: "500€",
      avis: 2,
      note: 4,
      images: ["/images/plante1.png", "/images/plant1b.png"],
    },
    {
      id: 2,
      nom: "Anthurium - Orchidée",
      prix: "600€",
      avis: 2,
      note: 5,
      images: ["/images/plante2.png", "/images/plant2b.png"],
    },
    {
      id: 3,
      nom: "Spathiphyllum - Rose",
      prix: "500€",
      avis: 2,
      note: 4,
      images: ["/images/plante3.png", "/images/plant3b.png"],
    },
    {
      id: 4,
      nom: "Pachira aquatica",
      prix: "500€",
      avis: 3,
      note: 4,
      images: ["/images/plante4.png", "/images/plant4b.png"],
    },
    {
      id: 5,
      nom: "Ficus lyrata",
      prix: "450€",
      avis: 4,
      note: 5,
      images: ["/images/plant5.png", "/images/plant5b.png"],
    },
    {
      id: 6,
      nom: "Calathea ornata",
      prix: "380€",
      avis: 1,
      note: 4,
      images: ["/images/plant6.png", "/images/plant6b.png"],
    },
    {
      id: 7,
      nom: "Monstera deliciosa",
      prix: "520€",
      avis: 6,
      note: 5,
      images: ["/images/plant7.png", "/images/plant7b.png"],
    },
    {
      id: 8,
      nom: "Peperomia obtusifolia",
      prix: "300€",
      avis: 3,
      note: 4,
      images: ["/images/plant8.png", "/images/plant8b.png"],
    },
    {
      id: 9,
      nom: "Sansevieria zeylanica",
      prix: "350€",
      avis: 2,
      note: 3,
      images: ["/images/plant9.png", "/images/plant9b.png"],
    },
    {
      id: 10,
      nom: "Maranta leuconeura",
      prix: "410€",
      avis: 4,
      note: 5,
      images: ["/images/plant10.png", "/images/plant10b.png"],
    },
    {
      id: 11,
      nom: "Dracaena marginata",
      prix: "390€",
      avis: 5,
      note: 4,
      images: ["/images/plant11.png", "/images/plant11b.png"],
    },
    {
      id: 12,
      nom: "Aglaonema silver bay",
      prix: "370€",
      avis: 2,
      note: 3,
      images: ["/images/plant12.png", "/images/plant12b.png"],
    },
    {
      id: 13,
      nom: "Zamioculcas zamiifolia",
      prix: "440€",
      avis: 6,
      note: 5,
      images: ["/images/plant13.png", "/images/plant13b.png"],
    },
    {
      id: 14,
      nom: "Pothos doré",
      prix: "280€",
      avis: 1,
      note: 4,
      images: ["/images/plant14.png", "/images/plant14b.png"],
    },
    {
      id: 15,
      nom: "Begonia maculata",
      prix: "390€",
      avis: 3,
      note: 5,
      images: ["/images/plant15.png", "/images/plant15b.png"],
    },
    {
      id: 16,
      nom: "Chlorophytum comosum",
      prix: "320€",
      avis: 2,
      note: 4,
      images: ["/images/plant16.png", "/images/plant16b.png"],
    },
  ];

// Produits d'extérieur
const produitsExterieur = [
    {
      id: 1,
      nom: "Philodendron - Orchidée rose",
      prix: "500€",
      avis: 2,
      note: 4,
      images: ["/images/plant1.png", "/images/plant1b.png"],
    },
    {
      id: 2,
      nom: "Anthurium - Orchidée",
      prix: "600€",
      avis: 2,
      note: 5,
      images: ["/images/plant2.png", "/images/plant2b.png"],
    },
    {
      id: 3,
      nom: "Spathiphyllum - Rose",
      prix: "500€",
      avis: 2,
      note: 4,
      images: ["/images/plant3.png", "/images/plant3b.png"],
    },
    {
      id: 4,
      nom: "Pachira aquatica",
      prix: "500€",
      avis: 3,
      note: 4,
      images: ["/images/plant4.png", "/images/plant4b.png"],
    },
    {
      id: 5,
      nom: "Ficus lyrata",
      prix: "450€",
      avis: 4,
      note: 5,
      images: ["/images/plante5.png", "/images/plant5b.png"],
    },
    {
      id: 6,
      nom: "Calathea ornata",
      prix: "380€",
      avis: 1,
      note: 4,
      images: ["/images/plante6.png", "/images/plant6b.png"],
    },
    {
      id: 7,
      nom: "Monstera deliciosa",
      prix: "520€",
      avis: 6,
      note: 5,
      images: ["/images/plante7.png", "/images/plant7b.png"],
    },
    {
      id: 8,
      nom: "Peperomia obtusifolia",
      prix: "300€",
      avis: 3,
      note: 4,
      images: ["/images/plante8.png", "/images/plant8b.png"],
    },
    {
      id: 9,
      nom: "Sansevieria zeylanica",
      prix: "350€",
      avis: 2,
      note: 3,
      images: ["/images/plante9.png", "/images/plant9b.png"],
    },
    {
      id: 10,
      nom: "Maranta leuconeura",
      prix: "410€",
      avis: 4,
      note: 5,
      images: ["/images/plante10.png", "/images/plant10b.png"],
    },
    {
      id: 11,
      nom: "Dracaena marginata",
      prix: "390€",
      avis: 5,
      note: 4,
      images: ["/images/plante11.png", "/images/plant11b.png"],
    },
    {
      id: 12,
      nom: "Aglaonema silver bay",
      prix: "370€",
      avis: 2,
      note: 3,
      images: ["/images/plante12.png", "/images/plant12b.png"],
    },
    {
      id: 13,
      nom: "Zamioculcas zamiifolia",
      prix: "440€",
      avis: 6,
      note: 5,
      images: ["/images/plante13.png", "/images/plant13b.png"],
    },
    {
      id: 14,
      nom: "Pothos doré",
      prix: "280€",
      avis: 1,
      note: 4,
      images: ["/images/plante14.png", "/images/plant14b.png"],
    },
    {
      id: 15,
      nom: "Begonia maculata",
      prix: "390€",
      avis: 3,
      note: 5,
      images: ["/images/plante15.png", "/images/plant15b.png"],
    },
    {
      id: 16,
      nom: "Chlorophytum comosum",
      prix: "320€",
      avis: 2,
      note: 4,
      images: ["/images/plante16.png", "/images/plant16b.png"],
    },
  ];

const Page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('interior');
  const [pageActuelle, setPageActuelle] = useState(1);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const produitsParPage = 16;

  interface Product {
    id: number;
    nom: string;
    prix: string;
    avis: number;
    note: number;
    images: string[];
  }

  // Choisir les produits en fonction de la catégorie active
  const produitsActuels = activeTab === "interior" ? produits : produitsExterieur;

  // Calcul du nombre total de pages (max 10 pages pour les 16 produits par page)
  const totalPages = Math.min(Math.ceil(produitsActuels.length / produitsParPage), 10);

  // Calcul des produits à afficher pour la page actuelle
  const indexDepart = (pageActuelle - 1) * produitsParPage;
  const produitsAffiches = produitsActuels.slice(indexDepart, indexDepart + produitsParPage);
 
  const ProductCard = ({ product }: { product: Product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = () => {
      if (activeTab === 'exterior') {
        router.push('/documentation/exterior');
      } else {
        router.push(`/documentation/${product.id}`);
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col h-full">
          {/* Image du produit */}
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.nom}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Nom du produit */}
          <h3 className="font-semibold text-gray-800 text-sm text-center mb-2 leading-tight">
            {product.nom}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-xs text-center mb-2">
            Plante d'intérieur
          </p>
          
          {/* Note et avis */}
          <div className="flex items-center justify-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  {i < product.note ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">({product.avis} avis)</span>
          </div>
          
          {/* Prix */}
          <div className="text-center mb-4">
            <span className="font-bold text-gray-800">{product.prix}</span>
          </div>
          
          {/* Bouton Ajouter au panier */}
          <button
            onClick={handleAddToCart}
            className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-16 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <span>Plantes</span> &gt;{" "}
        <span className="font-medium">
          {activeTab === "interior" ? "Plantes d'intérieur" : "Plantes d'extérieur"}
        </span>
      </nav>

      {/* Image principale */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <Image
          src={
            activeTab === "interior"
              ? "/images/plantes-interieur.png"
              : "/images/plantes-exterieur.png"
          }
          alt="Plantes"
          width={1200}
          height={500}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Titre */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="border-4 border-orange-500 w-8 h-8 rotate-45"></div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
            {activeTab === "interior"
              ? "Les plantes d'intérieur"
              : "Les plantes d'extérieur"}
          </h1>
          <div className="border-4 border-orange-500 w-8 h-8 rotate-45"></div>
        </div>
        <p className="text-green-600 font-medium text-lg">
          {activeTab === "interior"
            ? "Apportez une touche nature chez vous !"
            : "Sublimez vos extérieurs naturellement !"}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-justify mb-8 max-w-4xl mx-auto">
        {activeTab === "interior" ? (
          <>
           Les plantes d'intérieur sont bien plus que de simples objets de décoration. 
           Elles purifient l'air, réduisent le stress et créent une ambiance apaisante. 
           Avec une multitude de formes, de couleurs et de tailles, il y en a pour tous 
           les goûts et tous les espaces.En intégrant les plantes d'intérieur dans votre 
           espace de vie, vous apportez une touche de nature qui favorise un environnement 
           serein et harmonieux. Que ce soit dans le bureau, la chambre ou l'entrée, elles 
           trouvent naturellement leur place dans chaque recoin de votre maison.
          </>
        ) : (
          <>
            Les plantes d'extérieur sont bien plus que de simples objets de décoration. Elles purifient l'air, réduisent le stress et créent uneambiance apaisante. Avec une multitude
de formes, de couleurs et de tailles, il y en a pour tous les goûts et tous les espaces.En intégrant les plantesd'extérieur dans votre espace de vie, vous apportez une 
touche de nature qui favorise un environnement serein et harmonieux. Que ce soit dans le bureau, la chambre ou l'entrée, elles trouvent naturellement leur place 
dans chaque recoin de votre maison.
          </>
        )}
      </p>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6">
        <button
          onClick={() => {
            setActiveTab("interior");
            setPageActuelle(1);
          }}
          className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
            activeTab === "interior"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Plantes d'intérieur
        </button>
        <button
          onClick={() => {
            setActiveTab("exterior");
            setPageActuelle(1);
          }}
          className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
            activeTab === "exterior"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Plantes d'extérieur
        </button>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {produitsAffiches.map((plante) => (
          <ProductCard key={plante.id} product={plante} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setPageActuelle(index + 1)}
            className={`px-3 py-1 rounded-full ${
              pageActuelle === index + 1
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Sections en pleine largeur */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
        {activeTab === "interior" && <FaqSection />}
        {activeTab === "exterior" && <GardenTips />}
      </div>

      {/* Section Avis en pleine largeur */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
        <AvisSection/>
      </div>
    </div>
  );
};

export default Page;
