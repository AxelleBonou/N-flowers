// app/components/FaqSection.tsx
import { FaQuestionCircle } from 'react-icons/fa';

const faqData = [
  {
    question: "Comment choisir une plante d’intérieur adaptée à chaque pièce de la maison ?",
    answer: `Le choix d’une plante d’intérieur dépend principalement de l’ensoleillement et du taux d’humidité de la pièce. Par exemple, les grandes plantes vertes comme les palmiers d’intérieur ou les ficus sont idéales pour le salon qui bénéficie souvent d’une bonne luminosité. En revanche, pour la salle de bains, il est préférable d’opter pour des plantes qui apprécient les atmosphères humides, comme la `,
    highlights: [
      { text: "fougère", link: "#" },
      { text: "papyrus", link: "#" }
    ]
  },
  {
    question: "Quelle est la fréquence d’arrosage idéale pour mes plantes d’intérieur ?",
    answer: `La fréquence d’arrosage dépend de la plante et de l’environnement. En général, il est conseillé d’arroser lorsque la terre est sèche en surface. Les plantes comme les cactus ou les succulentes nécessitent un arrosage peu fréquent, tandis que les `,
    highlights: [
      { text: "plantes tropicales", link: "#" }
    ],
    answerEnd: ", comme les fougères, préfèrent un sol légèrement humide."
  }
];

export default function FaqSection() {
  return (
   <section className="w-full bg-orange-50 py-10">
  <div className="max-w-5xl mx-auto px-6 space-y-10">
    {faqData.map((item, idx) => (
      <div key={idx} className="flex items-start space-x-4">
        <div className="mt-1">
          <FaQuestionCircle className="text-green-600 text-xl" />
        </div>
        <div>
          <h3 className="font-semibold text-black mb-2">{item.question}</h3>
          <p className="text-gray-700">
            {item.answer}
            {item.highlights.map((hl, i) => (
              <span key={i}>
                <a href={hl.link} className="text-green-500 hover:underline"> {hl.text}</a>
                {i < item.highlights.length - 1 ? " ou " : ""}
              </span>
            ))}
            {item.answerEnd ?? "."}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  
  );
}
