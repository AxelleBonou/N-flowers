"use client";

import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

interface Country {
  name: string;
  flag: string;
}

const NavBar = () => {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "BENIN",
    flag: "https://flagcdn.com/w40/bj.png",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

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
        <span className=" underline cursor-pointer">J'en profite !</span>
      </div>

      {/* Barre principale */}
      <div className="flex items-center px-4 md:px-6 py-4 border-b relative">
        {/* Partie gauche */}
        <div className="hidden md:flex items-center gap-4 w-1/3">
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
              <IoMdArrowDropdown
                className={`text-xl transition-transform duration-200 ${
                  isCountryMenuOpen ? "rotate-180" : ""
                }`}
              />
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

        {/* Logo + Accueil */}
        <div className="flex flex-col items-center justify-center flex-grow">
  <Link href="/" className="flex flex-col items-center">
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={120}
      height={48}
      className="object-contain h-8 w-auto md:h-12"
    />
  </Link>
  <Link
    href="/"

  >
    
  </Link>
</div>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center justify-end gap-6 w-1/3 text-sm font-medium">
          <Link
            href="/mon-magasin"
            className={`flex items-center gap-1 cursor-pointer transition-colors px-2 py-1 rounded-md ${isActive('/mon-magasin') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
          >
            <MdLocationOn className="text-lg" />
            Mon magasin
          </Link>
          <Link
            href="/connexion"
            className={`flex items-center gap-1 cursor-pointer transition-colors px-2 py-1 rounded-md ${isActive('/connexion') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
          >
            <FaUser className="text-lg" />
            Se connecter
          </Link>
          <Link
            href="/panier"
            className={`flex items-center gap-1 cursor-pointer transition-colors px-2 py-1 rounded-md ${isActive('/panier') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
          >
            <FaShoppingCart className="text-lg" />
            Panier
          </Link>
        </div>

        {/* Menu hamburger */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Liens nav desktop */}
      <div className="hidden md:flex justify-center gap-10 py-3 text-sm font-medium">
        {[
          { href: "/plantes", label: "Plantes" },
          { href: "/amenagement-exterieur", label: "Aménagement extérieur" },
          { href: "/jardinage", label: "Jardinage" },
          { href: "/maison-decoration", label: "Maison & Décoration" },
          { href: "/fleurs-vertus", label: "Fleurs & Vertus" },
          { href: "/conseils-astuces", label: "Conseils et astuces" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-all duration-300 px-2 py-1 rounded-md ${
              isActive(href)
                ? "bg-green-800 text-white"
                : "hover:text-green-900"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pays mobile */}
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
                  <IoMdArrowDropdown
                    className={`text-xl transition-transform duration-200 ${
                      isCountryMenuOpen ? "rotate-180" : ""
                    }`}
                  />
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

            {/* Liens mobile */}
            <nav className="flex flex-col gap-4 text-base font-medium">
              {[
                { href: "/", label: "Accueil" },
                { href: "/plantes", label: "Plantes" },
                { href: "/amenagement-exterieur", label: "Aménagement extérieur" },
                { href: "/jardinage", label: "Jardinage" },
                { href: "/maison-decoration", label: "Maison & Décoration" },
                { href: "/fleurs-vertus", label: "Fleurs & Vertus" },
                { href: "/conseils-astuces", label: "Conseils et astuces" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-all duration-300 px-2 py-1 rounded-md ${
                    isActive(href)
                      ? "bg-green-800 text-white"
                      : "hover:text-green-900"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Actions mobile */}
            <div className="flex flex-col gap-3 mt-6 border-t pt-4">
              <Link
                href="/mon-magasin"
                className={`flex items-center gap-2 hover:text-green-900 transition-colors px-2 py-1 rounded-md ${isActive('/mon-magasin') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MdLocationOn className="text-lg" />
                Mon magasin
              </Link>
              <Link
                href="/connexion"
                className={`flex items-center gap-2 hover:text-green-900 transition-colors px-2 py-1 rounded-md ${isActive('/connexion') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser className="text-lg" />
                Se connecter
              </Link>
              <Link
                href="/panier"
                className={`flex items-center gap-2 hover:text-green-900 transition-colors px-2 py-1 rounded-md ${isActive('/panier') ? 'bg-green-800 text-white' : 'hover:text-green-900'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
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
