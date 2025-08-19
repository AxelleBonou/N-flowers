'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PanierPage = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  // Données du panier
  const cartItem = {
    id: 1,
    name: "Phalaenopsis – rose",
    description: "Plante d'intérieur",
    price: 3000,
    totalPrice: 5100,
    image: "/images/plante3.png",
    inStock: true
  };

  // Données des produits recommandés
  const recommendedProducts = [
    {
      id: 1,
      name: "Phalaenopsis – Orchidée rose",
      description: "Plante d'intérieur",
      price: 5800,
      rating: 5,
      reviews: 3,
      image: "/images/plante1.png"
    },
    {
      id: 2,
      name: "Phalaenopsis – Orchidée",
      description: "Plante d'intérieur",
      price: 4500,
      rating: 4,
      reviews: 2,
      image: "/images/plante2.png"
    },
    {
      id: 3,
      name: "Phalaenopsis – rose",
      description: "Plante d'intérieur",
      price: 3000,
      rating: 5,
      reviews: 2,
      image: "/images/plante3.png"
    },
    {
      id: 4,
      name: "Phalaenopsis – Orchidée",
      description: "Plante d'intérieur",
      price: 2500,
      rating: 3,
      reviews: 2,
      image: "/images/plante4.png"
    },
    {
      id: 5,
      name: "Phalaenopsis – Orchidée rose",
      description: "Plante d'intérieur",
      price: 5800,
      rating: 5,
      reviews: 3,
      image: "/images/plante1.png"
    },
    {
      id: 6,
      name: "Phalaenopsis – Orchidée",
      description: "Plante d'intérieur",
      price: 4500,
      rating: 4,
      reviews: 2,
      image: "/images/plante2.png"
    },
    {
      id: 7,
      name: "Phalaenopsis – rose",
      description: "Plante d'intérieur",
      price: 3000,
      rating: 5,
      reviews: 2,
      image: "/images/plante3.png"
    },
    {
      id: 8,
      name: "Phalaenopsis – Orchidée",
      description: "Plante d'intérieur",
      price: 2500,
      rating: 3,
      reviews: 2,
      image: "/images/plante4.png"
    }
  ];

  // Calculs du panier
  const subtotal = 6100; // 1 article
  const shipping = 800;
  const total = 5900;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleCommander = () => {
    router.push('/achat/infocommande');
  };

  const handleContinueShopping = () => {
    router.back();
  };

  const handleAddToCart = (productId: number) => {
    // Logique pour ajouter au panier
    console.log('Ajouter au panier:', productId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
             <div className="max-w-7xl mx-auto px-1 py-6">
                 {/* Section Panier d'achat */}
         <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Panier d'achat</h1>
          
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Liste des produits */}
          <div className="lg:col-span-2">
                             <div className="bg-white rounded-lg shadow-md p-4">
                                 {/* Produit dans le panier */}
                 <div className="flex items-center justify-between py-4">
                   <div className="flex items-center space-x-4">
                     {/* Image plus grande */}
                     <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                       <Image
                         src={cartItem.image}
                         alt={cartItem.name}
                         width={128}
                         height={128}
                         className="w-full h-full object-cover"
                       />
                     </div>
                     
                     {/* Détails du produit */}
                     <div className="space-y-2">
                       <h3 className="font-semibold text-gray-800 text-lg">{cartItem.name}</h3>
                       <p className="text-gray-600">{cartItem.description}</p>
                       <p className="text-green-600 font-medium text-lg">{cartItem.price}f</p>
                       <span className="text-green-500 text-sm font-medium">En stock</span>
              </div>
                    </div>
                   
                   <div className="flex items-center space-x-4">
                     {/* Sélecteur de quantité avec champ numérique */}
                     <div className="flex items-center border border-gray-300 rounded-lg">
                       <button
                         onClick={() => handleQuantityChange(quantity - 1)}
                         className="px-4 py-2 hover:bg-gray-100 text-lg font-medium"
                       >
                         -
                       </button>
                       <input
                         type="number"
                         value={quantity}
                         onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                         className="w-16 px-3 py-2 text-center border-x border-gray-300 focus:outline-none"
                         min="1"
                       />
                       <button
                         onClick={() => handleQuantityChange(quantity + 1)}
                         className="px-4 py-2 hover:bg-gray-100 text-lg font-medium"
                       >
                         +
                       </button>
                    </div>
                     
                     {/* Prix total */}
                     <div className="text-right">
                       <p className="font-semibold text-gray-800 text-lg">{cartItem.totalPrice}f</p>
                    </div>
                     
                     {/* Bouton supprimer */}
                     <button className="text-red-500 hover:text-red-700 p-2">
                       <FaTrash size={18} />
                      </button>
                    </div>
                  </div>
                
                                 {/* Lien continuer les achats */}
                 <div className="mt-4">
                  <button 
                    onClick={handleContinueShopping}
                    className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
                  >
                    <IoIosArrowBack size={16} />
                    POURSUIVRE LES ACHATS
                  </button>
              </div>
            </div>
          </div>
          
            {/* Résumé de commande */}
          <div className="lg:col-span-1">
                             <div className="bg-gray-100 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Résumé de commande</h2>
                <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span className="text-gray-600">1 articles</span>
                    <span className="font-medium">{subtotal} FCFA</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Livraison</span>
                    <span className="font-medium">{shipping} FCFA</span>
                </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">{total} FCFA</span>
                </div>
              </div>
                <button 
                  onClick={handleCommander}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  COMMANDER
              </button>
            </div>
          </div>
        </div>
        </div>

                 {/* Section Produits recommandés */}
         <div className="mb-8">
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Avez-vous besoin de cela ?</h2>
          
                                                                                                                                                                                                                                                                                                                                                               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center">
              {recommendedProducts.map((product) => (
                                 <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                   <div className="flex flex-col h-full">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={112} 
                    height={112} 
                    className="w-28 h-28 object-contain mb-2" 
                  />
                  <h3 className="mt-2 font-semibold text-center text-sm w-full">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) =>
                      i < product.rating
                        ? <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                        : <FaRegStar key={i} className="text-yellow-400 w-4 h-4" />
                    )}
                    <span className="text-sm text-gray-600 ml-2">{product.reviews} avis</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1 mb-2 line-clamp-2">{product.description}</p>
                  <div className="mt-1 mb-2 font-bold">{product.price}f</div>
                                     <button 
                     onClick={() => handleAddToCart(product.id)}
                     className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
                   >
                     Ajouter au panier
                   </button>
                   </div>
                 </div>
               ))}
             </div>
        </div>
      </div>
    </div>
  );
};

export default PanierPage; 