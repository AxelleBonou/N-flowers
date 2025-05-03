import React from "react";

const PanierPage = () => {
  // Exemple de données de panier
  const cartItems = [
    {
      id: 1,
      name: "Orchidée Phalaenopsis",
      price: 29.99,
      quantity: 1,
      image: "/images/plant1.png",
    },
    {
      id: 2,
      name: "Ficus Lyrata",
      price: 39.99,
      quantity: 1,
      image: "/images/plant1.png",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mon Panier</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Produits</h2>
              </div>
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden mr-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">{item.price.toFixed(2)} €</p>
                    </div>
                    <div className="flex items-center">
                      <button className="px-2 py-1 border rounded-md">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="px-2 py-1 border rounded-md">+</button>
                    </div>
                    <div className="ml-4">
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <div className="border-t pt-2 font-semibold flex justify-between">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
              <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-6">Découvrez nos produits et ajoutez-les à votre panier.</p>
          <a href="/plantes" className="inline-block bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 transition-colors">
            Voir les produits
          </a>
        </div>
      )}
    </div>
  );
};

export default PanierPage; 