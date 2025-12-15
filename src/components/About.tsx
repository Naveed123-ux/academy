import { BookOpen, Users, Award, Heart } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function About() {
  const stats = [
    { icon: BookOpen, value: '50+', label: 'Courses Offered' },
    { icon: Users, value: '1000+', label: 'Active Students' },
    { icon: Award, value: '15+', label: 'Years of Excellence' },
    { icon: Heart, value: '30+', label: 'Expert Instructors' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <IslamicPattern className="w-full h-full text-indigo-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc2NTc2NzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students studying together"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-purple-900/20 to-transparent"></div>
              {/* Islamic pattern overlay on image */}
              <div className="absolute inset-0 opacity-10">
                <IslamicPattern className="w-full h-full text-white" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl -z-10 blur-2xl opacity-60"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</span>
              <h2 className="text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Empowering Students Through Islamic Knowledge
              </h2>
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Since our establishment, Al Balagh Academy has been at the forefront of 
                Islamic education, combining traditional scholarship with modern teaching 
                methodologies to create an enriching learning experience.
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our dedicated faculty and comprehensive curriculum ensure that every student 
                receives personalized attention and guidance on their journey to understanding 
                and implementing Islamic teachings in their daily lives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-5">
                      <IslamicPattern className="w-full h-full text-indigo-900" />
                    </div>
                    <Icon className="w-10 h-10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform relative z-10" />
                    <div className="text-gray-900 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                    <div className="text-gray-600 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}