"use client"

import { useState } from "react"

export function ImprovedLogo({
  variant = "full", // "full" oder "icon"
  color = "emerald", // "emerald", "white", "gold"
  size = "medium", // "small", "medium", "large"
  className = "",
}: {
  variant?: "full" | "icon"
  color?: "emerald" | "white" | "gold"
  size?: "small" | "medium" | "large"
  className?: string
}) {
  const [imageLoaded, setImageLoaded] = useState(true)

  // Größen für verschiedene Varianten
  const sizeClasses = {
    small: variant === "icon" ? "h-8 w-8" : "h-8 w-24",
    medium: variant === "icon" ? "h-12 w-12" : "h-12 w-36",
    large: variant === "icon" ? "h-16 w-16" : "h-16 w-48",
  }

  // Farben für Fallback
  const colorClasses = {
    emerald: "bg-emerald-600 text-white",
    white: "bg-white text-emerald-600",
    gold: "bg-gold-500 text-white",
  }

  // Fallback-Komponente, falls das Bild nicht geladen werden kann
  const LogoFallback = () => (
    <div
      className={`flex items-center justify-center rounded ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {variant === "icon" ? (
        <span className="font-bold text-lg">TK</span>
      ) : (
        <span className="font-bold">Tobias Kaib</span>
      )}
    </div>
  )

  // Wenn das Bild nicht geladen werden konnte, zeige den Fallback
  if (!imageLoaded) {
    return <LogoFallback />
  }

  // Versuche das Bild zu laden
  return (
    <>
      {variant === "icon" ? (
        <img
          src="/images/tk-logo-small.png"
          alt="Tobias Kaib Logo"
          className={`${sizeClasses[size]} object-contain ${className}`}
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <img
          src="/images/tk-logo-full.png"
          alt="Tobias Kaib Logo"
          className={`${sizeClasses[size]} object-contain ${className}`}
          onError={() => setImageLoaded(false)}
        />
      )}
    </>
  )
}
