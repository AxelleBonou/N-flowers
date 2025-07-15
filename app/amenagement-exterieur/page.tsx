'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Engrais {
  id: number;
  nom: string;
  prix: string;
  avis: number;
  note: number;
  image: string;
  description: string;
}

const engrais = [
  {
    id: 1,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '4000f',
    avis: 2,
    note: 5,
    image: '/images/engrais1.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 2,
    nom: 'Engrais de croissance anti-brunissement',
    prix: '3500f',
    avis: 2,
    note: 4,
    image: '/images/engrais2.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 3,
    nom: 'Engrais de croissance corne torréfiée 800 g',
    prix: '3000f',
    avis: 2,
    note: 4,
    image: '/images/engrais3.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 4,
    nom: 'Engrais de croissance corne torréfiée 800 g',
    prix: '3000f',
    avis: 2,
    note: 4,
    image: '/images/engrais4.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 5,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '3600f',
    avis: 2,
    note: 5,
    image: '/images/engrais5.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 6,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '4000f',
    avis: 2,
    note: 5,
    image: '/images/engrais9.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 7,
    nom: 'Engrais de croissance anti-brunissement',
    prix: '3600f',
    avis: 2,
    note: 4,
    image: '/images/engrais11.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 8,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '3000f',
    avis: 2,
    note: 5,
    image: '/images/engrais8.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 9,
    nom: 'Engrais de croissance corne torréfiée 800 g',
    prix: '3000f',
    avis: 2,
    note: 4,
    image: '/images/engrais9.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 10,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '3600f',
    avis: 2,
    note: 5,
    image: '/images/engrais10.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 11,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '4000f',
    avis: 2,
    note: 5,
    image: '/images/engrais3.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 12,
    nom: 'Engrais de croissance anti-brunissement',
    prix: '3600f',
    avis: 2,
    note: 4,
    image: '/images/engrais1.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 13,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '3000f',
    avis: 2,
    note: 5,
    image: '/images/engrais14.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 14,
    nom: 'Engrais de croissance corne torréfiée 800 g',
    prix: '3000f',
    avis: 2,
    note: 4,
    image: '/images/engrais4.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 15,
    nom: 'Engrais de croissance corne torréfiée 800 g',
    prix: '3500f',
    avis: 2,
    note: 4,
    image: '/images/engrais5.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
  {
    id: 16,
    nom: 'Engrais de croissance sang et corne 800 g',
    prix: '5500f',
    avis: 2,
    note: 5,
    image: '/images/engrais11.png',
    description: "Cet engrais de croissance, à base de sang et de..."
  },
];

const bacs = [
  { id: 1, nom: 'Bac en osier carré', prix: '5000f', avis: 3, note: 5, image: '/images/pot1.png', description: "Bac en osier naturel, idéal pour la décoration extérieure." },
  { id: 2, nom: 'Bac potager en métal', prix: '7500f', avis: 2, note: 4, image: '/images/pot2.png', description: "Bac potager robuste en métal pour vos cultures." },
  { id: 3, nom: 'Bac potager en bois', prix: '6000f', avis: 4, note: 5, image: '/images/pot3.png', description: "Bac potager en bois naturel, parfait pour le jardinage." },
  { id: 4, nom: 'Bac potager en osier', prix: '4500f', avis: 3, note: 4, image: '/images/pot4.png', description: "Bac potager en osier tressé, esthétique et pratique." },
  { id: 5, nom: 'Bac rectangulaire en bois', prix: '8000f', avis: 2, note: 5, image: '/images/pot5.png', description: "Bac rectangulaire en bois pour grandes plantations." },
  { id: 6, nom: 'Bac rectangulaire en métal', prix: '3000f', avis: 3, note: 4, image: '/images/pot6.png', description: "Bac rectangulaire en métal, résistant aux intempéries." },
  { id: 7, nom: 'Bac rectangulaire en plastique', prix: '9000f', avis: 2, note: 5, image: '/images/pot7.png', description: "Bac rectangulaire en plastique léger et durable." },
  { id: 8, nom: 'Bac potager sur pieds', prix: '6500f', avis: 3, note: 4, image: '/images/pot8.png', description: "Bac potager sur pieds pour un jardinage ergonomique." },
  { id: 9, nom: 'Bac potager en bois sur pieds', prix: '5500f', avis: 2, note: 5, image: '/images/pot9.png', description: "Bac potager en bois surélevé pour balcon ou terrasse." },
  { id: 10, nom: 'Bac potager en plastique', prix: '7000f', avis: 4, note: 5, image: '/images/pot10.png', description: "Bac potager en plastique facile à déplacer." },
  { id: 11, nom: 'Jardinière en bois', prix: '12000f', avis: 2, note: 4, image: '/images/pot11.png', description: "Jardinière en bois pour fleurs et plantes aromatiques." },
  { id: 12, nom: 'Jardinière en métal', prix: '4000f', avis: 3, note: 5, image: '/images/pot12.png', description: "Jardinière en métal design et résistante." },
  { id: 13, nom: 'Jardinière en plastique', prix: '6000f', avis: 2, note: 4, image: '/images/pot13.png', description: "Jardinière en plastique colorée et légère." },
  { id: 14, nom: 'Jardinière sur pieds', prix: '8500f', avis: 3, note: 5, image: '/images/pot14.png', description: "Jardinière sur pieds pour balcon ou terrasse." },
  { id: 15, nom: 'Bac composteur en bois', prix: '9500f', avis: 2, note: 4, image: '/images/pot15.png', description: "Composteur en bois pour déchets organiques." },
  { id: 16, nom: 'Bac composteur en plastique', prix: '7500f', avis: 3, note: 5, image: '/images/pot.png', description: "Composteur en plastique pratique et léger." },
];

const pots = [
  {
    id: 1,
    nom: 'Pot de fleurs en céramique',
    prix: '5000f',
    avis: 3,
    note: 5,
    image: '/images/pot1.png',
    description: "Pot de fleurs élégant en céramique, parfait pour vos plantes d'intérieur"
  },
  {
    id: 2,
    nom: 'Bac à fleurs rectangulaire',
    prix: '7500f',
    avis: 2,
    note: 4,
    image: '/images/pot2.png',
    description: "Bac rectangulaire idéal pour vos plantations en extérieur"
  },
  {
    id: 3,
    nom: 'Jardinière suspendue',
    prix: '6000f',
    avis: 4,
    note: 5,
    image: '/images/pot3.png',
    description: "Jardinière suspendue pour créer un jardin vertical"
  },
  {
    id: 4,
    nom: 'Pot décoratif en terre cuite',
    prix: '4500f',
    avis: 3,
    note: 4,
    image: '/images/pot4.png',
    description: "Pot traditionnel en terre cuite pour un style naturel"
  },
  {
    id: 5,
    nom: 'Bac à fleurs moderne',
    prix: '8000f',
    avis: 2,
    note: 5,
    image: '/images/pot5.png',
    description: "Bac moderne avec design épuré"
  },
  {
    id: 6,
    nom: 'Pot de fleurs en plastique',
    prix: '3000f',
    avis: 3,
    note: 4,
    image: '/images/pot6.png',
    description: "Pot léger et résistant en plastique"
  },
  {
    id: 7,
    nom: 'Jardinière en bois',
    prix: '9000f',
    avis: 2,
    note: 5,
    image: '/images/pot7.png',
    description: "Jardinière en bois naturel pour un style rustique"
  },
  {
    id: 8,
    nom: 'Pot de fleurs en métal',
    prix: '6500f',
    avis: 3,
    note: 4,
    image: '/images/pot8.png',
    description: "Pot en métal avec finition élégante"
  },
  {
    id: 9,
    nom: 'Bac à fleurs carré',
    prix: '5500f',
    avis: 2,
    note: 5,
    image: '/images/pot9.png',
    description: "Bac carré moderne pour vos plantes"
  },
  {
    id: 10,
    nom: 'Pot de fleurs en verre',
    prix: '7000f',
    avis: 4,
    note: 5,
    image: '/images/pot10.png',
    description: "Pot en verre transparent pour un effet unique"
  },
  {
    id: 11,
    nom: 'Jardinière en pierre',
    prix: '12000f',
    avis: 2,
    note: 4,
    image: '/images/pot11.png',
    description: "Jardinière en pierre naturelle"
  },
  {
    id: 12,
    nom: 'Pot de fleurs en résine',
    prix: '4000f',
    avis: 3,
    note: 5,
    image: '/images/pot12.png',
    description: "Pot en résine résistant aux intempéries"
  },
  {
    id: 13,
    nom: 'Bac à fleurs ovale',
    prix: '6000f',
    avis: 2,
    note: 4,
    image: '/images/pot13.png',
    description: "Bac ovale pour un design original"
  },
  {
    id: 14,
    nom: 'Pot de fleurs en béton',
    prix: '8500f',
    avis: 3,
    note: 5,
    image: '/images/pot14.png',
    description: "Pot en béton pour un style industriel"
  },
  {
    id: 15,
    nom: 'Jardinière en zinc',
    prix: '9500f',
    avis: 2,
    note: 4,
    image: '/images/pot15.png',
    description: "Jardinière en zinc avec finition métallique"
  },
  {
    id: 16,
    nom: 'Pot de fleurs en grès',
    prix: '7500f',
    avis: 3,
    note: 5,
    image: '/images/pot.png',
    description: "Pot en grès traditionnel"
  }
];

const produitsParPage = 16;

function ProductCard({ product }: { product: Engrais }) {
  const router = useRouter();

  const handleAddToCart = () => {
    // Déterminer le type d'engrais en fonction du nom du produit
    let type = 'organique'; // type par défaut
    if (product.nom.toLowerCase().includes('intérieur')) {
      type = 'interieur';
    } else if (product.nom.toLowerCase().includes('fleur')) {
      type = 'fleur';
    } else if (product.nom.toLowerCase().includes('gazon')) {
      type = 'gazon';
    }
    
    // Rediriger vers la page de documentation appropriée
    router.push(`/amenagement-exterieur/documentation/${type}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="relative h-28 w-24 mb-2 flex items-center justify-center">
        <Image src={product.image} alt={product.nom} fill style={{objectFit:'contain'}} />
      </div>
      <h3 className="text-base font-semibold mb-1 text-center min-h-[48px]">{product.nom}</h3>
      <div className="flex items-center mb-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">
            {i < product.note ? '★' : '☆'}
          </span>
        ))}
        <span className="text-gray-600 text-xs ml-2">{product.avis} avis</span>
      </div>
      <p className="text-xs text-gray-600 mb-2 text-center min-h-[32px]">{product.description}</p>
      <p className="text-green-700 font-bold mb-2">{product.prix}</p>
      <button 
        onClick={handleAddToCart}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

const Page = () => {
  const router = useRouter();
  const [pageActuelle, setPageActuelle] = useState(1);
  const [activeButton, setActiveButton] = useState('organique');
  const totalPages = Math.min(Math.ceil((activeButton === 'pots' ? pots.length : engrais.length) / produitsParPage), 10);
  const indexDepart = (pageActuelle - 1) * produitsParPage;
  const produitsAffiches = activeButton === 'pots' 
    ? pots.slice(indexDepart, indexDepart + produitsParPage)
    : activeButton === 'bacs'
      ? bacs.slice(indexDepart, indexDepart + produitsParPage)
      : engrais.slice(indexDepart, indexDepart + produitsParPage);

  return (
    <>
      <div className="px-4 md:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <span>Aménagement intérieur</span> &gt;{' '}
          <span className="font-medium">Angrais et Pot de fleurs, bacs et jardinière</span>
        </nav>

        {/* Image principale */}
        <div className="w-full max-w-5xl mx-auto mb-8">
          <Image
            src={activeButton === 'pots' || activeButton === 'bacs' ? "/images/pot.png" : "/images/engrais.png"}
            alt={activeButton === 'pots' || activeButton === 'bacs' ? "Pots de fleurs, bacs et jardinières" : "Engrais"}
            width={1266}
            height={293}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className={`font-bold text-gray-800 mb-2 ${activeButton === 'pots' || activeButton === 'bacs' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-5xl'}`}>
            {activeButton === 'organique' ? "Engrais organiques" :
             activeButton === 'interieur' ? "Engrais pour plantes d'intérieur" :
             activeButton === 'fleur' ? "Engrais pour fleurs" :
             activeButton === 'gazon' ? "Engrais pour gazon" :
             activeButton === 'bacs' ? "bacs et jardinières" :
             "Pot de fleurs"}
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-justify mb-8 max-w-4xl mx-auto">
          {activeButton === 'organique' ? (
            "Les engrais organiques sont des fertilisants naturels dérivés de matières végétales ou animales. Contrairement aux engrais chimiques, ils améliorent la structure du sol tout en fournissant des nutriments essentiels aux plantes. Les engrais organiques courants comprennent le compost, le fumier, les algues, la farine d'os, et les coquilles d'œufs. Ils libèrent les nutriments lentement, favorisant une croissance saine et durable des plantes tout en encourageant la vie microbienne bénéfique dans le sol. Leur utilisation contribue également à la réduction des déchets et à la promotion de pratiques de jardinage respectueuses de l'environnement."
          ) : activeButton === 'interieur' ? (
            "Les engrais pour plantes d'intérieur sont formulés pour répondre aux besoins spécifiques des plantes qui poussent à l'intérieur, où les conditions de lumière, d'humidité et de température peuvent être très différentes de celles à l'extérieur."
          ) : activeButton === 'fleur' ? (
            "Les engrais pour fleurs sont spécialement formulés pour encourager une floraison abondante et prolongée. En fournissant un mélange équilibré de nutriments essentiels comme l'azote, le phosphore et le potassium, ces engrais soutiennent non seulement la santé générale des plantes, mais aussi leur capacité à produire des fleurs éclatantes et durables. L'application régulière de ces engrais garantit que vos fleurs restent vigoureuses tout au long de la saison, maximisant la beauté de votre jardin."
          ) : activeButton === 'gazon' ? (
            "Les engrais pour gazon sont formulés pour améliorer la densité et la vitalité du gazon en fournissant les nutriments essentiels nécessaires à sa croissance. En enrichissant le sol, ils favorisent une couleur verte plus intense et une santé générale optimale du gazon."
          ) : (
            "Découvrez notre sélection de pots de fleurs, bacs et jardinières pour embellir votre espace extérieur. Nous proposons une large gamme de contenants adaptés à tous les types de plantes, du plus petit pot pour vos plantes d'intérieur aux grands bacs pour vos plantations extérieures. Nos produits sont choisis pour leur qualité, leur durabilité et leur esthétique."
          )}
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
          <button
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'organique' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('organique');
              router.push('/amenagement-exterieur');
            }}
          >
            Engrais organique
          </button>
          <button 
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'interieur' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('interieur');
              router.push('/amenagement-exterieur');
            }}
          >
            Engrais pour plantes d'intérieurs
          </button>
          <button 
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'fleur' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('fleur');
              router.push('/amenagement-exterieur');
            }}
          >
            Engrais pour fleur
          </button>
          <button 
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'gazon' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('gazon');
              router.push('/amenagement-exterieur');
            }}
          >
            Engrais pour gazon
          </button>
          <button 
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'bacs' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('bacs');
              router.push('/amenagement-exterieur');
            }}
          >
            bacs et jardinière
          </button>
          <button 
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
              activeButton === 'pots' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveButton('pots');
              router.push('/amenagement-exterieur');
            }}
          >
            Pot de fleurs
          </button>
        </div>

        {/* Grille des engrais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {produitsAffiches.map((engrais) => (
            <ProductCard key={engrais.id} product={engrais} />
          ))}
        </div>
      </div> {/* Close main container after grid */}

      {/* Bannière verte */}
      <div
        className="w-full mb-8 p-8"
        style={{
          background: "linear-gradient(90deg, #176a2b 0%, #0a0f0a 100%)",
          color: "white"
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Pour des plantes en pleine santé sans<br />recourir aux pesticides
        </h2>
        <p className="text-sm md:text-base">
          Optez pour nos engrais naturels : engrais de croissance, engrais 100 % organiques spécialement sélectionnés pour la culture biologique.
          Parmi nos produits, vous trouverez l'engrais tourteau de ricin, l'engrais complet universel, l'engrais à corne broyée, ainsi que des engrais spécifiques pour tomates, fraisiers et rosiers, sans oublier la poudre d'orties.
        </p>
      </div>

      <div className="px-4 md:px-16 py-8"> {/* Open new main container for pagination */}
        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setPageActuelle(index + 1)}
              className={`px-3 py-1 rounded-full ${
                pageActuelle === index + 1
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
