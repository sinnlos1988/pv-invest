"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown, Loader2 } from "lucide-react"

export default function ServerPdfButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGeneratePdf = async () => {
    try {
      setIsGenerating(true)
      setError(null)

      // API-Route aufrufen, die das PDF generiert
      const response = await fetch("/api/generate-pdf", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.details || `Status: ${response.status} ${response.statusText}`
        throw new Error(`PDF generation failed: ${errorMessage}`)
      }

      // PDF-Blob aus der Antwort extrahieren
      const blob = await response.blob()

      if (blob.size === 0) {
        throw new Error("Generated PDF is empty")
      }

      // Blob als Datei herunterladen
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "pv-invest-brochure.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error generating PDF:", error)
      setError(error instanceof Error ? error.message : "Unbekannter Fehler")
      alert(`Fehler bei der PDF-Generierung: ${error instanceof Error ? error.message : "Unbekannter Fehler"}`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col">
      <Button
        onClick={handleGeneratePdf}
        className="bg-emerald-600 hover:bg-emerald-700 text-white"
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            PDF wird erstellt...
          </>
        ) : (
          <>
            <FileDown className="mr-2 h-4 w-4" />
            PDF herunterladen
          </>
        )}
      </Button>
      {error && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-red-600 text-xs">
          <p className="font-semibold">Fehler:</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}
