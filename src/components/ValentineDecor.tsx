function Heart({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path
        d="M32 56S6 38.5 6 20.5C6 12 13 5 21 5c5 0 9.5 3 11 7 1.5-4 6-7 11-7 8 0 15 7 15 15.5C58 38.5 32 56 32 56z"
        fill="currentColor"
      />
    </svg>
  )
}

function Petal({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 40 60" fill="none">
      <ellipse cx="20" cy="30" rx="14" ry="28" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <path
        d="M18 0l3.5 12.5L36 18l-14.5 3.5L18 36l-3.5-14.5L0 18l14.5-3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

function Ring({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  )
}

function ValentineDecor() {
  return (
    <div className="valentine-decor" aria-hidden="true">
      {/* Large hearts */}
      <Heart className="deco deco-heart deco-lg deco-float-a" />
      <Heart className="deco deco-heart deco-md deco-float-b" />
      <Heart className="deco deco-heart deco-sm deco-sway-a" />

      {/* Petals */}
      <Petal className="deco deco-petal deco-md deco-drift-a" />
      <Petal className="deco deco-petal deco-sm deco-drift-b" />
      <Petal className="deco deco-petal deco-xs deco-drift-c" />
      <Petal className="deco deco-petal deco-md deco-sway-b" />

      {/* Sparkles */}
      <Sparkle className="deco deco-sparkle deco-xs deco-twinkle-a" />
      <Sparkle className="deco deco-sparkle deco-sm deco-twinkle-b" />
      <Sparkle className="deco deco-sparkle deco-xs deco-twinkle-c" />

      {/* Rings */}
      <Ring className="deco deco-ring deco-lg deco-spin-a" />
      <Ring className="deco deco-ring deco-sm deco-spin-b" />
    </div>
  )
}

export default ValentineDecor
