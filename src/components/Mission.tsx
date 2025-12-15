import { Target, Eye, Lightbulb } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Mission() {
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <IslamicPattern className="w-full h-full text-white" />
      </div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Arabic Calligraphy */}
          <div className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Amiri, serif' }}>
            <span className="text-white">
              اقْرَأْ بِاسْمِ رَبِّكَ
            </span>
          </div>
          <p className="text-indigo-100 italic mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "Read in the name of your Lord" - Quran 96:1
          </p>
          <h2 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission & Vision</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Guided by Islamic principles and committed to excellence in education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <IslamicPattern className="w-full h-full text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/50 relative z-10">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-4 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h3>
            <p className="text-indigo-100 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              To provide authentic Islamic education that nurtures strong faith, 
              moral character, and academic excellence, preparing students to be 
              exemplary Muslims and positive contributors to society.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <IslamicPattern className="w-full h-full text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50 relative z-10">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-4 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Vision</h3>
            <p className="text-indigo-100 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              To be a leading institution in Islamic education, recognized for our 
              commitment to scholarly excellence, spiritual development, and 
              community service, inspiring generations of knowledgeable Muslims.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <IslamicPattern className="w-full h-full text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/50 relative z-10">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-4 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Approach</h3>
            <p className="text-indigo-100 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Combining classical Islamic scholarship with contemporary teaching 
              methods, we create an engaging and transformative learning environment 
              that meets the needs of modern Muslim students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}