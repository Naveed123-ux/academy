import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Mission } from './components/Mission';
import { Programs } from './components/Programs';
import { Team } from './components/Team';
import { Values } from './components/Values';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Programs />
      <Values />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
