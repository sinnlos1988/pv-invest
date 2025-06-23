"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { useEffect, useState } from "react"

export default function PrintButton() {
  const [isPrinting, setIsPrinting] = useState(false)

  useEffect(() => {
    // Add print-specific styles when component mounts
    const style = document.createElement("style")
    style.innerHTML = `
      @page {
        size: A4 portrait;
        margin: 0;
      }
      
      @media print {
        html, body {
          width: 210mm;
          height: 297mm;
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        img {
          max-width: 100% !important;
          max-height: 100% !important;
          page-break-inside: avoid !important;
        }

        .page-content {
          overflow: visible !important;
          max-height: none !important;
        }

        .page {
          overflow: visible !important;
          page-break-after: always !important;
          break-after: page !important;
        }

        .page-break {
          page-break-after: always !important;
          break-after: page !important;
          height: 0 !important;
          display: block !important;
        }
      }
    `
    document.head.appendChild(style)

    // Listen for print events
    window.addEventListener("beforeprint", () => setIsPrinting(true))
    window.addEventListener("afterprint", () => setIsPrinting(false))

    return () => {
      document.head.removeChild(style)
      window.removeEventListener("beforeprint", () => setIsPrinting(true))
      window.removeEventListener("afterprint", () => setIsPrinting(false))
    }
  }, [])

  const handlePrint = () => {
    // Ensure all images are loaded before printing
    const images = document.querySelectorAll("img")
    let loadedImages = 0
    let failedImages = 0
    const totalImages = images.length

    if (totalImages === 0) {
      // No images to load, proceed with printing
      window.print()
      return
    }

    // Show loading state
    setIsPrinting(true)

    // Check if all images are loaded
    const checkAllImagesLoaded = () => {
      loadedImages++
      if (loadedImages + failedImages === totalImages) {
        // All images are loaded or failed, proceed with printing
        setTimeout(() => {
          window.print()
          setIsPrinting(false)
        }, 500)
      }
    }

    const handleImageError = () => {
      failedImages++
      if (loadedImages + failedImages === totalImages) {
        // All images are loaded or failed, proceed with printing
        setTimeout(() => {
          window.print()
          setIsPrinting(false)
        }, 500)
      }
    }

    // Check each image
    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded()
      } else {
        img.onload = checkAllImagesLoaded
        img.onerror = handleImageError
      }
    })
  }

  return (
    <div className="fixed bottom-4 right-4 print:hidden z-50">
      <Button onClick={handlePrint} className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isPrinting}>
        <Printer className="mr-2 h-4 w-4" />
        {isPrinting ? "Wird vorbereitet..." : "Als PDF drucken"}
      </Button>
      <div className="mt-2 text-xs text-emerald-700">Tipp: Wählen Sie im Druckdialog "Als PDF speichern"</div>
    </div>
  )
}
