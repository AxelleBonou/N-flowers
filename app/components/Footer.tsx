"use client";

import React from "react";
import Link from "next/link";
import { FaCreditCard, FaTruck, FaStore, FaQuestionCircle } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Services Section */}
      <div className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCreditCard className="text-orange-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">PAIEMENTS SÉCURISÉS</h3>
              <p className="text-sm text-gray-600">
                Paiement sécurisé par carte bancaire, mastercard, visa, virement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-orange-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">LIVRAISON & RETOUR</h3>
              <p className="text-sm text-gray-600">
                Commande expédiée sous 24h avec garantie satisfait ou remboursé sous 30 jours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaStore className="text-orange-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">RETRAIT EN MAGASIN</h3>
              <p className="text-sm text-gray-600">
                Commandez en ligne et retirez votre commande gratuitement en magasin.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaQuestionCircle className="text-orange-500 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">BESOIN D'AIDE ?</h3>
              <p className="text-sm text-gray-600">
                Disponible à vous servir Contactez-nous au 0151330892 ou par mail
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="grid md:grid-cols-2">
        {/* Formulaire Section */}
        <div className="relative h-[400px] bg-[url('/images/image2.png')] bg-cover bg-center">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg p-5 shadow-lg w-full max-w-xl">
              <h3 className="text-green-600 text-xl font-bold mb-3">Ne manquez aucune opportunité !</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Soyez le premier à recevoir nos offres exclusives et promotions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Trouvez l'inspiration pour aménager ta maison et ton jardin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Bénéficiez de nos conseils et obtenez des réponses à vos questions</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 text-sm"
                />
                <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/image2.png"
            alt="Service client"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Mentions légales</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/cgv">Conditions générales de vente</Link></li>
                <li><Link href="/politique-confidentialite">Politique de protection des données</Link></li>
                <li><Link href="/cookies">Paramétrer les cookies</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Nos univers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/plantes">Plantes</Link></li>
                <li><Link href="/amenagement">Aménagement extérieur</Link></li>
                <li><Link href="/jardinage">Jardinage</Link></li>
                <li><Link href="/maison">Maison et décoration</Link></li>
                <li><Link href="/fleurs">Fleurs et vertus</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Nos services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/commande">Commande rapide</Link></li>
                <li><Link href="/livraison">Livraison</Link></li>
                <li><Link href="/test">Testé et approuvé</Link></li>
                <li><Link href="/retours">Retours et échanges</Link></li>
                <li><Link href="/engagements">Nos engagements</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Service client</h4>
              <p className="text-sm mb-4">
                Avez-vous une question concernant votre commande ou notre boutique
              </p>
              <button className="bg-white text-green-900 px-4 py-2 rounded text-sm mb-4 w-full">
                Envoyez-nous un message
              </button>
              <p className="text-sm">
                (+229) 53 89 36 25
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-green-900 border-t border-green-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white">
                Disponible du lundi au vendredi de 9h00 à 18h00
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white">Rejoignez-nous</span>
              <div className="flex gap-2">
                <Link href="#" className="bg-white p-2 rounded-full">
                  <FaFacebookF className="text-green-900" />
                </Link>
                <Link href="#" className="bg-white p-2 rounded-full">
                  <FaInstagram className="text-green-900" />
                </Link>
                <Link href="#" className="bg-white p-2 rounded-full">
                  <FaLinkedinIn className="text-green-900" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white">Achats 100% sécurisés</span>
              <div className="flex gap-2">
                <Image src="/images/cb.png" alt="CB" width={40} height={25} className="bg-white rounded" />
                <Image src="/images/visa.png" alt="Visa" width={40} height={25} className="bg-white rounded" />
                <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={25} className="bg-white rounded" />
                <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} className="bg-white rounded" />
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-white text-sm">
            <p>Copyright © 2024flower | Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
