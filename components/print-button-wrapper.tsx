"use client"

import PrintButton from "./print-button"

export default function PrintButtonWrapper() {
  return (
    <div className="fixed top-4 right-4 print:hidden z-50">
      <PrintButton />
    </div>
  )
}
