import { Card } from "./components/ui/card";
import { TrendingUp, Shield, Smartphone, PiggyBank, Mail, Phone } from "lucide-react";

// Für Vercel Deployment: Ersetzen Sie diesen Pfad mit Ihrem eigenen Bild
// Legen Sie das Bild in public/images/project.jpg ab
const projectImage = "public/images/project.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F0F10]">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1757264119066-2f627c6a6f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjB2aWxsYSUyMGdsYXNzfGVufDF8fHx8MTc1OTQ4Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute left-6 top-6 z-10 hidden rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/80 shadow-lg backdrop-blur md:block">
          Preview
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <h1
            className="mb-6 text-5xl tracking-tight md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dominus
          </h1>
          <div className="mx-auto mb-10 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <p
            className="mb-8 text-3xl tracking-wide md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Einfach Immobilien
          </p>
          <p
            className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Immobilien-Investments ab 500 CHF. Einfach. Transparent. Direkt.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-8 text-4xl tracking-tight text-black md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Über das Projekt
          </h2>
          <div className="mx-auto mb-12 h-[1px] w-20 bg-[#D4AF37]" />
          <p
            className="text-xl leading-relaxed text-gray-700 md:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Dominus ist die Plattform für Immobilien-Crowdinvestments. Wir öffnen den Markt für alle –
            Investitionen ab 200–500 CHF, professionell verwaltet und projektbasiert. Der Zugang zu hochwertigen
            Immobilieninvestitionen war noch nie so einfach.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#050506] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-20 text-center text-4xl tracking-tight md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ihre Vorteile
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              highlight
              badge="Premium"
            />
          </div>
        </div>
      </section>

      {/* Pilot Project Section */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-20 text-center text-4xl tracking-tight text-black md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pilotprojekt
          </h2>

          <Card className="overflow-hidden border-0 shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
            <div className="relative h-96">
              <img
                src={projectImage}
                alt="Modernes Wohnprojekt"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute right-6 top-6 bg-[#D4AF37] px-6 py-2 text-sm tracking-wider text-black"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                COMING SOON
              </div>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-50 p-10">
              <h3
                className="text-3xl mb-4 text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Modernes Wohnprojekt
              </h3>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex-1">
                  <p className="mb-1 text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Erwartete Rendite
                  </p>
                  <p
                    className="text-3xl text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                  >
                    25–35% p.a.
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-gray-300" />
                <div className="flex-1">
                  <p className="mb-1 text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Status
                  </p>
                  <p
                    className="text-2xl text-black"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                  >
                    In Vorbereitung
                  </p>
                </div>
              </div>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Exklusive Wohneinheiten in bevorzugter Lage mit erstklassiger Infrastruktur und nachhaltiger Bauweise.
                Profitieren Sie von der dynamischen Entwicklung im Grossraum Zürich.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-[#050506] px-6 py-32 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-8 text-4xl tracking-tight md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Interessiert?
          </h2>
          <div className="mx-auto mb-12 h-[1px] w-20 bg-[#D4AF37]" />
          <p
            className="mb-16 text-xl text-gray-300"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Schreiben Sie uns für weitere Informationen oder um beim ersten Projekt dabei zu sein.
          </p>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <a
              href="mailto:maurus.pichler@project-dominus.ch"
              className="flex items-center gap-4 group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Mail className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <span
                className="text-lg text-white transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                maurus.pichler@project-dominus.ch
              </span>
            </a>

            <div className="hidden md:block w-[1px] h-12 bg-white/20" />

            <a
              href="tel:+41775383064"
              className="flex items-center gap-4 group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Phone className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <span
                className="text-lg text-white transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                +41 77 538 30 64
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3
              className="mb-2 text-3xl tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dominus
            </h3>
            <p
              className="text-sm tracking-[0.5em] text-[#D4AF37]"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.5em" }}
            >
              EINFACH IMMOBILIEN
            </p>
          </div>

          <div className="my-8 h-[1px] w-full bg-white/10" />

          <p
            className="mx-auto max-w-3xl text-center text-xs text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Dies ist kein öffentliches Angebot, sondern eine Projektvorstellung. Alle Angaben sind unverbindlich.
            Investitionen in Immobilien bergen Risiken. Bitte informieren Sie sich umfassend vor einer Anlageentscheidung.
          </p>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
  highlight = false,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-10 text-center transition-all duration-300 ${
        highlight
          ? "border-[#D4AF37] bg-[#16120A] shadow-[0_15px_45px_rgba(3,3,3,0.35)]"
          : "border-white/10 bg-white/5 backdrop-blur-sm"
      } hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]`}
    >
      {badge ? (
        <span className="absolute right-6 top-6 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1 text-xs tracking-[0.25em] text-[#D4AF37]">
          {badge.toUpperCase()}
        </span>
      ) : null}
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h3
        className="mb-3 text-xl text-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm text-gray-400"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
      >
        {description}
      </p>
    </div>
  );
}

