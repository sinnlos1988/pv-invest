"use client"

import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { useState } from "react"

export default function PdfButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGeneratePdf = async () => {
    try {
      setIsLoading(true)
      window.open("/api/generate-pdf", "_blank")
    } catch (error) {
      console.error("Error opening PDF:", error)
    } finally {
      // Kurze Verzögerung, damit der Button nicht zu schnell zurückgesetzt wird
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  return (
    <Button onClick={handleGeneratePdf} className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isLoading}>
      <FileDown className="mr-2 h-4 w-4" />
      {isLoading ? "Wird geladen..." : "PDF herunterladen"}
    </Button>
  )
}
