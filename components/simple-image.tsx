"use client"

import { useState } from "react"

export function SimpleImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  // Fallback-Inhalt basierend auf dem Bildtyp
  const getFallbackContent = () => {
    if (src.includes("tk-logo")) {
      return "TK"
    }
    if (src.includes("tobias-kaib")) {
      return "Tobias Kaib"
    }
    return alt
  }

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-emerald-100 ${className || ""}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <span className="text-emerald-800 font-bold">{getFallbackContent()}</span>
      </div>
    )
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className || ""}
      onError={() => setHasError(true)}
    />
  )
}
