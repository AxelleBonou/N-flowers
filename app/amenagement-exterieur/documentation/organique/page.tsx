'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OrganiquePage = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
         {/* Breadcrumb */}
      <div className="text-sm  mb-4">
        Aménagement extérieur {'>'} Angrais de croissance sang et corne 800g
      </div>
     
      <div className="bg-white w-full p-4 md:p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image and Characteristics */}
        <div className="w-full  lg:w-1/4  items-center lg:items-start">
          {/* Image */}
          <Image
            src="/images/engrais1.png"
            alt="Aglaonema"
            width={200}
            height={200}
            className="rounded bg-gray-100"
          />
        </div>
          {/* Features and Caractéristiques */}
          <div className="mt-6">
            {/* Features */}
            <div className="space-y-2 text-sm text-gray-700 mb-4">
            <p>✔ Maintien à l'abri de la lumière</p>
            <p>✔Stockage hors de portée des enfants et des animaux</p>
            <p>✔Conservation dans un endroit sec</p>
            </div>

            {/* Review Section from Image */}
            <div className="bg-white border border-gray-200 rounded shadow p-4 text-sm max-w-sm mx-auto lg:mx-0">
              <div className="flex items-start">
                <div className="pr-4 border-r border-gray-200 mr-4 flex-shrink-0">
                  <div className="font-semibold text-gray-800">DANSSOU Osée</div>
                  <div className="text-xs text-gray-500">Avis déposé le 19/02/24</div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-gray-500 text-sm">4/5</span>
                  </div>
                  <p className="text-gray-700 mt-0.5 leading-tight">
                    Idéal pour ceux qui recherchent
                    un engrais efficace et respec-
                    tueux de l'environnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
      

        {/* Right Column - Details */}
        <div className="flex-1 w-full">
          <h1 className="text-2xl font-bold">Angrais de croissance sang 
          et corne 800g</h1>

          {/* Rating and Price */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-600">12 avis</span>
            </div>
            <div className="text-2xl font-bold mt-2">5000f</div>
          </div>

          {/* Usage text */}
          <p className="mt-4 text-sm text-gray-700">
            Elle est principalement utilisée comme plante d'intérieur décorative, appréciée pour son feuillage coloré et sa capacité à prospérer dans des conditions de faible luminosité. Elle est idéale pour apporter une touche de verdure dans les espaces intérieurs, tels que les bureaux, les salons ou les chambres.
          </p>

          <button 
            onClick={() => router.push('/documentation/exterior')}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Ajouter au panier
          </button>
        </div>
      </div>

     

      {/* Section Description */}
      <div className="bg-gray-100 mt-20 p-4">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p className="text-gray-700 mb-4">
          L'engrais "sang et corne" est un fertilisant organique largement utilisé pour favoriser la croissance des plantes. Il est composé principalement de sang
          séché (issu de l'industrie de la viande) et de corne broyée. Voici un aperçu des deux composants:
        </p>
        <h4 className="font-semibold text-green-600 mb-1">Sang séché</h4>
        <p className="text-gray-700 mb-4">
          Le sang séché est riche en azote, un élément essentiel pour la croissance des plantes, notamment pour le développement des feuilles et des tiges. L'azote est libéré
          rapidement dans le sol, ce qui en fait un excellent booster pour les plantes qui ont besoin d'une croissance rapide
        </p>
        <h4 className="font-semibold  text-green-600 mb-1">Corne broyée</h4>
        <p className="text-gray-700">
          La corne est une source d'azote à libération lente. Contrairement au sang séché, l'azote contenu dans la corne broyée se libère lentement au fil du temps, ce qui
          permet d'assurer une fertilisation continue et à long terme des plantes. La corne broyée est également riche en phosphore, ce qui aide au développement des racines.
        </p>
      </div>

      {/* Section Autres produits */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8 text-center">Autres produits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais1.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">4000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais2.png" // Placeholder image, replace with actual image path2
              alt="Engrais de croissance anti-brunissement"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance anti-brunissement</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★☆ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3500f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais3.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

           {/* Product Card 4 */}
           <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais1.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance corne torrifiée 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance corne torrifiée 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

           {/* Product Card 5 */}
           <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais5.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3500f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

          {/* Product Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais5.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">4000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

          {/* Product Card 7 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais1.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance anti-brunissement"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance anti-brunissement</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★☆ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3500f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

          {/* Product Card 8 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais2.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

           {/* Product Card 9 */}
           <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais9.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance corne torrifiée 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance corne torrifiée 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3000f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

           {/* Product Card 10 */}
           <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <Image
              src="/images/engrais11.png" // Placeholder image, replace with actual image path
              alt="Engrais de croissance sang et corne 800 g"
              width={150}
              height={150}
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-sm mb-1">Engrais de croissance sang et corne 800 g</h4>
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              ★★★★★ <span className="text-gray-600 text-xs">2 avis</span>
            </div>
            <p className="text-gray-700 text-xs mb-2">Cet angrais de croissance, à base de sang et de...</p>
            <div className="font-bold text-sm mb-4">3500f</div>
            <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Ajouter au panier</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganiquePage;
