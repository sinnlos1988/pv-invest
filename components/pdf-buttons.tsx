"use client"
import dynamic from "next/dynamic"
import PrintButton from "@/components/print-button"

// Dynamischer Import der PDF-Generator-Komponente
const ClientPdfGenerator = dynamic(() => import("@/components/client-pdf-generator"), {
  ssr: false,
  loading: () => <div className="bg-emerald-600 text-white px-4 py-2 rounded">PDF-Generator wird geladen...</div>,
})

export default function PdfButtons() {
  return (
    <div className="fixed top-4 right-4 print:hidden z-50 flex flex-col gap-2">
      <ClientPdfGenerator />
      <PrintButton />
    </div>
  )
}
