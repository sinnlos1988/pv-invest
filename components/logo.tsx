export function Logo({
  className = "",
  size = "medium",
  variant = "icon", // "icon" oder "full"
}: {
  className?: string
  size?: "small" | "medium" | "large" | "footer"
  variant?: "icon" | "full"
}) {
  const sizeClasses = {
    small: variant === "icon" ? "h-8" : "h-12",
    medium: variant === "icon" ? "h-12" : "h-16",
    large: variant === "icon" ? "h-20" : "h-24",
    footer: variant === "icon" ? "h-8" : "h-12",
  }

  const dimensions = {
    small: variant === "icon" ? 32 : 120,
    medium: variant === "icon" ? 48 : 160,
    large: variant === "icon" ? 80 : 240,
    footer: variant === "icon" ? 32 : 120,
  }

  // Verwenden Sie das entsprechende Logo basierend auf der Variante
  const logoUrl = variant === "icon" ? "/images/tk-logo-small.png" : "/images/tk-logo-full.png"

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <img
          src={logoUrl || "/placeholder.svg"}
          alt="Tobias Kaib Logo"
          width={dimensions[size]}
          height={variant === "icon" ? dimensions[size] : dimensions[size] / 3}
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>
    </div>
  )
}
