'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function ExteriorPlantPage() {
  const router = useRouter();

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="text-xs  mb-4">
        Plante d'extérieur {'>'} Thuja
      </div>

      {/* Fiche produit */}
      {/* Main content */}
      <div className="bg-white w-full p-4 md:p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image and Characteristics */}
        <div className="w-full  lg:w-1/4  items-center lg:items-start">
          {/* Image */}
          <Image
            src="/images/plant1.png"
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
              <p>🌟 Conifère à feuillage persistant et dense</p>
              <p>🌟Idéal pour créer des haies et des brise-vue naturels</p>
              <p>🌟 À planter dans un sol bien drainé et ensoleillé</p>
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
          <h1 className="text-2xl font-bold">Thuja</h1>

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
            Elle est principalement utilisée comme plante d'intérieur décorative, 
            appréciée pour son feuillage coloré et sa capacité à prospérer dans des 
            conditions de faible luminosité. Elle est idéale pour apporter une touche 
            de verdure dans les espaces intérieurs, tels que les bureaux, les salons 
            ou les chambres.
          </p>

          <button 
            onClick={() => router.push('/achat/infocommande')}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            commander
          </button>
        </div>
      </div>

      {/* Continue shopping link */}
      <div className="mt-4 text-green-600 font-medium cursor-pointer flex items-center gap-2">
        ← POURSUIVRE LES ACHATS
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <div className="font-semibold text-lg mb-2">Description</div>
        <div className="text-gray-700 text-sm">
          Le Thuja est un conifère persistant largement utilisé pour former des haies ou des brise-vues naturels grâce à son feuillage dense et vert foncé. Capable de s'élever jusqu'à 20 mètres selon les espèces, il offre une croissance régulière et structurée, idéale pour l'aménagement paysager. Rustique et adaptable, le Thuja prospère dans diverses conditions climatiques, préférant les sols bien drainés et une exposition ensoleillée à mi-ombre. Toutefois, il est important de noter que toutes ses parties sont toxiques en cas d'ingestion, ce qui en fait une plante à manipuler avec précaution, surtout autour des animaux domestiques et des enfants.
        </div>
      </div>

      {/* Conseils d'entretien */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="font-bold text-lg mb-6">Nos conseils d'entretien pour le Thuja</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {/* Exposition */}
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
          <Image src="/images/exposition.png" alt="Exposition" width={35} height={35} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Exposition</div>
            <div className="text-xs text-gray-600 text-center">Le Thuja requiert un emplacement en plein soleil ou mi-ombre, il peut tolérer une ombre partielle, mais l'aucun ne donnera des sujets vigoureux si l'emplacement est lumineux.</div>
          </div>
          {/* Entretien */}
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
          <Image src="/images/entretien.png" alt="Entretien" width={35} height={35} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Entretien</div>
            <div className="text-xs text-gray-600 text-center">Une plante rustique et facile à entretenir. Tailler les jeunes sujets pour encourager une belle forme, et il vaut mieux éviter de tailler trop sévèrement sur le vieux bois.</div>
          </div>
          {/* Arrosage */}
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
          <Image src="/images/arrosage.png" alt="Arrosage" width={35} height={35} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Arrosage</div>
            <div className="text-xs text-gray-600 text-center">Après la plantation, arroser régulièrement, surtout pendant les premiers mois. Une fois bien établi, le Thuja résiste à la sécheresse mais apprécie des arrosages modérés en été.</div>
          </div>
          {/* Toxicité */}
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
          <Image src="/images/toxicite.png" alt="Toxicité" width={35} height={35} className="mx-auto mb-2" />
            <div className="font-semibold mb-1">Toxicité</div>
            <div className="text-xs text-gray-600 text-center">Le Thuja est toxique sous toutes ses parties. Il est important de le tenir hors de portée des enfants et des animaux domestiques, car l'ingestion peut entraîner des troubles graves de la santé.</div>
          </div>
        </div>
      </div>

      {/* Avis */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-10">
        <div className="font-semibold text-lg mb-2 text-gray-700">Avis</div>
        <div className="text-gray-400 text-sm italic">Aucun avis</div>
      </div>
    </div>
  );
} 