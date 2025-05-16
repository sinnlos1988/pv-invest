"use client"

import { useEffect } from "react"

export function ImagePreloader() {
  useEffect(() => {
    // Liste aller wichtigen Bilder, die vorgeladen werden sollen
    const imagesToPreload = [
      "/images/tk-logo-small.png",
      "/images/tk-logo-full.png",
      "/images/tobiasKaib_klein.png",
      "/images/tobias-kaib-logo-diamond.png", // Neues Diamant-Logo
      "/images/solar-panels.jpg",
      "/images/tax-chart.jpg",
      "/images/solar-investment.jpg",
      "/images/target-audience.jpg",
      "/images/structure-diagram.jpg",
      "/images/success-story.jpg",
      "/images/solar-farm.jpg",
      "/images/faq-illustration.jpg",
      "/images/process-diagram.jpg",
      "/images/meeting.jpg",
    ]

    // Bilder vorladen
    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return null // Diese Komponente rendert nichts
}
