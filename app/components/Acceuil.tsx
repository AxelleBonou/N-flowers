"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Product {
  image: string;
  name: string;
  desc: string;
  price: number;
  rating: number;
}

interface ProductCarouselProps {
  title: string;
  highlight: string;
  products: Product[];
}

function ProductCarousel({ title, highlight, products }: ProductCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;
  const handlePrev = () => setStartIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const handleNext = () => setStartIndex((prev) => (prev + 1) % products.length);
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        {title.split(highlight)[0]}
        <span className="text-green-700">{highlight}</span>
        {title.split(highlight)[1]}
      </h2>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <IoIosArrowBack size={28} className="text-green-700" />
        </button>
        <div className="grid grid-cols-5 gap-8 flex-1 mx-4">
          {[...Array(visibleCount)].map((_, offset) => {
            const prod = products[(startIndex + offset) % products.length];
            return (
              <div key={offset} className="flex flex-col items-start bg-white p-4 w-44">
                <Image src={prod.image} alt={prod.name} width={112} height={112} className="w-28 h-28 object-contain mb-2" />
                <h3 className="mt-2 font-semibold text-center text-sm w-full">{prod.name}</h3>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) =>
                    i < prod.rating
                      ? <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      : <FaRegStar key={i} className="text-yellow-400 w-4 h-4" />
                  )}
                  <span className="text-sm text-gray-600 ml-2">2 avis</span>
                </div>
                <p className="text-gray-500 text-xs text-center mt-1 mb-2 line-clamp-2">{prod.desc}</p>
                <div className="mt-1 mb-2 font-bold">{prod.price}f</div>
                <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 w-full text-sm">
                  Ajouter au panier
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={handleNext} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <IoIosArrowForward size={28} className="text-green-700" />
        </button>
      </div>
    </div>
  );
}

// --- Données exemples ---
const produitsRecommandes: Product[] = [
  { image: "/images/engrais1.png", name: "Engrais de croissance sang et corne 800 g", desc: "Cet engrais de croissance, à base de sang et de...", price: 4000, rating: 5 },
  { image: "/images/engrais2.png", name: "Engrais de croissance anti-brunissement", desc: "Cet engrais de croissance, à base de sang et de...", price: 4200, rating: 4 },
  { image: "/images/engrais3.png", name: "Engrais de croissance sang et corne 800 g", desc: "Cet engrais de croissance, à base de sang et de...", price: 3500, rating: 5 },
  { image: "/images/engrais4.png", name: "Engrais de croissance corne torrifiée 800 g", desc: "Cet engrais de croissance, à base de sang et de...", price: 4000, rating: 5 },
  { image: "/images/engrais5.png", name: "Engrais de croissance sang et corne 800 g", desc: "Cet engrais de croissance, à base de sang et de...", price: 3000, rating: 5 },
];

const selectionMoment = [
  {
    image: "/images/secateur.png",
    name: "Sécateur ergo bahco pxs2 pour droitier taille S",
    desc: "",
    price: 3500,
    rating: 5,
  },
  {
    image: "/images/rouleau.png",
    name: "Rouleau de jardin",
    desc: "",
    price: 2500,
    rating: 4,
  },
  {
    image: "/images/outils.png",
    name: "Outils de jardinage indispensables pour la taille",
    desc: "",
    price: 3500,
    rating: 5,
  },
  {
    image: "/images/tondeuse1.png",
    name: "Tondeuse à gazon manuelle",
    desc: "",
    price: 2500,
    rating: 5,
  },
  {
    image: "/images/tondeuse2.png",
    name: "Tondeuse thermique tractée de coupe 43cm",
    desc: "",
    price: 5000,
    rating: 4,
  },
];

const products = [
  {
    image: "/images/plante1.png",
    name: "Phalaenopsis – Orchidée rose",
    desc: "Plante d'intérieur",
    newPrice: 5100,
    oldPrice: 6000,
  },
  {
    image: "/images/plante2.png",
    name: "Phalaenopsis – Orchidée",
    desc: "Plante d'intérieur",
    newPrice: 5100,
    oldPrice: 6000,
  },
  {
    image: "/images/plante3.png",
    name: "Phalaenopsis – rose",
    desc: "Plante d'intérieur",
    newPrice: 5100,
    oldPrice: 6000,
  },
  {
    image: "/images/plante4.png",
    name: "Phalaenopsis – Orchidée",
    desc: "Plante d'intérieur",
    newPrice: 5100,
    oldPrice: 6000,
  },
];

const Acceuil = () => {
  const avis = [
    {
      rating: 5,
      comment: "Très satisfait de mon expérience d'achat. Le processus de commande a été simple et efficace",
      author: "Marie L."
    },
    {
      rating: 5,
      comment: "Excellente qualité des plantes reçues. La livraison était rapide et soignée",
      author: "Pierre D."
    },
    {
      rating: 5,
      comment: "Service client très réactif et professionnel. Je recommande vivement !",
      author: "Sophie M."
    },
    {
      rating: 5,
      comment: "Les conseils donnés étaient précieux. Ma plante est magnifique !",
      author: "Jean B."
    }
  ];

  const [currentAvisIndex, setCurrentAvisIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [startIndexRecommande, setStartIndexRecommande] = useState(0);
  const [startIndexSelection, setStartIndexSelection] = useState(0);
  const visibleCount = 5;
  const visibleCountSelection = 5;

  const handlePrevAvis = () => {
    setCurrentAvisIndex((prev) => (prev === 0 ? avis.length - 1 : prev - 1));
  };

  const handleNextAvis = () => {
    setCurrentAvisIndex((prev) => (prev === avis.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => setStartIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const handleNext = () => setStartIndex((prev) => (prev + 1) % products.length);

  const handlePrevRecommande = () =>
    setStartIndexRecommande((prev) => (prev === 0 ? produitsRecommandes.length - 1 : prev - 1));
  const handleNextRecommande = () =>
    setStartIndexRecommande((prev) => (prev + 1) % produitsRecommandes.length);

  const handlePrevSelection = () =>
    setStartIndexSelection((prev) => (prev === 0 ? selectionMoment.length - 1 : prev - 1));
  const handleNextSelection = () =>
    setStartIndexSelection((prev) => (prev + 1) % selectionMoment.length);

  // Ajout de l'état pour le carrousel d'images
  const carouselImages = [
    "/images/carrousel1.png",
    "/images/carrousel2.png",
    "/images/carrousel3.png",
    "/images/carrousel4.png"
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const visibleCarouselCount = 4;
  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="">
      <Image
        src="/images/Group 80.png"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        priority
      />
    
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center p-6 md:p-10">
          Nos <span className="text-green-800">offres plantes</span> du mois
        </h1>
      </div>
      {/* Carrousel Plantes */}
      <div className="relative bg-white py-6 md:py-8">
        <div className="flex items-center justify-between max-w-full md:max-w-6xl mx-auto px-2 md:px-0">
          {/* Flèche gauche */}
          <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <IoIosArrowBack size={28} className="text-green-700" />
          </button>
          {/* Cartes produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 flex-1 mx-2 md:mx-4">
            {[0, 1, 2, 3].map((offset) => {
              const prod = products[(startIndex + offset) % products.length];
              return (
                <div
  key={offset}
  className="flex flex-col justify-between items-stretch border rounded-lg shadow p-4 bg-white w-full sm:w-44 h-full"
>
  <div className="flex flex-col flex-1">
    <div className="flex justify-center">
      <Image
        src={prod.image}
        alt={prod.name}
        width={112}
        height={112}
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-2"
      />
    </div>

    <h3 className="font-semibold text-center text-sm w-full min-h-[2rem]">{prod.name}</h3>

    <p className="text-gray-500 text-sm text-center min-h-[3rem]">{prod.desc}</p>

    <div className="flex items-center justify-center mt-2 min-h-[1.5rem]">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
      ))}
      <span className="text-sm text-gray-600 ml-2">2 avis</span>
    </div>

    <div className="mt-2 flex justify-center items-center gap-2 min-h-[1.5rem]">
      <span className="text-green-600 font-bold">{prod.newPrice}f</span>
      <span className="line-through text-gray-400">{prod.oldPrice}f</span>
    </div>
  </div>

  <button className="bg-green-600 text-white py-2 mt-4 rounded hover:bg-green-700 w-full">
    Ajouter au panier
  </button>
</div>


              );
            })}
          </div>
          {/* Flèche droite */}
          <button onClick={handleNext} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <IoIosArrowForward size={28} className="text-green-700" />
          </button>
        </div>
      </div>


      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center p-6 md:p-10">
          Nos <span className="text-green-800">catégories</span> à la une
        </h1>
      </div>

      {/* Section Articles */}
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/image.png"
                alt="Plantes nocives pour les animaux"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">28/06/24</p>
              <h3 className="font-semibold text-lg mb-2">
                Attention à ces plantes nocives pour les animaux
              </h3>
              <p className="text-gray-600 text-sm">
                Si les plantes et les fleurs embellissent aussi bien l'intérieur que l'extérieur de votre maison, elles peuvent néanmoins constituer un danger pour votre animal de compagnie.
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/plante-marc-de-cafe-7169-640-0.png"
                alt="Laurier rose"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">28/06/24</p>
              <h3 className="font-semibold text-lg mb-2">
                Tout ce que vous devez savoir pour avoir un beau laurier rose cette année
              </h3>
              <p className="text-gray-600 text-sm">
                En suivant nos recommandations, vous pourrez cultiver et entretenir votre magnifique laurier rose tout au long de l'année !
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="/images/TZJEOUQYHBHMPI3CIVHJ764OOA.png"
                alt="Marc de café au jardin"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">28/06/24</p>
              <h3 className="font-semibold text-lg mb-2">
                Découvrez comment utiliser le marc de café au jardin. Ne le jetez plus !
              </h3>
              <p className="text-gray-600 text-sm">
                Voici quelques astuces pour que votre café du matin contribue également à enrichir la qualité de votre potager !
              </p>
            </div>
          </div>
        </div>

        <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center p-6 md:p-10">
         Recommandés <span className="text-green-800">pour</span> vous
        </h1>
      </div>

      {/* Carrousel Recommandés pour vous */}
      <div className="relative bg-white py-8">
        <div className="flex items-center justify-between max-w-7xl  mx-auto">
          {/* Flèche gauche */}
          <button onClick={handlePrevRecommande} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <IoIosArrowBack size={28} className="text-green-700" />
          </button>
          {/* Cartes produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 flex-1 mx-2 md:mx-4">
            {[...Array(visibleCount)].map((_, offset) => {
              const prod = produitsRecommandes[(startIndexRecommande + offset) % produitsRecommandes.length];
              return (
                <div key={offset} className="flex flex-col items-start border rounded-lg shadow p-4 bg-white p-4 w-full sm:w-44">
                  <Image src={prod.image} alt={prod.name} width={112} height={112} className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-2" />
                  <h3 className="mt-2 font-semibold text-center text-sm w-full">{prod.name}</h3>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) =>
                      i < prod.rating
                        ? <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                        : <FaRegStar key={i} className="text-yellow-400 w-4 h-4" />
                    )}
                    <span className="text-sm text-gray-600 ml-2">2 avis</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1 mb-2 line-clamp-2">{prod.desc}</p>
                  <div className="mt-1 mb-2 font-bold">{prod.price}f</div>
                  <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 w-full text-sm">
                    Ajouter au panier
                  </button>
                </div>
              );
            })}
          </div>
          {/* Flèche droite */}
          <button
  onClick={handleNextRecommande}
  className="p-2 bg-white rounded-full shadow hover:bg-gray-100 ml-4" // ← ajoute ml-4 ou plus
>
  <IoIosArrowForward size={28} className="text-green-700" />
</button>
        </div>
      </div>
      
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center p-6 md:p-10">
         La <span className="text-green-800">sélection</span> du moment
        </h1>
      </div>
       
      {/* Carrousel sélection du moment */}
      <div className="relative bg-white py-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Flèche gauche */}
          <button onClick={handlePrevSelection} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <IoIosArrowBack size={28} className="text-green-700" />
          </button>
          {/* Cartes produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 flex-1 mx-2 md:mx-4">
            {[...Array(visibleCountSelection)].map((_, offset) => {
              const prod = selectionMoment[(startIndexSelection + offset) % selectionMoment.length];
              return (
                <div
  key={offset}
  className="flex flex-col items-center border rounded-lg shadow p-4 bg-white w-full sm:w-44 flex-1"
>
  <Image
    src={prod.image}
    alt={prod.name}
    width={144}
    height={144}
    className="w-24 h-24 sm:w-36 sm:h-36 object-contain mb-2"
  />

  {/* Titre avec hauteur fixe */}
  <h3 className="font-semibold text-center text-sm w-full mb-2 leading-tight min-h-[3rem]">
    {prod.name}
  </h3>

  {/* Étoiles avec hauteur fixe */}
  <div className="flex items-center justify-center w-full mb-2 min-h-[1.5rem]">
    {[...Array(5)].map((_, i) =>
      i < prod.rating ? (
        <FaStar key={i} className="text-yellow-400 w-5 h-5" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400 w-5 h-5" />
      )
    )}
  </div>

  {/* Prix avec hauteur fixe */}
  <div className="font-bold w-full text-center mb-4 text-base min-h-[1.5rem]">
    {prod.price}f
  </div>

  {/* Description avec hauteur fixe */}
  <p className="text-gray-500 text-xs text-center mb-2 w-full min-h-[3rem]">
    {prod.desc}
  </p>

  <button className="bg-green-700 text-white py-2 rounded hover:bg-green-900 w-full text-sm font-semibold mt-auto">
    Ajouter au panier
  </button>
</div>

              );
            })}
          </div>
          {/* Flèche droite */}
          <button
  onClick={handleNextRecommande}
  className="p-2 bg-white rounded-full shadow hover:bg-gray-100 ml-4" // ← ajoute ml-4 ou plus
>
  <IoIosArrowForward size={28} className="text-green-700" />
</button>
        </div>
      </div>

    </div>
    <div className="flex flex-col md:flex-row items-stretch my-8 md:my-12">
      {/* Texte à gauche */}
      <div className="md:w-3/5 w-full bg-green-900 text-white p-6 md:p-8 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Notre mission</h2>
        <p className="mb-4 text-sm md:text-base">
          Notre mission est d'intégrer la beauté des fleurs dans votre quotidien tout en prenant soin de l'environnement. Nous sélectionnons soigneusement des fleurs naturelles de qualité, cultivées pour leur durabilité et leur élégance, afin de vous offrir des compositions florales qui apportent une touche de magie à chaque instant de votre vie, qu'il s'agisse de moments ordinaires ou d'occasions spéciales.
        </p>
        <p className="text-sm md:text-base">
          En tant qu'entreprise engagée, nous adoptons une démarche respectueuse de la planète. Nos fleurs sont cultivées de manière durable, avec des pratiques qui minimisent l'impact sur l'environnement. De la sélection des fleurs jusqu'à leur livraison, nous veillons à ce que chaque étape reflète notre engagement pour un avenir plus éco-responsable.
        </p>
      </div>
      {/* Image à droite */}
      <div className="md:w-2/5 w-full relative min-h-[200px] sm:min-h-[320px] md:min-h-0 md:h-auto">
        <Image
          src="/images/mission.png"
          alt="Fleuriste au travail"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center p-6 md:p-10">
         suivez-nous sur Instagram <span className="text-green-800">@flowa</span> du moment
        </h1>
      </div>
      
     {/* Section Carrousel + Grille 4 colonnes (avant Avis vérifiés) */}
     <div className="bg-white py-16">
       {/* Carrousel d'images */}
       <div className="max-w-5xl mx-auto mb-12">
         <div className="flex items-center justify-between">
           {/* Flèche gauche */}
           <button onClick={handlePrevCarousel} className="p-2 bg-green-100 rounded-full mr-2 text-green-700 hover:bg-green-200">
             <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </button>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
             {[...Array(visibleCarouselCount)].map((_, offset) => {
               const imgSrc = carouselImages[(carouselIndex + offset) % carouselImages.length];
               return (
                 <div key={offset} className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center">
                   <img src={imgSrc} alt={`carrousel${offset + 1}`} className="object-cover w-full h-full" />
                 </div>
               );
             })}
           </div>
           {/* Flèche droite */}
           <button onClick={handleNextCarousel} className="p-2 bg-green-100 rounded-full ml-2 text-green-700 hover:bg-green-200">
             <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </button>
         </div>
       </div>
       {/* Grille 4 colonnes texte */}
       <div className="bg-gray-100 py-20">
         <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 px-28 md:grid-cols-2 gap-12 md:gap-28">
             {/* Bloc 1 */}
             <div>
               <h3 className="font-bold text-lg mb-4">Respecter la nature au quotidien</h3>
               <p className="text-gray-700 text-sm">
                 Être éco-jardinier et amateur de bricolage signifie adopter un mode de vie en harmonie avec l'environnement. Cela passe par l'utilisation de produits d'entretien écologiques, de solutions naturelles contre les nuisibles (mites, cafards, moustiques, etc.), et par l'installation d'un garde-manger adapté pour conserver fruits et légumes de manière naturelle. Ce style de vie favorise un quotidien plus sain et durable. Les passionnés de jardinage bio trouveront également des ouvrages spécialisés pour approfondir leurs connaissances sur les pratiques écologiques et les cycles des saisons.
               </p>
             </div>
             {/* Bloc 2 */}
             <div>
               <h3 className="font-bold text-lg mb-4">Bien entretenir et cultiver son jardin</h3>
               <p className="text-gray-700 text-sm">
                 Nous vous apporte ses conseils de jardinage pour cultiver vos légumes bio toute l'année dans votre jardin potager grâce à des serres, des abris de culture ou des carrés de jardin. Retrouvez notre sélection d'outils pour le travail du sol, la taille et la coupe de vos haies et arbustes ou l'équipement du jardinier. Pensez également aux désherbeurs écologiques, aux solutions de paillage et aux tuteurs tomates et plantes grimpantes pour cultiver et jardiner de manière responsable ! Nous vous proposons des engrais et traitements biologiques, des pièges à phéromones ainsi que des anti-nuisibles à ultrasons.
               </p>
             </div>
             {/* Bloc 3 */}
             <div>
               <h3 className="font-bold text-lg mb-4">Décorez votre jardin</h3>
               <p className="text-gray-700 text-sm">
                 Personnalisez vos espaces extérieurs avec la sélection unique de Jardin et Saisons ! Apportez du caractère à votre jardin en installant une arche ou une pergola, parfaites pour sublimer vos aménagements. Pour un éclairage à la fois esthétique et économe en énergie, choisissez parmi nos lampes solaires ou LED. Les passionnés de décoration apprécieront nos pots de fleurs et jardinières élégants, ainsi que nos éléments décoratifs. N'oubliez pas de découvrir notre mobilier de jardin, idéal pour pleinement profiter de vos moments en plein air !
               </p>
             </div>
             {/* Bloc 4 */}
             <div>
               <h3 className="font-bold text-lg mb-4">L'ÉCO-JARDINAGE</h3>
               <p className="text-gray-700 text-sm">
                 L'éco-jardinage est une approche durable et respectueuse de l'environnement, visant à créer et entretenir des espaces verts tout en minimisant l'impact écologique. Il repose sur des pratiques naturelles comme l'utilisation d'engrais biologiques, le compostage des déchets verts, la lutte biologique contre les nuisibles, et la préservation de la biodiversité. En adoptant l'éco-jardinage, vous favorisez un équilibre entre votre jardin et la nature, tout en cultivant de manière responsable et durable.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Section Avis vérifiés */}
     <div className="mt-16 text-center pb-16">
       <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
         Avis <span className="text-green-800">vérifiés</span>
       </h2>
       <div className="relative max-w-3xl mx-auto">
         <div className="flex items-center justify-between">
           <button 
             className="p-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
             onClick={handlePrevAvis}
           >
             <IoIosArrowBack size={24} />
           </button>
           <div className="text-center px-4 md:px-12">
             <div className="flex justify-center mb-4">
               {[...Array(avis[currentAvisIndex].rating)].map((_, i) => (
                 <FaStar key={i} className="text-yellow-400 text-xl mx-1" />
               ))}
             </div>
             <p className="text-lg mb-2">
               {avis[currentAvisIndex].comment}
             </p>
             <p className="text-sm text-gray-600">
               {avis[currentAvisIndex].author}
             </p>
           </div>
           <button 
             className="p-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
             onClick={handleNextAvis}
           >
             <IoIosArrowForward size={24} />
           </button>
         </div>
         {/* Indicateurs de position */}
         <div className="flex justify-center mt-6 gap-2">
           {avis.map((_, index) => (
             <div
               key={index}
               className={`h-2 w-2 rounded-full transition-colors ${
                 index === currentAvisIndex ? 'bg-green-800' : 'bg-gray-300'
               }`}
             />
           ))}
         </div>
       </div>
     </div>
    </div>
  );
};

export default Acceuil;
