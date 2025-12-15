import { BookOpen, Globe, GraduationCap, Star } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Quran Studies',
      description: 'Comprehensive Quranic education including memorization, tajweed, and tafseer classes for all ages.',
      features: ['Hifz Program', 'Tajweed Classes', 'Tafseer Studies'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      shadow: 'shadow-indigo-500/20',
    },
    {
      icon: GraduationCap,
      title: 'Islamic Sciences',
      description: 'In-depth study of Hadith, Fiqh, Aqeedah, and Islamic history with qualified scholars.',
      features: ['Hadith Studies', 'Fiqh & Jurisprudence', 'Islamic History'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      shadow: 'shadow-purple-500/20',
    },
    {
      icon: Globe,
      title: 'Arabic Language',
      description: 'Learn classical and modern Arabic to deepen your understanding of Islamic texts.',
      features: ['Classical Arabic', 'Conversation Skills', 'Grammar & Literature'],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      shadow: 'shadow-pink-500/20',
    },
    {
      icon: Star,
      title: 'Character Development',
      description: 'Programs focused on building Islamic character, ethics, and practical application of faith.',
      features: ['Islamic Ethics', 'Youth Programs', 'Community Service'],
      gradient: 'from-rose-500 to-orange-500',
      bgGradient: 'from-rose-50 to-orange-50',
      shadow: 'shadow-rose-500/20',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
        <IslamicPattern className="w-full h-full text-indigo-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Programs</span>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Comprehensive Islamic Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Discover our wide range of programs designed to nurture Islamic knowledge 
            and spiritual growth at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${program.bgGradient} p-8 rounded-3xl border border-white shadow-xl ${program.shadow} hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-5">
                  <IslamicPattern className="w-full h-full text-indigo-900" />
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-gray-900 mb-3 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{program.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{program.description}</p>
                
                <ul className="space-y-3 relative z-10">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className={`w-2 h-2 bg-gradient-to-br ${program.gradient} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Poppins, sans-serif' }}>
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}