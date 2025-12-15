import { Compass, Shield, Users2, Sparkles, BookHeart, TrendingUp } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Values() {
  const values = [
    {
      icon: Compass,
      title: 'Authentic Knowledge',
      description: 'Commitment to teaching authentic Islamic knowledge based on the Quran and Sunnah.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty, transparency, and ethical conduct.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users2,
      title: 'Community',
      description: 'Building a supportive learning community that fosters growth and brotherhood.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Striving for excellence in all aspects of education and personal development.',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: BookHeart,
      title: 'Compassion',
      description: 'Nurturing compassionate hearts through the beautiful teachings of Islam.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Encouraging continuous learning and spiritual development for all students.',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <IslamicPattern className="w-full h-full text-indigo-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Values</span>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Principles That Guide Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our core values shape everything we do, from curriculum design to student interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border-2 border-gray-100 bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="absolute inset-0 opacity-5">
                  <IslamicPattern className="w-full h-full text-indigo-900" />
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{value.title}</h3>
                <p className="text-gray-600 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}