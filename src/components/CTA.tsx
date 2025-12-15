import { ArrowRight, Mail, Phone } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <IslamicPattern className="w-full h-full text-white" />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Begin Your Journey of Islamic Learning</h2>
            <p className="text-indigo-100 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join thousands of students who have transformed their lives through authentic 
              Islamic education. Take the first step towards deepening your faith and knowledge.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:bg-indigo-50 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Schedule a Visit
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <IslamicPattern className="w-full h-full text-white" />
            </div>
            <h3 className="text-white mb-8 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in Touch</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-indigo-100 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</div>
                  <div className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>info@albalaghacademy.org</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-indigo-100 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone</div>
                  <div className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}