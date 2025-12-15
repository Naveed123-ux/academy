import { ArrowRight, Sparkles } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -z-10" />
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <IslamicPattern className="w-full h-full text-indigo-900" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Arabic Calligraphy Header */}
        <div className="text-center mb-8">
          <div className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'Amiri, serif' }}>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </span>
          </div>
          <p className="text-gray-600 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border border-indigo-200 text-indigo-900 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Excellence in Islamic Education</span>
            </div>
            
            <h1 className="text-gray-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nurturing Faith, Building Knowledge, Inspiring Excellence
            </h1>
            
            <p className="text-gray-600 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Al Balagh Academy is dedicated to providing comprehensive Islamic education 
              that empowers students with knowledge, character, and faith to excel in this 
              world and the hereafter.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Programs
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1632782532013-bd3f5f9197db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTgzMjUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Islamic Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent"></div>
              {/* Islamic pattern overlay on image */}
              <div className="absolute inset-0 opacity-10">
                <IslamicPattern className="w-full h-full text-white" />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl -z-10 blur-xl opacity-60"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full -z-10 blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}