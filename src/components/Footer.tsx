import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-300 relative overflow-hidden">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <IslamicPattern className="w-full h-full text-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
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
                <div className="text-white" style={{ fontFamily: 'Amiri, serif' }}>Al Balagh Academy</div>
                <div className="text-xs text-indigo-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Excellence in Education</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Excellence in Islamic Education since 2010
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                About Us
              </a></li>
              <li><a href="#mission" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Mission & Vision
              </a></li>
              <li><a href="#programs" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Programs
              </a></li>
              <li><a href="#team" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Our Team
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Quran Studies
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Islamic Sciences
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Arabic Language
              </a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                Youth Programs
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Newsletter</h4>
            <p className="text-gray-400 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stay updated with our latest courses and events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-indigo-400 text-white placeholder:text-gray-400"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              <button className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p style={{ fontFamily: 'Poppins, sans-serif' }}>© 2025 Al Balagh Academy. All rights reserved. Made with ❤️ for the Muslim community</p>
        </div>
      </div>
    </footer>
  );
}