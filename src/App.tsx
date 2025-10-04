import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { TrendingUp, Shield, Smartphone, PiggyBank, Mail, Phone } from "lucide-react";

// Für Vercel Deployment: Ersetzen Sie diesen Pfad mit Ihrem eigenen Bild
// Legen Sie das Bild in public/images/project.jpg ab
const projectImage = "public/images/project.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1757264119066-2f627c6a6f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjB2aWxsYSUyMGdsYXNzfGVufDF8fHx8MTc1OTQ4Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dominus
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />
          <p 
            className="text-3xl md:text-4xl lg:text-5xl mb-8 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Einfach Immobilien
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Immobilien-Investments ab 500 CHF. Einfach. Transparent. Direkt.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl mb-12 text-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Über das Projekt
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-12" />
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Dominus ist die Plattform für Immobilien-Crowdinvestments. Wir öffnen den Markt für alle – 
            Investitionen ab 200–500 CHF, professionell verwaltet und projektbasiert. Der Zugang zu 
            hochwertigen Immobilieninvestitionen war noch nie so einfach.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl mb-20 text-center tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ihre Vorteile
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<PiggyBank className="w-12 h-12 text-[#D4AF37]" />}
              title="Niedrige Einstiegshürde"
              description="Investitionen schon ab 500 CHF"
            />
            <BenefitCard
              icon={<Shield className="w-12 h-12 text-[#D4AF37]" />}
              title="Transparenz"
              description="Klare Projekte, klare Zahlen"
            />
            <BenefitCard
              icon={<Smartphone className="w-12 h-12 text-[#D4AF37]" />}
              title="Direkt & Digital"
              description="Alles online über Wallets/PSP"
            />
            <BenefitCard
              icon={<TrendingUp className="w-12 h-12 text-[#D4AF37]" />}
              title="Attraktive Renditen"
              description="Immobilien als stabile Anlageklasse"
            />
          </div>
        </div>
      </section>

      {/* Pilot Project Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl mb-20 text-center text-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pilotprojekt
          </h2>
          
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="relative h-96">
              <img
                src={projectImage}
                alt="Modernes Wohnprojekt"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-[#D4AF37] text-black px-6 py-2 text-sm tracking-wider" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                COMING SOON
              </div>
            </div>
            
            <div className="p-10 bg-gradient-to-b from-white to-gray-50">
              <h3 
                className="text-3xl mb-4 text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Modernes Wohnprojekt
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Erwartete Rendite</p>
                  <p className="text-3xl text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>25–35% p.a.</p>
                </div>
                <div className="w-[1px] h-12 bg-gray-300" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Status</p>
                  <p className="text-2xl text-black" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>In Vorbereitung</p>
                </div>
              </div>
              <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Exklusive Wohneinheiten in bevorzugter Lage mit erstklassiger Infrastruktur und 
                nachhaltiger Bauweise. Profitieren Sie von der dynamischen Entwicklung im Grossraum Zürich.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Interessiert?
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-12" />
          <p className="text-xl text-gray-300 mb-16" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Schreiben Sie uns für weitere Informationen oder um beim ersten Projekt dabei zu sein.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="mailto:maurus.pichler@project-dominus.ch"
              className="flex items-center gap-4 group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                maurus.pichler@project-dominus.ch
              </span>
            </a>
            
            <div className="hidden md:block w-[1px] h-12 bg-white/20" />
            
            <a 
              href="tel:+41775383064"
              className="flex items-center gap-4 group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                +41 77 538 30 64
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 
              className="text-3xl mb-2 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dominus
            </h3>
            <p className="text-[#D4AF37] text-sm tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              EINFACH IMMOBILIEN
            </p>
          </div>
          
          <div className="w-full h-[1px] bg-white/10 my-8" />
          
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Dies ist kein öffentliches Angebot, sondern eine Projektvorstellung. Alle Angaben sind unverbindlich. 
            Investitionen in Immobilien bergen Risiken. Bitte informieren Sie sich umfassend vor einer Anlageentscheidung.
          </p>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h3 
        className="text-xl mb-3 text-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
        {description}
      </p>
    </div>
  );
}

