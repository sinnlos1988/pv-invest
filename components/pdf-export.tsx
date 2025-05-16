"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function PdfExportButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleExport = async () => {
    setIsGenerating(true)

    try {
      // Zeige Anleitung für den manuellen PDF-Export
      alert(`
Anleitung zum PDF-Export:

1. Klicken Sie auf den "Als PDF drucken" Button
2. Wählen Sie im Druckdialog "Als PDF speichern" oder "In PDF drucken"
3. Wählen Sie DIN A4 als Papierformat
4. Deaktivieren Sie Kopf- und Fußzeilen
5. Stellen Sie sicher, dass "Hintergrundgrafiken" aktiviert ist

Alternative Methode:
- Verwenden Sie den "PDF herunterladen" Button für die serverseitige PDF-Generierung
      `)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button onClick={handleExport} className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isGenerating}>
      <FileDown className="mr-2 h-4 w-4" />
      PDF-Export Anleitung
    </Button>
  )
}
