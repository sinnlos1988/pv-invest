"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Loader2 } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamischer Import von html2canvas und jsPDF, um Build-Probleme zu vermeiden
const ClientPdfGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const generatePdf = async () => {
    try {
      setIsGenerating(true)
      setProgress(10)

      // Dynamisch html2canvas und jsPDF importieren
      const html2canvas = (await import("html2canvas")).default
      const { jsPDF } = await import("jspdf")

      setProgress(20)

      // Funktion zum Erfassen einer Seite als Bild
      const captureSection = async (selector: string) => {
        const section = document.querySelector(selector) as HTMLElement
        if (!section) return null

        // Sicherstellen, dass die Seite sichtbar ist für die Erfassung
        const originalDisplay = section.style.display
        section.style.display = "block"

        const canvas = await html2canvas(section, {
          scale: 2, // Höhere Qualität
          useCORS: true,
          logging: false,
          allowTaint: true,
        })

        // Zurücksetzen des Display-Stils
        section.style.display = originalDisplay

        return canvas
      }

      // Neue PDF-Instanz erstellen (A4-Format)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Alle Sektionen auswählen
      const sections = document.querySelectorAll("section")
      const totalSections = sections.length

      setProgress(30)

      // Jede Sektion als Bild erfassen und zur PDF hinzufügen
      for (let i = 0; i < totalSections; i++) {
        const section = sections[i]
        const sectionId = `#${section.id || `section-${i}`}`

        // ID hinzufügen, falls nicht vorhanden
        if (!section.id) {
          section.id = `section-${i}`
        }

        setProgress(30 + Math.floor((i / totalSections) * 60))

        const canvas = await captureSection(sectionId)
        if (canvas) {
          // Erste Seite wird direkt hinzugefügt, für weitere Seiten wird eine neue Seite erstellt
          if (i > 0) {
            pdf.addPage()
          }

          const imgData = canvas.toDataURL("image/jpeg", 0.9)
          pdf.addImage(imgData, "JPEG", 0, 0, 210, 297) // A4-Größe in mm
        }
      }

      setProgress(95)

      // PDF herunterladen
      pdf.save("pv-invest-brochure.pdf")

      setProgress(100)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Fehler bei der PDF-Generierung. Bitte versuchen Sie es später erneut.")
    } finally {
      setIsGenerating(false)
      setProgress(0)
    }
  }

  return (
    <div className="flex flex-col">
      <Button onClick={generatePdf} className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isGenerating}>
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            PDF wird erstellt... {progress > 0 ? `${progress}%` : ""}
          </>
        ) : (
          <>
            <FileDown className="mr-2 h-4 w-4" />
            PDF herunterladen
          </>
        )}
      </Button>
      {isGenerating && progress > 0 && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  )
}

// Verwenden von dynamic import mit ssr: false, um Hydration-Fehler zu vermeiden
export default dynamic(() => Promise.resolve(ClientPdfGenerator), { ssr: false })
