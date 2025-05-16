import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PrintButtonWrapper from "@/components/print-button-wrapper"
import { ImprovedLogo } from "@/components/improved-logo"
import { ProfileImage } from "@/components/profile-image"
import { DiamondLogo } from "@/components/diamond-logo"

export default function Home() {
  return (
    <main className="bg-white print:p-0">
      {/* Print Button */}
      <PrintButtonWrapper />

      {/* Cover Page */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col items-center justify-center text-center">
        {/* Modern gradient background with pattern */}
        <div className="absolute inset-0 gradient-bg-1 pattern-dots opacity-10"></div>

        {/* Solar panel image background */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/solar-panels.jpg" alt="Solaranlagen" fill className="object-cover" priority />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full gradient-bg-1 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-tl-full gradient-bg-1 opacity-20"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-emerald-800 mb-8 text-shadow">PV-Invest für Unternehmer</h1>
          <p className="text-2xl text-emerald-700 mb-10">
            Wie Sie Steuern in Substanz und Cashflow verwandeln – mit Struktur statt Zufall
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-10"></div>
        </div>

        {/* Elegantes Logo in der unteren linken Ecke mit Viertelkreis-Hintergrund */}
        <div className="absolute bottom-0 left-0 z-20">
          <div className="relative">
            {/* Viertelkreis-Hintergrund */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-600 rounded-tr-full"></div>

            {/* Logo auf dem Viertelkreis */}
            <div className="absolute bottom-4 left-4">
              <ImprovedLogo variant="full" color="white" size="medium" />
            </div>
          </div>
        </div>

        {/* Neues Diamant-Logo unten rechts mit Fallback-Unterstützung */}
        <div className="absolute bottom-6 right-6 z-20">
          <DiamondLogo size="medium" />
        </div>
      </div>

      {/* Page 1: Einleitung */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 pl-4">
              Einleitung – Das Problem vieler Top-Verdiener
            </h2>
          </div>

          <p className="text-lg mb-6">Sie verdienen gut. Sie arbeiten hart. Sie tragen Verantwortung.</p>
          <p className="text-lg mb-6">
            Und doch stellen sich viele Unternehmer und Angestellte mit hohem Einkommen dieselbe Frage:
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 italic text-xl text-emerald-700 my-8 bg-gradient-to-r from-emerald-50 to-transparent p-4 rounded-r-lg shadow-subtle">
            „Wo bleibt eigentlich mein Vermögen?"
          </blockquote>

          <p className="text-lg mb-6">Der Grund ist einfach: Ihr Einkommen läuft durch das falsche System.</p>
          <p className="text-lg mb-6">
            Jahr für Jahr gehen zehntausende Euro direkt ans Finanzamt – ohne dass etwas für Sie übrig bleibt.
          </p>

          <div className="bg-emerald-50 p-6 rounded-lg mt-8 shadow-card">
            <p className="text-xl font-semibold text-emerald-800 mb-2">Doch es gibt einen Ausweg:</p>
            <p className="text-lg text-emerald-700">
              Steuern in Vermögen wandeln – mit Photovoltaik, der richtigen Struktur und einer klaren Strategie.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-lg h-44 relative rounded-lg overflow-hidden shadow-card">
              <Image src="/images/tax-chart.jpg" alt="Steuerdiagramm" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">1</p>
        </div>
      </div>

      {/* Page 2: Die Ausgangssituation */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        <div className="absolute inset-0 pattern-lines opacity-5"></div>

        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 pl-4">
              Die Ausgangssituation – Ihre Steuerlast als Chance
            </h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-transparent p-6 rounded-lg mb-8">
            <p className="text-xl italic text-emerald-700 mb-3">
              Was wäre, wenn Sie Ihre gezahlten Steuern zurückholen könnten?
            </p>
            <p className="text-xl italic text-emerald-700">
              Was wäre, wenn dieses Geld nicht mehr verschwindet – sondern für Sie arbeitet?
            </p>
          </div>

          <p className="text-lg mb-8">Genau das ermöglicht ein clever strukturiertes PV-Investment:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-emerald-500">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                1
              </div>
              <p className="text-lg">Sie investieren in eine Photovoltaikanlage auf fremder Fläche.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-emerald-500">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                2
              </div>
              <p className="text-lg">
                Sie nutzen den Investitionsabzugsbetrag (IAB) und senken Ihre Steuerlast deutlich.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-emerald-500">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                3
              </div>
              <p className="text-lg">Sie bauen Vermögen auf – steuerlich gefördert und langfristig abgesichert.</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-lg h-44 relative rounded-lg overflow-hidden shadow-card">
              <Image src="/images/solar-investment.jpg" alt="PV-Investment" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">2</p>
        </div>
      </div>

      {/* Page 3: Für wen eignet sich dieses Modell? */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 pl-4">Für wen eignet sich dieses Modell?</h2>
          </div>

          <p className="text-lg mb-8 bg-emerald-50 p-4 rounded-lg inline-block">Das PV-Invest eignet sich ideal für:</p>

          <div className="space-y-6">
            <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                ✓
              </div>
              <p className="text-lg">
                Unternehmer, Selbstständige und Top-Angestellte mit zu versteuerndem Einkommen ab 100.000 € (Single)
                bzw. 200.000 € (verheiratet)
              </p>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                ✓
              </div>
              <p className="text-lg">Menschen mit dem Wunsch nach strukturiertem Vermögensaufbau</p>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                ✓
              </div>
              <p className="text-lg">Persönlichkeiten, die Substanz statt Spekulation suchen</p>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-subtle">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                ✓
              </div>
              <p className="text-lg">Investoren, die Steuern nicht nur zahlen, sondern strategisch nutzen wollen</p>
            </div>
          </div>

          <div className="mt-8 gradient-bg-2 p-8 rounded-lg shadow-card">
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-sm h-40 relative rounded-lg overflow-hidden shadow-subtle">
                <Image src="/images/target-audience.jpg" alt="Zielgruppe" fill className="object-cover" />
              </div>
            </div>
            <p className="text-xl text-center text-emerald-700 italic">
              "Erfolgreiche Menschen wissen: Es geht nicht darum, was man verdient – sondern was man behält."
            </p>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">3</p>
        </div>
      </div>

      {/* Page 4: Das Geheimnis liegt in der Struktur */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Das Geheimnis liegt in der Struktur</h2>
          </div>

          <p className="text-lg mb-8">
            Photovoltaik-Investments funktionieren nur dann wirklich effizient, wenn sie auf einem durchdachten
            steuerlichen und rechtlichen Fundament stehen. Das Besondere liegt nicht in der Technik – sondern in der
            Struktur!
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    IAB – Steuervorteil von Anfang an nutzen
                  </h3>
                  <p className="text-lg">
                    Mit dem Investitionsabzugsbetrag (§ 7g EStG) senkst du deine Steuerlast vor der Investition. Bereits
                    bei Planung und Reservierung der PV-Anlage können bis zu 50 % der Investitionssumme steuermindernd
                    angesetzt werden – das erhöht die Eigenkapitalquote und beschleunigt den Vermögensaufbau.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    PPA-Verträge – Planbare Einnahmen sichern
                  </h3>
                  <p className="text-lg">
                    Ein Power Purchase Agreement (PPA) sorgt für stabile, vertraglich geregelte Einnahmen. Diese
                    Langfristverträge mit Energieabnehmern machen deine PV-Anlage bankfähig und planbar – und sichern
                    dir einen soliden Cashflow über 10 bis 20 Jahre.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    Einzelunternehmen – Schnell starten, Vorteile nutzen
                  </h3>
                  <p className="text-lg">
                    Der Einstieg über ein Einzelunternehmen ist besonders einfach. Du kannst kurzfristig agieren,
                    steuerliche Vorteile wie den IAB ausschöpfen und deine Gewinne direkt zur Tilgung oder zum Reinvest
                    nutzen – bei voller Kontrolle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    GbR – Mit Partnern skalieren und Freibeträge nutzen
                  </h3>
                  <p className="text-lg">
                    Die GbR (Gesellschaft bürgerlichen Rechts) eignet sich hervorragend für Co-Investments. Ehepartner,
                    Kinder oder Freunde können eingebunden werden – so nutzt du zusätzliche Freibeträge und sicherst
                    gemeinsam Vermögen, steuerlich optimiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">4</p>
        </div>
      </div>

      {/* Page 5: Beispiel */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 pl-4">Beispiel – So funktioniert's konkret</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-emerald-300"></div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4 border-2 border-emerald-200 shadow-subtle">
                <span className="text-2xl font-bold text-emerald-700">BM</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bernd Müller</h3>
                <p className="text-gray-600">Unternehmer, verh., 47 Jahre</p>
              </div>
            </div>

            {/* Einkommen - nur eine Box */}
            <div className="flex justify-center mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg w-full max-w-md">
                <p className="text-lg font-medium text-emerald-800">Einkommen:</p>
                <p className="text-2xl font-bold">330.000 €</p>
                <p className="text-sm text-emerald-700">2023</p>
              </div>
            </div>

            {/* Steuerlast mit Vergleich alt/neu */}
            <div className="bg-emerald-50 p-6 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-lg font-medium text-emerald-800">Steuerlast:</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-emerald-700">Alt:</p>
                      <p className="text-2xl font-bold text-red-600 line-through">125.000 €</p>
                    </div>
                    <div className="text-2xl font-bold">→</div>
                    <div>
                      <p className="text-sm text-emerald-700">Neu:</p>
                      <p className="text-2xl font-bold text-emerald-600">35.000 €</p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-100 p-4 rounded-lg border-2 border-emerald-200 md:ml-4 w-full md:w-auto">
                  <p className="text-lg font-medium text-emerald-800">Steuerersparnis nach Beratung:</p>
                  <p className="text-3xl font-bold text-emerald-700">90.000 €</p>
                  <p className="text-sm text-emerald-700">(ohne Sonder Afa)</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-emerald-200 p-4 rounded-lg shadow-subtle">
                <p className="text-lg font-medium text-emerald-800 mb-2">Nach Analyse:</p>
                <p className="text-lg">Bildung von 1 IAB à 200.000 €</p>
                <p className="text-lg font-semibold text-emerald-700">
                  → Reduktion des zu verst. Einkommen um 200.000 € (durch den IAB)
                </p>
                <p className="text-lg font-semibold text-emerald-700">
                  → Reduktion der Steuerlast um 80.000 € (Sonder Afa)
                </p>
              </div>

              <div className="bg-white border border-emerald-200 p-4 rounded-lg shadow-subtle">
                <p className="text-lg font-medium text-emerald-800 mb-2">Investition in PV-Anlage:</p>
                <p className="text-lg">400.000 € über GbR</p>
                <p className="text-lg font-semibold text-emerald-700">
                  → Einnahmen von ca. 25.000 € jährlich über 20 Jahre
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">5</p>
        </div>
      </div>

      {/* Page 6: So läuft deine steueroptimierte PV-Investition ab (Teil 1) */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">
              So läuft deine steueroptimierte PV-Investition ab
            </h2>
            <p className="text-xl text-emerald-700 mb-6 pl-4">Mit minimalem Zeitaufwand in drei einfachen Schritten</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    Kennenlerngespräch – 30 Minuten, die sich lohnen
                  </h3>
                  <p className="text-lg">
                    In einem persönlichen Gespräch mit mir, Tobias Kaib, erfährst du glasklar, wie du mithilfe des
                    Investitionsabzugsbetrags (IAB) dein zu versteuerndes Einkommen massiv senken kannst. Du bekommst
                    sofort ein Gefühl für das Potenzial und erkennst: Hier ist echtes Unternehmerdenken gefragt – nicht
                    Steuertricks, sondern Strategie.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    Mini-Hausaufgabe – 15 Minuten Aufwand, maximaler Hebel
                  </h3>
                  <p className="text-lg">
                    Du schaust einmal in deine Unterlagen: Wie hoch war dein zu versteuerndes Einkommen in den letzten
                    Jahren? Welche Steuererklärungen sind noch offen? Mehr braucht es nicht. Diese Infos reichen aus,
                    damit ich dir ein maßgeschneidertes Konzept erstellen kann.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    Strategiegespräch – Klarheit schwarz auf weiß
                  </h3>
                  <p className="text-lg mb-3">
                    Mit deinen Zahlen entwickeln wir gemeinsam eine individuelle Investitionsstrategie. Du siehst:
                  </p>
                  <ul className="space-y-1 pl-4">
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-2">
                        ✓
                      </div>
                      <span>Wie viel IAB du bilden kannst</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-2">
                        ✓
                      </div>
                      <span>Wie stark du dein Einkommen senkst</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-2">
                        ✓
                      </div>
                      <span>Wie hoch deine Steuerersparnis ist</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-2">
                        ✓
                      </div>
                      <span>Welche PV-Investition dazu passt</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-2">
                        ✓
                      </div>
                      <span>Welche Erträge über 20 Jahre realistisch sind</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">6</p>
        </div>
      </div>

      {/* Page 7: So läuft deine steueroptimierte PV-Investition ab (Teil 2) */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">
              So läuft deine steueroptimierte PV-Investition ab (Fortsetzung)
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="pl-4">
              <p className="text-lg">
                Und das Beste: Nach dem Gespräch kannst du alles deinem Steuerberater vorlegen. Ich empfehle
                ausdrücklich, dass du alles mit ihm besprichst. Bei Bedarf begleite ich diesen Dialog – viele meiner
                Mandanten setzen die Strategie gemeinsam mit mir und ihrem Steuerberater um.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Fazit:</h3>
            <p className="text-lg text-emerald-700 mb-2">
              Zwei Stunden deiner Zeit. 125.000 € durchschnittliche Steuerersparnis. 25.000 € Erträge pro Jahr. Eine
              Lösung, die sich rechnet.
            </p>
            <p className="text-lg text-emerald-700">
              Jetzt kostenfrei anfragen und den ersten Schritt gehen – mit einem Partner, der dich versteht.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
              <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Dein Weg zum Erfolg</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <p className="text-lg mb-6">
                Der Weg zu deiner steueroptimierten PV-Investition ist klar strukturiert und einfach zu gehen. Mit der
                richtigen Begleitung kannst du sicher sein, dass alle steuerlichen und rechtlichen Aspekte optimal
                gestaltet sind.
              </p>

              <div className="flex justify-center">
                <div className="w-full max-w-lg h-40 relative rounded-lg overflow-hidden shadow-card">
                  <Image src="/images/process-diagram.jpg" alt="Prozessdiagramm" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">7</p>
        </div>
      </div>

      {/* Page 8: Warum Photovoltaik ideal ist */}
      <div className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        <div className="absolute inset-0 pattern-lines opacity-5"></div>

        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Warum Photovoltaik ideal ist</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                1
              </div>
              <p className="text-lg font-medium text-emerald-800">Planbare Einnahmen</p>
              <p className="text-gray-600">Über 20 Jahre gesichert</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                2
              </div>
              <p className="text-lg font-medium text-emerald-800">Nachhaltigkeit</p>
              <p className="text-gray-600">Als gesellschaftlicher Pluspunkt</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                3
              </div>
              <p className="text-lg font-medium text-emerald-800">Abschreibungsmöglichkeiten</p>
              <p className="text-gray-600">Steuerlich optimiert</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                4
              </div>
              <p className="text-lg font-medium text-emerald-800">Technisch wartungsarm</p>
              <p className="text-gray-600">Minimaler Aufwand</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-subtle">
                5
              </div>
              <p className="text-lg font-medium text-emerald-800">Staatlich geregelt</p>
              <p className="text-gray-600">Anerkannt & abgesichert</p>
            </div>
          </div>

          <div className="gradient-bg-2 p-6 rounded-lg shadow-card">
            <p className="text-xl font-semibold text-emerald-800 mb-4">
              Und das Beste: Sie müssen kein Techniker sein.
            </p>
            <p className="text-lg text-emerald-700">Das Rundum-Sorglos-Paket übernimmt die operative Umsetzung.</p>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-lg h-40 relative rounded-lg overflow-hidden shadow-card">
              <Image src="/images/solar-farm.jpg" alt="Solarpark" fill className="object-cover object-bottom" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">8</p>
        </div>
      </div>

      {/* Page 9: Häufige Fragen & Antworten */}
      <div id="page-9" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Häufige Fragen & klare Antworten</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  ?
                </div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Was ist, wenn das EEG wegfällt?</h3>
              <p className="text-lg">
                → Kein Problem: Wir arbeiten mit sogenannten PPA-Verträgen – das sind langfristige Stromabnahmeverträge
                mit bonitätsstarken Unternehmen. So ist die Einnahmeseite deiner PV-Investition auch ohne staatliche
                Förderung gesichert.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  ?
                </div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                Was ist, wenn die Sonne nicht so scheint wie erwartet?
              </h3>
              <p className="text-lg">
                → Jede Anlage wird vor dem Bau professionell analysiert: Standortanalyse, Gutachten & Ertragsprognose
                (z. B. mit PV-Sol) gehören selbstverständlich dazu. Du investierst mit Sicherheit – nicht ins Blaue.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  ?
                </div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Muss ich eine GmbH gründen?</h3>
              <p className="text-lg">
                → Nein. Du brauchst eine unternehmerische Tätigkeit, das geht auch als Einzelunternehmer oder GbR.
                Unsere Mandanten wählen meist genau diese einfachen, schlanken Strukturen.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  ?
                </div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Ist das ein Steuersparmodell?</h3>
              <p className="text-lg">
                → Nein – das ist ein steuerlich optimiertes Vermögensmodell mit Substanz. Es geht nicht um Tricks,
                sondern um Strategie, die langfristig Vermögen aufbaut und Steuern legal minimiert.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  ?
                </div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Wie hoch ist mein Zeitaufwand wirklich?</h3>
              <p className="text-lg">
                → Maximal 2 Stunden für dich – für ein Konzept, das im Durchschnitt 125.000 € Steuern spart und jährlich
                ca. 25.000 € Ertrag bringt. Du bekommst alles vorbereitet und kannst sofort loslegen.
              </p>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">9</p>
        </div>
      </div>

      {/* Page 10: Die 3 Phasen Ihres PV-Invests */}
      <div id="page-10" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        <div className="absolute inset-0 pattern-lines opacity-5"></div>

        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Die 3 Phasen Ihres PV-Invests</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Analyse & Konzeption</h3>
                  <p className="text-lg">Wir prüfen Ihre steuerliche Situation, Ihr Einkommen, Ihre Struktur.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Strukturaufbau & IAB-Nutzung</h3>
                  <p className="text-lg">
                    Als Einzelunternehmer oder GbR, Bildung der IABs, rechtssichere Strukturierung
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-subtle">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Investition & Umsetzung</h3>
                  <p className="text-lg">PV-Projekt, Vertragsgestaltung, steuerlich optimierte Begleitung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Added more content to fill the page better */}
          <div className="mt-10 bg-emerald-50 p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Der Ablauf im Detail:</h3>
            <p className="text-lg text-emerald-700 mb-4">
              Jede Phase ist sorgfältig geplant und wird von erfahrenen Experten begleitet. Sie erhalten zu jedem
              Zeitpunkt volle Transparenz und Kontrolle über Ihre Investition.
            </p>
            <p className="text-lg text-emerald-700">
              Die Kombination aus steuerlicher Optimierung und nachhaltiger Investition schafft einen doppelten Nutzen:
              Sie reduzieren Ihre Steuerlast und bauen gleichzeitig ein werthaltiges Asset auf.
            </p>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">10</p>
        </div>
      </div>

      {/* Page 11: Was Sie jetzt tun können */}
      <div id="page-11" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Was Sie jetzt tun können</h2>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-40 right-0 w-32 h-32 rounded-full bg-emerald-100 opacity-40"></div>
          <div className="absolute bottom-40 left-0 w-40 h-40 rounded-full bg-emerald-100 opacity-30"></div>

          <p className="text-lg mb-4 relative z-10">
            Sie stehen an einem Punkt, an dem viele scheitern – weil sie weiter warten.
          </p>

          <p className="text-lg mb-6 relative z-10">
            Wenn Sie das Gefühl haben, dass dieses Modell auch für Sie passt, dann lade ich Sie ein:
          </p>

          <div className="space-y-4 mb-8 relative z-10">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                1
              </div>
              <p className="text-xl">Führen Sie ein persönliches Gespräch mit mir</p>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                2
              </div>
              <p className="text-xl">Lassen Sie uns gemeinsam Ihr individuelles Konzept erstellen</p>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0 shadow-subtle">
                3
              </div>
              <p className="text-xl">Nutzen Sie Ihre Steuerlast – und machen Sie sie zu Ihrem Kapital</p>
            </div>
          </div>

          <div className="flex justify-center relative z-10 mb-8">
            <Link href="https://www.tobiaskaib.com" target="_blank" className="print:hidden">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-xl rounded-lg flex items-center shadow-lg">
                Jetzt kostenfrei Termin vereinbaren
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <div className="hidden print:block bg-emerald-600 text-white px-8 py-6 text-xl rounded-lg">
              Jetzt kostenfrei Termin vereinbaren auf www.tobiaskaib.com
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-lg h-40 relative rounded-lg overflow-hidden shadow-card">
              <Image src="/images/meeting.jpg" alt="Beratungsgespräch" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">11</p>
        </div>
      </div>

      {/* Page 12: Ihr Ansprechpartner - Mit verbessertem Profilbild und Logo */}
      <div id="page-12" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col bg-white">
        {/* Modern header with accent color - mit mehr Abstand */}
        <div className="page-header flex justify-end items-center mb-6">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
            <p className="text-sm text-emerald-600 pr-4">PV-Invest für Unternehmer</p>
          </div>
        </div>

        <div className="page-content">
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -left-6 top-0 h-12 w-2 bg-emerald-500 rounded-r-md"></div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">Ihr Ansprechpartner</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
            {/* Verbessertes Profilbild */}
            <ProfileImage size="medium" withBorder={true} />

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-1 bg-emerald-500 rounded-r-md"></div>
              <div className="pl-4">
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Tobias Kaib</h3>
                <p className="text-xl text-emerald-700 mb-3">Spezialist für steueroptimierten Vermögensaufbau</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0 shadow-subtle">
                      ✓
                    </div>
                    <p className="text-lg">Geschäftsführer, Unternehmer, Familienvater</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0 shadow-subtle">
                      ✓
                    </div>
                    <p className="text-lg">Mit Leidenschaft für Struktur, Freiheit und Ehrlichkeit</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0 shadow-subtle">
                      ✓
                    </div>
                    <p className="text-lg">3-Speichen-Regel-Experte & Investor aus Überzeugung</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0 shadow-subtle">
                      ✓
                    </div>
                    <p className="text-lg">Spezialist für steueroptimierte Vermögensstrukturen</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0 shadow-subtle">
                      ✓
                    </div>
                    <p className="text-lg">20 Jahre Erfahrung in der Finanzberatung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Added a closing section to properly end the page */}
          <div className="bg-white p-5 rounded-lg shadow-card mt-4">
            <p className="text-lg text-center text-emerald-700">
              Ich freue mich darauf, Sie auf Ihrem Weg zu mehr finanzieller Freiheit zu begleiten.
            </p>
            <p className="text-lg text-center text-emerald-700 mt-2">
              Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
            </p>
            <div className="flex justify-center mt-4">
              <div className="bg-emerald-50 px-6 py-4 rounded-lg border border-emerald-100">
                <p className="text-lg font-medium text-emerald-800 text-center">www.tobiaskaib.com</p>
              </div>
            </div>
          </div>

          {/* Verbessertes Logo am Ende */}
          <div className="flex justify-center mt-8 bg-white p-4 rounded-lg">
            <ImprovedLogo variant="full" color="emerald" size="large" />
          </div>
        </div>

        <div className="page-footer">
          <p className="text-sm text-emerald-600">12</p>
        </div>
      </div>
    </main>
  )
}
