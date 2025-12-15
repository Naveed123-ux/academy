import { GraduationCap, Award } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function Team() {
  const team = [
    {
      name: 'Sheikh Ahmed Al-Rahman',
      role: 'Head of Islamic Studies',
      qualification: 'PhD in Islamic Jurisprudence',
      specialization: 'Fiqh & Hadith',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTc3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Ustadha Fatima Hassan',
      role: 'Quran & Tajweed Instructor',
      qualification: 'Ijazah in Quran Recitation',
      specialization: 'Tajweed & Memorization',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTc3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Ustadh Yusuf Abdullah',
      role: 'Arabic Language Professor',
      qualification: 'MA in Arabic Literature',
      specialization: 'Classical & Modern Arabic',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTc3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Sheikh Ibrahim Malik',
      role: 'Director of Education',
      qualification: 'PhD in Islamic Education',
      specialization: 'Curriculum Development',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTc3Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <IslamicPattern className="w-full h-full text-indigo-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Team</span>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Expert Scholars & Instructors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Learn from qualified scholars and experienced teachers dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="aspect-square relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-80`}></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Islamic pattern overlay on image */}
                <div className="absolute inset-0 opacity-20">
                  <IslamicPattern className="w-full h-full text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</h3>
                <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {member.role}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <GraduationCap className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`} style={{
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }} />
                    <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.qualification}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Award className={`w-5 h-5 mt-0.5 flex-shrink-0`} />
                    <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.specialization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}