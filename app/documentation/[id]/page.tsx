'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

export default function PlantDetailPage() {
  const params = useParams();
  const router = useRouter();
  const plantId = typeof params.id === 'string' ? parseInt(params.id, 10) : 1;

  // Déterminer si c'est une plante d'intérieur ou d'extérieur
  const isInteriorPlant = plantId <= 16; // Les plantes d'intérieur ont des IDs de 1 à 16
  const imagePath = isInteriorPlant ? "/images/plante1.png" : "/images/plant1.png";

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <div className="text-sm text-gray-600 mb-4">
        {isInteriorPlant ? "Plante d'intérieur" : "Plante d'extérieur"} {'>'} <span className="text-black font-semibold">Aglaonème</span>
      </div>

      {/* Main content */}
      <div className="bg-white w-full p-4 md:p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image and Characteristics */}
        <div className="w-full  lg:w-1/4  items-center lg:items-start">
          {/* Image */}
          <Image
            src={imagePath}
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
              <p>🌟 À garder hors de la portée des animaux domestiques</p>
              <p>🌟 À garder hors de la portée des animaux domestiques</p>
              <p>🌟 Un choix varié de couleurs et de textures de feuilles</p>
            </div>

            {/* Caractéristiques */}
            <div className="bg-white border border-gray-200 rounded shadow text-sm">
              <h3 className="bg-gray-100 font-semibold p-2 border-b border-gray-200 text-center">Caractéristiques</h3>
              <table className="w-full text-center">
                <tbody>
                  <tr className="border-t">
                    <td className="p-2 font-medium">Hauteur</td>
                    <td className="p-2">12cm</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 font-medium">Maturité</td>
                    <td className="p-2">12cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      

        {/* Right Column - Details */}
        <div className="flex-1 w-full">
          <h1 className="text-2xl font-bold">Aglaonème</h1>

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
            onClick={() => {
              // Ici vous pourriez ajouter la logique pour ajouter au panier
              // Par exemple : addToCart(plantId, productName, price);
              console.log(`Produit ${plantId} ajouté au panier`);
              
              // Rediriger vers la page panier
              router.push('/panier');
            }}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* Continue shopping link */}
      <div className="mt-4 text-green-600 font-medium cursor-pointer flex items-center gap-2">
        ← POURSUIVRE LES ACHATS
      </div>

      {/* Description */}
      <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm text-gray-700">
          L'Aglaonème, connu sous son nom latin Aglaonema, est une splendide plante à feuillage ornemental originaire d'Asie du Sud-Est. Ses feuilles, véritables points de mire, apportent une touche d'élégance à n'importe quelle pièce. Vous pouvez choisir parmi des variétés de feuilles panachées, allant des teintes de vert clair et de vert foncé, ou encore vert et rouge. Facile à entretenir, l'Aglaonème contribue également à purifier l'air intérieur. Elle prospère dans des températures comprises entre +20 et +25 °C. Arrosez-la régulièrement avec de l'eau non calcaire, idéalement tempérée, et vaporisez-la légèrement. Appliquez un engrais pour plantes vertes une fois par mois. Attention : Gardez cette plante hors de portée des enfants et des animaux domestiques, car toutes les parties de l'Aglaonème sont toxiques. La sève peut provoquer des irritations cutanées, il est donc recommandé de porter des gants lors du rempotage.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Nos conseils d'entretien pour l'Aglaonème
      </h2>

      {/* Conseils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
        {/* Exposition */}
        <div>
          <Image src="/images/exposition.png" alt="Exposition" width={35} height={35} className="mx-auto mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Exposition</h3>
          <p className="text-sm ">
            Cette plante préfère une lumière indirecte, mais tolère aussi les zones légèrement ombragées. Évitez de l'exposer à la lumière directe du soleil, qui pourrait brûler ses feuilles.
          </p>
        </div>

        {/* Entretien */}
        <div>
          <Image src="/images/entretien.png" alt="Entretien" width={35} height={35} className="mx-auto mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Entretien</h3>
          <p className="text-sm ">
            L'Aglaonème est une plante d'intérieur facile à entretenir, idéale pour purifier l'air. Veillez à nettoyer régulièrement ses feuilles pour retirer la poussière.
          </p>
        </div>

        {/* Arrosage */}
        <div>
          <Image src="/images/arrosage.png" alt="Arrosage" width={35} height={35} className="mx-auto mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Arrosage</h3>
          <p className="text-sm ">
            Arrosez régulièrement avec de l'eau non calcaire à température ambiante. Vaporisez légèrement les feuilles, en particulier en hiver.
          </p>
        </div>

        {/* Toxicité */}
        <div>
          <Image src="/images/toxicite.png" alt="Toxicité" width={35} height={35} className="mx-auto mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Toxicité</h3>
          <p className="text-sm ">
            Toutes les parties de l'Aglaonème sont toxiques. Tenez-la hors de portée des enfants et des animaux. Portez des gants lors de la manipulation.
          </p>
        </div>
      </div>

      {/* Avis client */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-orange-500 mb-4">Avis</h3>
        <div className="bg-white border border-gray-200 rounded shadow text-sm">
          <table className="w-full">
            <tbody>
              <tr className="border-t">
                <td className="p-4 w-1/4 border-r">
                  <p className="font-semibold mb-2">George DANSSOU</p>
                  <p className="text-gray-500 text-sm">Avis déposé le</p>
                  <p className="text-gray-500 text-sm font-bold">17/06/24</p>
                </td>
                <td className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-orange-500 text-lg">
                      {'★★★★★'}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">4/5</span>
                  </div>
                  <p className="text-sm">
                    Après avoir acheté un Aglaonème, vous serez ravi par son feuillage luxuriant et ses couleurs variées, qui apportent une touche élégante à n'importe quelle pièce. C'est une plante d'intérieur facile à entretenir, idéale pour ceux qui recherchent une option décorative sans trop de contraintes.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
