"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const paymentMethods = [
  {
    id: "paypal",
    label: "Payer avec un compte PayPal",
    logo: "/images/paypal.png",
  },
  {
    id: "visa",
    label: "Payer par carte VISA",
    logo: "/images/visa.png",
  },
  {
    id: "cb",
    label: "Payer par carte bancaire",
    logo: "/images/cb.png",
  },
  {
    id: "mastercard",
    label: "Payer par carte Mastercard",
    logo: "/images/mastercard.png",
  },
  {
    id: "mtn",
    label: "Payer avec MTN MoMo",
    logo: "/images/momo.png",
  },
  {
    id: "moov",
    label: "Payer avec Moov Money",
    logo: "/images/momo.png",
  },
  {
    id: "orange",
    label: "Payer avec Orange Money",
    logo: "/images/momo.png",
  },
  {
    id: "celtis",
    label: "Payer avec Celtis Money",
    logo: "/images/momo.png",
  },
];

export default function Paiement() {
  const [selected, setSelected] = useState("paypal");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const router = useRouter();

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStatus("");
    try {
      switch (selected) {
        case "paypal":
          window.open("https://www.paypal.com/pay", "_blank");
          break;
        case "visa":
        case "mastercard":
        case "cb":
          router.push("/achat/paiement-carte");
          break;
        case "mtn":
        case "moov":
        case "orange":
        case "celtis": {
          // Appel API backend pour paiement Mobile Money
          const res = await fetch(`/api/payment/${selected}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              /* Ajoute ici les infos nécessaires (montant, numéro, etc.) */
            }),
          });
          const data = await res.json();
          if (res.ok) {
            setPaymentStatus(
              "Paiement initié avec succès. Vérifiez votre téléphone."
            );
          } else {
            setPaymentStatus(data.message || "Erreur lors du paiement.");
          }
          break;
        }
        default:
          alert("Méthode de paiement non supportée");
      }
    } catch (error) {
      console.error("Erreur lors du paiement:", error);
      setPaymentStatus("Erreur lors du traitement du paiement");
    } finally {
      setIsProcessing(false);
    }
  };
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
              <Image
                src={method.logo}
                alt={method.label}
                width={90}
                height={40}
              />
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
          className={`px-8 py-2 rounded font-semibold text-base ${
            isProcessing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } text-white`}
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? "Traitement..." : "Acheter"}
        </button>
      </div>
      {paymentStatus && (
        <div className="my-4 text-center text-green-700 font-semibold">
          {paymentStatus}
        </div>
      )}
    </div>
  );
}
