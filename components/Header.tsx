'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-pacifico text-pink-600">
            Doce Encanto
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
              Início
            </Link>
            <Link href="/galeria" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
              Galeria
            </Link>
            <a href="#sobre" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
              Contato
            </a>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Início
              </Link>
              <Link href="/galeria" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Galeria
              </Link>
              <a href="#sobre" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}