import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-7 h-7"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div>
              <div className="text-gray-900" style={{ fontFamily: 'Amiri, serif' }}>Al Balagh Academy</div>
              <div className="text-xs text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>Excellence in Education</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors relative group" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#mission" className="text-gray-600 hover:text-indigo-600 transition-colors relative group" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Mission
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#programs" className="text-gray-600 hover:text-indigo-600 transition-colors relative group" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#team" className="text-gray-600 hover:text-indigo-600 transition-colors relative group" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <a
              href="#about"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#mission"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </a>
            <a
              href="#programs"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#team"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}