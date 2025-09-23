"use client"

export function ConstellationBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C77F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8C77F" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Constellation lines */}
        <line
          x1="100"
          y1="150"
          x2="300"
          y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="300"
          y1="200"
          x2="500"
          y2="120"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="500"
          y1="120"
          x2="700"
          y2="180"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="700"
          y1="180"
          x2="900"
          y2="100"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />

        <line
          x1="200"
          y1="400"
          x2="400"
          y2="350"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="400"
          y1="350"
          x2="600"
          y2="400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="600"
          y1="400"
          x2="800"
          y2="320"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />

        <line
          x1="150"
          y1="600"
          x2="350"
          y2="550"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="350"
          y1="550"
          x2="550"
          y2="600"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />
        <line
          x1="550"
          y1="600"
          x2="750"
          y2="520"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="constellation-line"
        />

        {/* Stars/dots */}
        <circle cx="100" cy="150" r="2" fill="#E8C77F" opacity="0.6" />
        <circle cx="300" cy="200" r="3" fill="#E8C77F" opacity="0.8" />
        <circle cx="500" cy="120" r="2" fill="#E8C77F" opacity="0.5" />
        <circle cx="700" cy="180" r="3" fill="#E8C77F" opacity="0.7" />
        <circle cx="900" cy="100" r="2" fill="#E8C77F" opacity="0.6" />

        <circle cx="200" cy="400" r="2" fill="#E8C77F" opacity="0.5" />
        <circle cx="400" cy="350" r="3" fill="#E8C77F" opacity="0.8" />
        <circle cx="600" cy="400" r="2" fill="#E8C77F" opacity="0.6" />
        <circle cx="800" cy="320" r="3" fill="#E8C77F" opacity="0.7" />

        <circle cx="150" cy="600" r="2" fill="#E8C77F" opacity="0.6" />
        <circle cx="350" cy="550" r="3" fill="#E8C77F" opacity="0.8" />
        <circle cx="550" cy="600" r="2" fill="#E8C77F" opacity="0.5" />
        <circle cx="750" cy="520" r="3" fill="#E8C77F" opacity="0.7" />
      </svg>
    </div>
  )
}
