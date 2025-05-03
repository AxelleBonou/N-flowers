"use client";

import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

interface Country {
  name: string;
  flag: string;
}

const NavBar = () => {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({ name: "BENIN", flag: "https://flagcdn.com/w40/bj.png" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const countries: Country[] = [
    { name: "BENIN", flag: "https://flagcdn.com/w40/bj.png" },
    { name: "SENEGAL", flag: "https://flagcdn.com/w40/sn.png" },
    { name: "COTE D'IVOIRE", flag: "https://flagcdn.com/w40/ci.png" },
    { name: "BURKINA FASO", flag: "https://flagcdn.com/w40/bf.png" },
    { name: "TOGO", flag: "https://flagcdn.com/w40/sn.png" },
  ];

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Bande promo */}
      <div className="bg-green-900 text-white text-sm text-center py-1">
        En ce moment : -15% sur tous nos produits !{" "}
        <span className=" underline cursor-pointer">
          J'en profite !
        </span>
      </div>

      {/* Barre principale */}
      <div className="flex items-center px-4 md:px-6 py-4 border-b relative">
        {/* Partie gauche - pays + recherche (desktop uniquement) */}
        <div className="hidden md:flex items-center gap-4 w-1/3">
          {/* Sélecteur de pays */}
          <div className="relative">
            <div 
              className="flex items-center gap-1 cursor-pointer font-medium"
              onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
            >
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-5 h-4 object-cover"
              />
              <span className="hidden sm:inline">{selectedCountry.name}</span>
              <IoMdArrowDropdown className={`text-xl transition-transform duration-200 ${isCountryMenuOpen ? 'rotate-180' : ''}`} />
            </div>
            {/* Menu déroulant des pays */}
            {isCountryMenuOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48 max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <div 
                    key={country.name}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 h-4 object-cover"
                    />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Champ de recherche */}
          <div className="relative w-full flex">
            <input
              type="text"
              placeholder="Que recherchez vous ?"
              className="w-full pl-3 pr-4 py-2 border rounded-l-md text-sm focus:outline-none"
            />
            <button className="bg-green-900 hover:bg-green-800 transition-colors px-4 rounded-r-md flex items-center justify-center">
              <FiSearch className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Logo à gauche */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={48}
            className="object-contain h-8 w-auto md:h-12"
          />
        </div>

        {/* Actions (caché sur mobile) */}
        <div className="hidden md:flex items-center justify-end gap-6 w-1/3 text-sm font-medium">
          <Link href="/mon-magasin" className="flex items-center gap-1 cursor-pointer hover:text-green-900 transition-colors">
            <MdLocationOn className="text-lg" />
            Mon magasin
          </Link>
          <Link href="/connexion" className="flex items-center gap-1 cursor-pointer hover:text-green-900 transition-colors">
            <FaUser className="text-lg" />
            Se connecter
          </Link>
          <Link href="/panier" className="flex items-center gap-1 cursor-pointer hover:text-green-900 transition-colors">
            <FaShoppingCart className="text-lg" />
            Panier
          </Link>
        </div>
        {/* Hamburger menu (mobile à droite) */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Liens de navigation (desktop) */}
      <div className="hidden md:flex justify-center gap-10 py-3 text-sm font-medium">
        <Link href="/plantes" className="cursor-pointer hover:text-green-900 transition-colors">
          Plantes
        </Link>
        <Link href="/amenagement-exterieur" className="text-blue-700 underline cursor-pointer hover:text-green-900 transition-colors">
          Aménagement extérieur
        </Link>
        <Link href="/jardinage" className="cursor-pointer hover:text-green-900 transition-colors">
          Jardinage
        </Link>
        <Link href="/maison-decoration" className="cursor-pointer hover:text-green-900 transition-colors">
          Maison & Décoration
        </Link>
        <Link href="/fleurs-vertus" className="text-green-700 cursor-pointer hover:text-green-900 transition-colors">
          Fleurs & Vertus
        </Link>
        <Link href="/conseils-astuces" className="text-green-700 cursor-pointer hover:text-green-900 transition-colors">
          Conseils et astuces
        </Link>
      </div>

      {/* Menu mobile (slide-down) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
            {/* Sélecteur de pays mobile */}
            <div className="mb-4">
              <div className="relative">
                <div 
                  className="flex items-center gap-1 cursor-pointer font-medium"
                  onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                >
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-5 h-4 object-cover"
                  />
                  <span>{selectedCountry.name}</span>
                  <IoMdArrowDropdown className={`text-xl transition-transform duration-200 ${isCountryMenuOpen ? 'rotate-180' : ''}`} />
                </div>
                {isCountryMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <div 
                        key={country.name}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-5 h-4 object-cover"
                        />
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Recherche mobile */}
            <div className="mb-4">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Que recherchez vous ?"
                  className="w-full pl-3 pr-4 py-2 border rounded-l-md text-sm focus:outline-none"
                />
                <button className="bg-green-900 hover:bg-green-800 transition-colors px-4 rounded-r-md flex items-center justify-center">
                  <FiSearch className="text-white text-lg" />
                </button>
              </div>
            </div>
            {/* Liens de navigation */}
            <nav className="flex flex-col gap-4 text-base font-medium">
              <Link href="/plantes" className="hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Plantes
              </Link>
              <Link href="/amenagement-exterieur" className="text-blue-700 underline hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Aménagement extérieur
              </Link>
              <Link href="/jardinage" className="hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Jardinage
              </Link>
              <Link href="/maison-decoration" className="hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Maison & Décoration
              </Link>
              <Link href="/fleurs-vertus" className="text-green-700 hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Fleurs & Vertus
              </Link>
              <Link href="/conseils-astuces" className="text-green-700 hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Conseils et astuces
              </Link>
            </nav>
            {/* Actions mobile */}
            <div className="flex flex-col gap-3 mt-6 border-t pt-4">
              <Link href="/mon-magasin" className="flex items-center gap-2 hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                <MdLocationOn className="text-lg" />
                Mon magasin
              </Link>
              <Link href="/connexion" className="flex items-center gap-2 hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                <FaUser className="text-lg" />
                Se connecter
              </Link>
              <Link href="/panier" className="flex items-center gap-2 hover:text-green-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                <FaShoppingCart className="text-lg" />
                Panier
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
