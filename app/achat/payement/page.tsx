"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const paymentMethods = [
  {
    id: "paypal",
    label: "Payer avec un compte PayPal",
    logo: "/paypal.png", // Mets le bon chemin de ton image
  },
  {
    id: "visa",
    label: "Payer par carte VISA",
    logo: "/visa.png",
  },
  {
    id: "cb",
    label: "Payer par carte bancaire",
    logo: "/cb.png",
  },
  {
    id: "mastercard",
    label: "Payer par carte Mastercard",
    logo: "/mastercard.png",
  },
  {
    id: "momo",
    label: "Payer par momo",
    logo: "/momo.png",
  },
];

export default function Paiement() {
  const [selected, setSelected] = useState("paypal");
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6">
      {/* Étapes */}
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-lg mr-3">
          01
        </div>
        <span className="text-gray-400 font-bold text-xl mr-8">Adresse</span>
        <div className="flex-1 h-0.5 bg-gray-200 mr-4" />
        <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg mr-3">
          02
        </div>
        <span className="text-green-600 font-bold text-xl">Paiement</span>
      </div>

      {/* Choix paiement */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex items-center py-3 px-2 border-b last:border-b-0 cursor-pointer ${
              selected === method.id ? "bg-gray-50" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="accent-green-600 w-5 h-5 mr-4"
            />
            <div className="w-28 flex items-center justify-center">
              <Image src={method.logo} alt={method.label} width={90} height={40} />
            </div>
            <span className="ml-4 text-base">{method.label}</span>
          </label>
        ))}
      </div>

      {/* Conditions */}
      <p className="text-sm text-gray-700 mb-6">
        J'ai lu les conditions générales de vente et j'y adhère sans réserve.
      </p>

      {/* Boutons */}
      <div className="flex justify-between items-center">
        <button
          className="flex items-center text-green-600 font-medium text-base hover:underline"
          onClick={() => router.back()}
        >
          <span className="text-xl mr-2">&larr;</span>Retour
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded font-semibold text-base"
          onClick={() => alert(`Paiement par ${selected}`)}
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
