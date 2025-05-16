"use client"

import { useState, useEffect } from "react"

export function FallbackImage({
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
  const [imgSrc, setImgSrc] = useState(src)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // Überprüfen, ob das Bild geladen werden kann
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
      setIsError(false)
    }
    img.onerror = () => {
      setIsError(true)
    }
  }, [src])

  if (isError) {
    // Fallback für das Logo
    if (src.includes("tk-logo")) {
      return (
        <div
          className={`flex items-center justify-center bg-emerald-100 ${className || ""}`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <span className="text-emerald-800 font-bold">TK</span>
        </div>
      )
    }

    // Fallback für das Profilbild
    if (src.includes("tobias-kaib")) {
      return (
        <div
          className={`flex items-center justify-center bg-emerald-100 ${className || ""}`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <span className="text-emerald-800 font-bold">Tobias Kaib</span>
        </div>
      )
    }

    // Generischer Fallback
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className || ""}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <span className="text-gray-500">{alt}</span>
      </div>
    )
  }

  // Wenn kein Fehler, normales Bild anzeigen
  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className || ""}
      onError={() => setIsError(true)}
    />
  )
}
