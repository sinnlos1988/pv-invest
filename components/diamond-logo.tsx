"use client"

import { useState } from "react"

export function DiamondLogo({
  size = "medium",
  className = "",
}: {
  size?: "small" | "medium" | "large"
  className?: string
}) {
  const [imageLoaded, setImageLoaded] = useState(true)

  // Größen für verschiedene Varianten
  const sizeClasses = {
    small: "w-16 h-auto",
    medium: "w-24 h-auto",
    large: "w-32 h-auto",
  }

  // Fallback-Komponente, falls das Bild nicht geladen werden kann
  const LogoFallback = () => (
    <div
      className={`flex items-center justify-center bg-blue-800 text-white ${sizeClasses[size]} ${className} diamond-shape`}
      style={{
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        aspectRatio: "1/1",
      }}
    >
      <span className="font-bold text-xl">TK</span>
    </div>
  )

  // Wenn das Bild nicht geladen werden konnte, zeige den Fallback
  if (!imageLoaded) {
    return <LogoFallback />
  }

  // Versuche das Bild zu laden
  return (
    <img
      src="/images/tobias-kaib-logo-diamond.png"
      alt="Tobias Kaib Logo"
      className={`${sizeClasses[size]} drop-shadow-lg ${className}`}
      onError={() => setImageLoaded(false)}
    />
  )
}
