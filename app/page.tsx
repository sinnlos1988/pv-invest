"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Shield, TrendingUp, Coins, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PrintButton from "@/components/print-button"
import { ImprovedLogo } from "@/components/improved-logo"
import { ProfileImage } from "@/components/profile-image"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 13 // Cover + 12 Seiten

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentPage > 0) {
        setCurrentPage(currentPage - 1)
      } else if (event.key === "ArrowRight" && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, totalPages])

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const NavigationButtons = () => (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4 py-4 print:hidden">
      <Button
        onClick={prevPage}
        disabled={currentPage === 0}
        variant="outline"
        className="flex items-center gap-2 bg-white hover:bg-emerald-50 border-emerald-200"
      >
        <ChevronLeft className="w-4 h-4" />
        Vorherige Seite
      </Button>

      <div className="flex items-center gap-4">
        <span className="text-sm text-emerald-700 font-medium">
          Seite {currentPage + 1} von {totalPages}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentPage ? "bg-emerald-600" : "bg-emerald-200 hover:bg-emerald-400"
              }`}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
        variant="outline"
        className="flex items-center gap-2 bg-white hover:bg-emerald-50 border-emerald-200"
      >
        Nächste Seite
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )

  const pages = [
    // Cover Page
    <div
      key="cover"
      className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col items-center justify-center text-center"
    >
      {/* Modern gradient background with pattern */}
      <div className="absolute inset-0 gradient-bg-gold pattern-dots opacity-10"></div>

      {/* Gold bars background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Goldbarren"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full gradient-bg-gold opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-tl-full gradient-bg-1 opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-emerald-800 mb-6 text-shadow">Gold & Silber richtig investieren</h1>
        <p className="text-xl text-emerald-700 mb-4">Der kompakte Guide für Einsteiger & smarte Anleger</p>
        <p className="text-2xl text-emerald-700 mb-10 font-medium">
          So schützt du dein Vermögen mit Edelmetallen – alles, was du über Gold, Silber & Co wissen musst
        </p>
        <div className="w-24 h-1 bg-gold-500 mx-auto mb-10"></div>
      </div>

      {/* Logo in der unteren linken Ecke */}
      <div className="absolute bottom-0 left-0 z-20">
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-600 rounded-tr-full"></div>
          <div className="absolute bottom-4 left-4">
            <ImprovedLogo variant="full" color="white" size="medium" />
          </div>
        </div>
      </div>

      {/* Gold coin icon unten rechts */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
          <Coins className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>,

    // Page 1: Einleitung
    <div key="page1" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">
            Warum dieser Guide – In Zeiten der Unsicherheit
          </h2>
        </div>

        <p className="text-lg mb-4">
          In Zeiten von Inflation, geopolitischer Unsicherheit und schwankenden Märkten stellen sich immer mehr Anleger
          die Frage:
        </p>

        <blockquote className="border-l-4 border-gold-500 pl-4 italic text-xl text-emerald-700 my-6 bg-gradient-to-r from-gold-50 to-transparent p-4 rounded-r-lg shadow-subtle">
          „Wie kann ich mein Vermögen langfristig und sicher schützen?"
        </blockquote>

        <p className="text-lg mb-4">
          Die Antwort liegt oft in den ältesten Wertaufbewahrungsmitteln der Menschheit: Gold und Silber.
        </p>

        <div className="bg-emerald-50 p-4 rounded-lg mt-6 shadow-card">
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Ziel dieses Freebies:</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0">
                ✓
              </div>
              <p className="text-lg">Edelmetalle sinnvoll erklären</p>
            </div>
            <div className="flex items-start">
              <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0">
                ✓
              </div>
              <p className="text-lg">Entscheidungsgrundlagen liefern</p>
            </div>
            <div className="flex items-start">
              <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0">
                ✓
              </div>
              <p className="text-lg">Typische Fehler vermeiden</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">1</p>
      </div>
    </div>,

    // Page 2: Warum überhaupt Edelmetalle?
    <div key="page2" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="absolute inset-0 pattern-lines opacity-5"></div>

      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 pl-4">Warum überhaupt Edelmetalle?</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0 shadow-subtle">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Inflation & Geldwertverlust</h3>
                <p className="text-lg">
                  Gold und Silber behalten ihren Wert, während Papiergeld an Kaufkraft verliert.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0 shadow-subtle">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  Historischer Werterhalt seit Jahrtausenden
                </h3>
                <p className="text-lg">Gold wird seit über 4.000 Jahren als Wertaufbewahrungsmittel geschätzt.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0 shadow-subtle">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Psychologie der sicheren Häfen</h3>
                <p className="text-lg">In Krisenzeiten fliehen Anleger in "sichere Häfen" wie Edelmetalle.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0 shadow-subtle">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Unterschied zu rein spekulativen Assets</h3>
                <p className="text-lg">
                  Edelmetalle haben einen intrinsischen Wert im Gegensatz zu Aktien oder Kryptowährungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">2</p>
      </div>
    </div>,

    // Page 3: Gold & Silber Unterschiede
    <div key="page3" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-8">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-8 pl-4">Gold & Silber: Unterschiede im Überblick</h2>
        </div>

        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-4">
            <h3 className="text-xl font-bold text-center">Vergleichstabelle: Gold vs. Silber</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left p-4 font-semibold text-emerald-800">Kriterium</th>
                  <th className="text-center p-4 font-semibold text-gold-700">Gold</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Silber</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Währungsersatz</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Ja</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Eingeschränkt
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium">Industrieller Bedarf</td>
                  <td className="p-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Gering</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Hoch</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Lagerwert</td>
                  <td className="p-4 text-center text-sm">Hoher Wert auf kleinem Raum</td>
                  <td className="p-4 text-center text-sm">Sperriger, mehr Volumen</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium">Besteuerung</td>
                  <td className="p-4 text-center text-sm">Steuerfrei nach 1 Jahr</td>
                  <td className="p-4 text-center text-sm">Differenzbesteuerung möglich</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Volatilität</td>
                  <td className="p-4 text-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Niedriger
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      Höher
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-emerald-50 p-5 rounded-lg shadow-card">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">Fazit der Unterschiede:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-gold-500">
              <h4 className="font-semibold text-gold-700 mb-2">Gold eignet sich für:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Langfristige Wertaufbewahrung</li>
                <li>• Währungsabsicherung</li>
                <li>• Kompakte Lagerung</li>
                <li>• Steueroptimierung</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-gray-400">
              <h4 className="font-semibold text-gray-700 mb-2">Silber eignet sich für:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Höhere Renditechancen</li>
                <li>• Industrielle Nachfrage</li>
                <li>• Kleinere Investments</li>
                <li>• Diversifikation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">3</p>
      </div>
    </div>,

    // Page 4: Formen des Investments
    <div key="page4" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">Formen des Investments</h2>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Physisch vs. Papiergold</h3>
                <p className="text-lg mb-2">
                  <strong>Physisches Gold:</strong> Echte Münzen und Barren
                </p>
                <p className="text-lg">
                  <strong>Papiergold:</strong> Zertifikate, ETFs ohne Goldbesitz
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Barren oder Münzen</h3>
                <p className="text-lg mb-2">
                  <strong>Barren:</strong> Niedrigere Prämien, schwerer zu verkaufen
                </p>
                <p className="text-lg">
                  <strong>Münzen:</strong> Höhere Prämien, bessere Liquidität
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Xetra-Gold / ETCs</h3>
                <p className="text-lg">Börsengehandelte Produkte ohne Auslieferungsanspruch.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Lagerungsmöglichkeiten</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Zuhause:</strong> Volle Kontrolle, Sicherheitsrisiko
                  </p>
                  <p className="text-lg">
                    <strong>Bankschließfach:</strong> Sicher, Zugang kann eingeschränkt werden
                  </p>
                  <p className="text-lg">
                    <strong>Zollfreilager:</strong> Professionell, steuerfrei
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gold-50 p-5 rounded-lg shadow-card border-l-4 border-gold-500">
          <h3 className="text-xl font-bold text-gold-800 mb-3">Fazit:</h3>
          <p className="text-lg text-gold-700">
            Physisches Gold und Silber in eigenem Besitz ist langfristig sinnvoller als Papiergold.
          </p>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">4</p>
      </div>
    </div>,

    // Page 5: Historische Wertentwicklung
    <div key="page5" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="absolute inset-0 pattern-lines opacity-5"></div>

      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">
            Historische Wertentwicklung & Vergleich mit Aktien
          </h2>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-card mb-6">
          <h3 className="text-xl font-semibold text-emerald-700 mb-3">Performance-Vergleich seit 2000</h3>
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-lg h-40 relative rounded-lg overflow-hidden shadow-card">
              <Image
                src="/images/gold-silver-dax-chart.png"
                alt="Gold, Silber und DAX Chart Entwicklung seit 2000"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gold-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-gold-800">Gold</h4>
              <p className="text-2xl font-bold text-gold-700">+1.214%</p>
              <p className="text-sm text-gold-600">seit 2000</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-gray-800">Silber</h4>
              <p className="text-2xl font-bold text-gray-700">+544%</p>
              <p className="text-sm text-gray-600">seit 2000</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800">DAX</h4>
              <p className="text-2xl font-bold text-blue-700">+353%</p>
              <p className="text-sm text-blue-600">seit 2000</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Volatilität & Korrelation</h3>
            <p className="text-lg">Gold zeigt eine niedrige Korrelation zu Aktien und dient als Diversifikation.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Krisenzeiten im Fokus</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Finanzkrise 2008:</span>
                <span className="text-green-600 font-bold">Gold +25%, Aktien -40%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Corona-Crash 2020:</span>
                <span className="text-green-600 font-bold">Gold +24%, DAX -37%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Inflation 2022:</span>
                <span className="text-green-600 font-bold">Gold stabil, Aktien volatil</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Performance in Inflationsphasen</h3>
            <p className="text-lg">
              Edelmetalle haben in Zeiten hoher Inflation oft besser abgeschnitten als andere Anlageklassen.
            </p>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">5</p>
      </div>
    </div>,

    // Page 6: In welche Produkte konkret investieren?
    <div key="page6" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">In welche Produkte konkret investieren?</h2>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                Au
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold-700 mb-2">1 oz Goldmünzen – Die Klassiker</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Krügerrand:</strong> Weltweit anerkannt
                  </p>
                  <p className="text-lg">
                    <strong>Maple Leaf:</strong> 99,99% Reinheit
                  </p>
                  <p className="text-lg">
                    <strong>Wiener Philharmoniker:</strong> Europäische Alternative
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                ⬛
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold-700 mb-2">Goldbarren – Wann sinnvoll?</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>1g Barren:</strong> Für kleine Beträge, hohe Prämien
                  </p>
                  <p className="text-lg">
                    <strong>10g Barren:</strong> Guter Kompromiss
                  </p>
                  <p className="text-lg">
                    <strong>100g+ Barren:</strong> Niedrige Prämien
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                Ag
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Silber: Differenzbesteuerte Münzen</h3>
                <p className="text-lg mb-2">
                  <strong>Der Steuertrick:</strong> Nur die Händler-Marge wird besteuert!
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-lg">
                    <strong>Beispiel:</strong> Nur 5€ werden mit 19% MwSt. belastet statt 30€
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg shadow-card border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-700 mb-2">⚠️ Warnung vor Sammelmünzen</h3>
            <p className="text-lg text-red-600">Vermeiden Sie Sammelmünzen. Setzen Sie auf bewährte Anlagemünzen!</p>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <div className="w-full max-w-lg h-32 relative rounded-lg overflow-hidden shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Goldmünzen und Barren"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gold-800/30 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">6</p>
      </div>
    </div>,

    // Page 7: Steuern und Vorteile
    <div key="page7" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4 pl-4">Steuern und Vorteile</h2>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Gold steuerfrei nach 12 Monaten</h3>
                <p className="text-lg">Physisches Gold ist nach 12 Monaten steuerfrei verkaufbar.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-400"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                Ag
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Silber: Steuervorteile nutzen</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-1">Differenzbesteuerung beim Kauf:</h4>
                    <p className="text-lg">Günstig durch reduzierte Mehrwertsteuer</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-1">Verkauf nach 12 Monaten:</h4>
                    <p className="text-lg">Wie bei Gold: Komplett steuerfrei</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                ⚠️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">Mehrwertsteuer-Falle vermeiden</h3>
                <p className="text-lg mb-2">
                  <strong>Normal:</strong> 19% Mehrwertsteuer auf Silber
                </p>
                <p className="text-lg">
                  <strong>Lösung:</strong> Differenzbesteuerte Münzen kaufen
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg shadow-card border-l-4 border-emerald-500">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Keine Abgeltungssteuer</h3>
            <p className="text-lg">Keine Abgeltungssteuer wie bei Aktien nach der Haltefrist.</p>
          </div>
        </div>

        <div className="mt-6 bg-gold-50 p-5 rounded-lg shadow-card">
          <h3 className="text-xl font-bold text-gold-800 mb-3">Steuerlicher Vergleich:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg text-center">
              <h4 className="font-semibold text-emerald-700">Physisches Gold</h4>
              <p className="text-2xl font-bold text-emerald-600">0€</p>
              <p className="text-sm text-emerald-600">Steuern nach 1 Jahr</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <h4 className="font-semibold text-blue-700">Aktien/ETFs</h4>
              <p className="text-2xl font-bold text-blue-600">2.638€</p>
              <p className="text-sm text-blue-600">Abgeltungssteuer</p>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <h4 className="font-semibold text-gray-700">Festgeld</h4>
              <p className="text-2xl font-bold text-gray-600">2.638€</p>
              <p className="text-sm text-gray-600">Abgeltungssteuer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">7</p>
      </div>
    </div>,

    // Page 8: FAQ / Häufige Fragen
    <div key="page8" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="absolute inset-0 pattern-lines opacity-5"></div>

      <div className="page-header flex justify-end items-center mb-5">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-5 pl-4">Häufige Fragen & klare Antworten</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                ?
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Wie lagere ich Gold sicher?</h3>
            <p className="text-lg">→ Tresor, Schließfach oder Zollfreilager. Diversifizieren Sie die Lagerung!</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                ?
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Was passiert bei Enteignung?</h3>
            <p className="text-lg">→ Diversifikation über Länder und Lagerorte minimiert das Risiko.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                ?
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Wie kann ich anonym kaufen?</h3>
            <p className="text-lg">→ Barkäufe bis 1.999,99€ sind ohne Ausweis möglich.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                ?
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Wie erkenne ich Fälschungen?</h3>
            <p className="text-lg">→ Kaufen Sie nur bei seriösen Händlern. Echtes Gold ist nicht magnetisch.</p>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">8</p>
      </div>
    </div>,

    // Page 9: Vorgehensweise für Einsteiger
    <div key="page9" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-5">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-5 pl-4">
            Vorgehensweise für Einsteiger – In 5 einfachen Schritten
          </h2>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Kaufbetrag festlegen</h3>
                <p className="text-lg mb-2">
                  <strong>Faustregel:</strong> 5-10% des Gesamtvermögens in Edelmetalle
                </p>
                <div className="bg-emerald-50 p-2 rounded">
                  <p className="text-lg">
                    <strong>Beispiel:</strong> Bei 100.000€ Vermögen → 5.000-10.000€ in Gold/Silber
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Entscheidung: Gold, Silber oder beides?</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Konservativ:</strong> 80% Gold, 20% Silber
                  </p>
                  <p className="text-lg">
                    <strong>Ausgewogen:</strong> 60% Gold, 40% Silber
                  </p>
                  <p className="text-lg">
                    <strong>Chancenorientiert:</strong> 50% Gold, 50% Silber
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Auswahl von Münzen/Barren</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Gold:</strong> 1 oz Münzen für Einsteiger
                  </p>
                  <p className="text-lg">
                    <strong>Silber:</strong> Differenzbesteuerte Münzen
                  </p>
                  <p className="text-lg">
                    <strong>Barren:</strong> Erst ab größeren Summen sinnvoll
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Seriösen Händler wählen</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Online:</strong> Etablierte Händler
                  </p>
                  <p className="text-lg">
                    <strong>Lokal:</strong> Münzhändler vor Ort
                  </p>
                  <p className="text-lg">
                    <strong>Prüfen:</strong> Impressum, Bewertungen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Sichere Lagerung & langfristiges Denken</h3>
                <div className="space-y-1">
                  <p className="text-lg">
                    <strong>Lagerung:</strong> Tresor, Schließfach
                  </p>
                  <p className="text-lg">
                    <strong>Mindesthalte­dauer:</strong> 12 Monate
                  </p>
                  <p className="text-lg">
                    <strong>Strategie:</strong> Langfristig denken
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gold-50 p-5 rounded-lg shadow-card border-l-4 border-gold-500">
          <h3 className="text-xl font-bold text-gold-800 mb-2">Wichtiger Tipp:</h3>
          <p className="text-lg text-gold-700">Starten Sie klein und sammeln Sie Erfahrungen.</p>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">9</p>
      </div>
    </div>,

    // Page 10: Bonus: 5 typische Fehler beim Edelmetallkauf
    <div key="page10" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="absolute inset-0 pattern-lines opacity-5"></div>

      <div className="page-header flex justify-end items-center mb-5">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-red-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-red-800 mb-5 pl-4">Bonus: 5 typische Fehler beim Edelmetallkauf</h2>
          <p className="text-xl text-red-700 mb-6 pl-4">Vermeiden Sie diese kostspieligen Anfängerfehler!</p>
        </div>

        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden border-l-4 border-red-500">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">Zu kleine Stückelung</h3>
                <p className="text-lg mb-2">
                  <strong>Fehler:</strong> 1g Goldbarren kaufen → bis zu 20% Aufschlag!
                </p>
                <p className="text-lg text-green-700">
                  <strong>Besser:</strong> 1 oz Münzen oder größere Barren
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden border-l-4 border-red-500">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">Falsche Händler / Sammelmünzen</h3>
                <p className="text-lg mb-2">
                  <strong>Fehler:</strong> "Limitierte Edition" für 200€ kaufen
                </p>
                <p className="text-lg text-green-700">
                  <strong>Besser:</strong> Etablierte Anlagemünzen bei seriösen Händlern
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden border-l-4 border-red-500">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">Papiergold statt physisch</h3>
                <p className="text-lg mb-2">
                  <strong>Fehler:</strong> ETCs kaufen → kein echtes Gold
                </p>
                <p className="text-lg text-green-700">
                  <strong>Besser:</strong> Physisches Gold in eigenem Besitz
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden border-l-4 border-red-500">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  Lagerung im Bankschließfach mit Zugriff der Bank
                </h3>
                <p className="text-lg mb-2">
                  <strong>Fehler:</strong> Alles in einem Schließfach
                </p>
                <p className="text-lg text-green-700">
                  <strong>Besser:</strong> Diversifizierte Lagerung
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-card relative overflow-hidden border-l-4 border-red-500">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-subtle">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-2">Keine Exit-Strategie</h3>
                <p className="text-lg mb-2">
                  <strong>Fehler:</strong> Kaufen ohne Plan für Verkauf
                </p>
                <p className="text-lg text-green-700">
                  <strong>Besser:</strong> Klare Strategie: Wann verkaufen?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-emerald-50 p-5 rounded-lg shadow-card border-l-4 border-emerald-500">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">💡 Bonus-Tipp:</h3>
          <p className="text-lg text-emerald-700">Lassen Sie sich nicht von Verkäufern unter Druck setzen.</p>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">10</p>
      </div>
    </div>,

    // Page 11: Schlusswort + Call-to-Action
    <div key="page11" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col">
      <div className="page-header flex justify-end items-center mb-5">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-5 pl-4">Schlusswort – Gold ist Ihre Versicherung</h2>
        </div>

        <div className="absolute top-36 right-0 w-28 h-28 rounded-full bg-gold-100 opacity-40"></div>
        <div className="absolute bottom-36 left-0 w-36 h-36 rounded-full bg-emerald-100 opacity-30"></div>

        <div className="relative z-10">
          <p className="text-lg mb-5">Sie haben das Fundament für eine durchdachte Edelmetall-Strategie gelegt.</p>

          <blockquote className="border-l-4 border-gold-500 pl-4 italic text-xl text-emerald-700 my-6 bg-gradient-to-r from-gold-50 to-transparent p-4 rounded-r-lg shadow-subtle">
            "Gold ist Ihre Versicherung gegen die Ungewissheit der Zukunft."
          </blockquote>

          <div className="bg-white p-5 rounded-lg shadow-card mb-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Was Sie jetzt wissen:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Warum Edelmetalle sinnvoll sind</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Unterschiede zwischen Gold und Silber</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Welche Produkte Sie kaufen sollten</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Steuerliche Vorteile nutzen</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Typische Fehler vermeiden</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-1">
                    ✓
                  </div>
                  <span>Sichere Lagerung planen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-gold-50 p-5 rounded-lg shadow-card mb-6">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Ihr nächster Schritt:</h3>
            <p className="text-lg mb-3">Beginnen Sie mit einem kleinen Investment und sammeln Sie Erfahrungen.</p>
            <p className="text-lg font-semibold text-emerald-700">Starten Sie heute mit Ihrem ersten Kauf.</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-emerald-600 text-white px-6 py-5 text-xl rounded-lg">
              Persönliche Beratung auf www.tobiaskaib.com
            </div>
          </div>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">11</p>
      </div>
    </div>,

    // Page 12: Ihr Ansprechpartner
    <div key="page12" className="page relative h-[297mm] w-[210mm] mx-auto flex flex-col bg-white">
      <div className="page-header flex justify-end items-center mb-5">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gold-500 mr-3"></div>
          <p className="text-sm text-emerald-600 pr-4">Gold & Silber Investment Guide</p>
        </div>
      </div>

      <div className="page-content">
        <div className="relative">
          <div className="absolute -left-6 top-0 h-12 w-2 bg-gold-500 rounded-r-md"></div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-3 pl-4">Ihr Ansprechpartner</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mb-5">
          <ProfileImage size="medium" withBorder={true} />

          <div className="relative">
            <div className="absolute -left-3 top-0 h-full w-1 bg-gold-500 rounded-r-md"></div>
            <div className="pl-3">
              <h3 className="text-2xl font-bold text-emerald-800 mb-1">Tobias Kaib</h3>
              <p className="text-xl text-emerald-700 mb-2">Spezialist für Vermögensschutz & Edelmetall-Investments</p>

              <div className="space-y-1 mb-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0 shadow-subtle">
                    ✓
                  </div>
                  <p className="text-lg">Unabhängiger Finanzberater</p>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0 shadow-subtle">
                    ✓
                  </div>
                  <p className="text-lg">20+ Jahre Erfahrung</p>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0 shadow-subtle">
                    ✓
                  </div>
                  <p className="text-lg">Krisenvorsorge-Experte</p>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0 shadow-subtle">
                    ✓
                  </div>
                  <p className="text-lg">Autor & Referent</p>
                </div>

                <div className="flex items-start">
                  <div className="w-5 h-5 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-white font-bold mr-2 mt-1 flex-shrink-0 shadow-subtle">
                    ✓
                  </div>
                  <p className="text-lg">Edelmetall-Beratung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-card mt-3">
          <p className="text-lg text-center text-emerald-700 mb-3">
            "Meine Mission ist es, Menschen dabei zu helfen, ihr Vermögen langfristig und sicher zu schützen."
          </p>
          <p className="text-lg text-center text-emerald-700 mt-1">
            Kontaktieren Sie mich für eine unverbindliche Erstberatung.
          </p>
          <div className="flex justify-center mt-3">
            <div className="bg-emerald-50 px-5 py-3 rounded-lg border border-emerald-100">
              <p className="text-lg font-medium text-emerald-800 text-center">www.tobiaskaib.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 bg-white p-3 rounded-lg">
          <ImprovedLogo variant="full" color="emerald" size="large" />
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">© 2024 Tobias Kaib. Alle Angaben ohne Gewähr.</p>
        </div>
      </div>

      <div className="page-footer">
        <p className="text-sm text-emerald-600">12</p>
      </div>
    </div>,
  ]

  return (
    <main className="bg-gray-50 min-h-screen print:bg-white print:p-0">
      {/* Print Button */}
      <div className="fixed bottom-4 right-4 print:hidden z-50">
        <PrintButton />
      </div>

      {/* Top Navigation */}
      <div className="print:hidden">
        <NavigationButtons />
      </div>

      {/* Page Content */}
      <div className="flex justify-center items-center min-h-screen py-8 print:py-0">
        <div className="transition-all duration-300 ease-in-out">{pages[currentPage]}</div>
      </div>

      {/* Bottom Navigation */}
      <div className="print:hidden">
        <NavigationButtons />
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-4 left-4 print:hidden z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-emerald-200">
          <p className="text-xs text-emerald-700">💡 Tipp: Verwenden Sie ← → Pfeiltasten zur Navigation</p>
        </div>
      </div>
    </main>
  )
}
