import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Roger S.',
    date: '10/02/24',
    title: 'Pour moi, la livraison est merveilleuse',
    text: `J'ai été agréablement surpris par la rapidité de la livraison et la fraîcheur des fleurs. L'application est intuitive et propose des options de personnalisation que je n'avais jamais vues ailleurs. Je recommande vivement à tous les amateurs de fleurs.`,
    image: '/images/roger.png', // Remplace par tes vraies images
  },
  {
    name: 'Léa A.',
    date: '13/04/24',
    title: 'Je me retrouve mieux avec FLOWA',
    text: `J'ai toujours eu du mal à trouver des fleurs fraîches en ligne, mais avec cette application, c'est devenu un jeu d'enfant et l'application est tellement facile à utiliser. Je ne peux plus m'en passer pour mes occasions spéciales.`,
    image: '/images/lea.png',
  },
  {
    name: 'Pierrot G.',
    date: '22/05/24',
    title: 'Meilleur service client avec FLOWA',
    text: `L'application est un véritable bijou pour les amateurs de fleurs. La sélection est vaste, et les descriptions détaillées m'aident à choisir exactement ce que je veux. Les fleurs arrivent toujours en parfait état, et le service client est très réactif. Je la recommande à tous mes amis !`,
    image: '/images/pierrot.png',
  },
];

export default function Testimonials() {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        BIENVENUE DANS NOTRE FAMILLE DE PLANTES
      </h2>
      <p className="text-gray-600 mb-10">
        Nos clients témoignent de l'élégance et de la qualité de nos fleurs naturelles
      </p>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        <button className="absolute left-4 text-yellow-500 hover:scale-110 transition">
          <ChevronLeft size={32} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
          {testimonials.map((t, index) => (
            <div key={index} className=" text-center">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <div className="flex text-yellow-500">
                {Array(5).fill(null).map((_, i) => (
  <Star key={i} size={18} fill="currentColor" />
))}
                </div>
                <p className="text-sm text-gray-500 mt-1">{t.date}</p>
              </div>
              <h3 className="font-semibold text-sm mb-2">{t.title}</h3>
              <p className="text-sm text-gray-700">{t.text}</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
            </div>
          ))}
        </div>

        <button className="absolute right-0  text-yellow-500 hover:scale-110 transition">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
