// components/GardenTips.tsx
import Image from 'next/image'

export default function GardenTips() {
  return (
    <section className="relative bg-orange-50 w-full px-6 py-4 overflow-hidden">
      {/* Image coin supérieur droit */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[300px]">
        <Image
          src="/images/balcon.png"
          alt="Décor balcon"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Image coin inférieur gauche */}
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[280px]">
        <Image
          src="/images/jardin.png"
          alt="Décor jardin"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      <div className="space-y-16 max-w-5xl mx-auto">
        {/* Section 1 */}
        <div className=" px-32 relative right-32">
          <h3 className="text-lg font-semibold flex items-center text-black mb-4">
            <span className="text-green-600 text-2xl mr-2">🌿</span>
            Quelle sélection de plantes d’extérieur convient pour un balcon avec des contraintes d’espace ?
          </h3>
          <p className="mb-2">
            Pour optimiser l’espace limité de votre balcon tout en apportant une touche de verdure, optez pour des plantes adaptées aux petits extérieurs.
            Si votre balcon est exposé au plein sud et reçoit beaucoup de soleil, choisissez des plantes méditerranéennes qui prospèrent sous ces conditions.
            À l’inverse, pour un balcon orienté au nord avec moins de lumière, préférez des vivaces comme l’agapanthe ou l’iris.
          </p>
          <p>
            Utilisez des jardinières, des balconnières, des carrés potagers ou des potagers sur pieds pour maximiser l’espace en exploitant les hauteurs.
            Cela permet de cultiver des plantes en pots ou directement dans le sol, comme les herbes aromatiques, tout en gardant un balcon fonctionnel et esthétique.
          </p>
        </div>

        {/* Section 2 */}
        <div className="px-32 relative left-32">
          <h3 className="text-lg font-semibold flex items-center text-black mb-4">
            <span className="text-green-600 text-2xl mr-2">🌿</span>
            Comment faire entrer la nature dans votre jardin ?
          </h3>
          <p className="mb-2">
            Plus besoin d’arroser sans cesse ou de craindre les traces de pas. Le gazon moderne, résistant à la sécheresse et au piétinement, vous permet de profiter pleinement de votre jardin sans contrainte.
            Dites adieu aux pelouses abîmées par le manque d’eau ou les jeux des enfants !
          </p>
          <p>
            Pour un espace de loisir, optez pour un gazon rustique enrichi en ray-grass, capable de supporter un trafic intense sans souci.
            Enfin, le gazon fleuri, inspiré du Japon, est très tendance. Ajoutez des mélanges d’herbes et de fleurs naturelles pour égayer votre jardin avec des touches de couleur variées.
          </p>
        </div>
      </div>
    </section>
  )
}