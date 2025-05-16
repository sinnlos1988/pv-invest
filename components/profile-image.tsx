"use client"

import { useState } from "react"

export function ProfileImage({
  size = "medium",
  className = "",
  withBorder = true,
}: {
  size?: "small" | "medium" | "large"
  className?: string
  withBorder?: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(true)

  // Größen für verschiedene Varianten
  const sizeClasses = {
    small: "h-24 w-24",
    medium: "h-36 w-36",
    large: "h-48 w-48",
  }

  // Border-Klassen
  const borderClasses = withBorder ? "border-4 border-gold-400 shadow-xl" : ""

  // Fallback-Komponente, falls das Bild nicht geladen werden kann
  const ProfileFallback = () => (
    <div
      className={`flex items-center justify-center rounded-full bg-emerald-100 ${sizeClasses[size]} ${borderClasses} ${className}`}
    >
      <span className="font-bold text-emerald-800 text-2xl">TK</span>
    </div>
  )

  // Wenn das Bild nicht geladen werden konnte, zeige den Fallback
  if (!imageLoaded) {
    return <ProfileFallback />
  }

  // Versuche das Bild zu laden
  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses[size]} ${borderClasses} ${className}`}>
      <img
        src="/images/tobiasKaib_klein.png"
        alt="Tobias Kaib"
        className="w-full h-full object-cover"
        onError={() => setImageLoaded(false)}
      />
    </div>
  )
}
