// Fond bleu nuit avec étoiles. Tout est fait en CSS : pas de JavaScript, pas de canvas.
// Les positions sont calculées (pas aléatoires) pour que le rendu soit toujours identique.

const STAR_COUNT = 70;

// Chaque étoile : position (en %), taille, délai et durée de l'animation.
// Le nombre 0.618... répartit les étoiles de façon régulière sur l'écran.
const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: (i * 61.8034) % 100,
  top: (i * 75.4878) % 100,
  size: 1 + (i % 3) * 0.5,
  delay: (i % 7) * 0.7,
  duration: 2.5 + (i % 5),
  gold: i % 10 === 0, // 1 étoile sur 10 est dorée
}));

// Quelques étincelles dorées en forme d'étoile à 8 branches.
const sparkles = [
  { left: 12, top: 20, size: 16 },
  { left: 82, top: 14, size: 12 },
  { left: 28, top: 62, size: 14 },
  { left: 70, top: 48, size: 18 },
  { left: 92, top: 72, size: 12 },
  { left: 50, top: 8, size: 10 },
];

// Étoiles filantes : "delay" décale leur apparition (cycle de 9 secondes).
const shootingStars = [
  { left: 8, top: 12, delay: 1 },
  { left: 45, top: 5, delay: 4.5 },
  { left: 20, top: 38, delay: 7 },
];

export default function StarryBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-navy">
      {/* Grandes formes arrondies en transparence */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1920 911"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={1.5}>
          <rect x={-1600} y={-100} width={1700} height={200} rx={100} transform="translate(252 171) rotate(33)" />
          <rect x={-60} y={-60} width={1400} height={120} rx={60} transform="translate(1752 163) rotate(-29)" />
          <rect x={-150} y={-150} width={1600} height={300} rx={150} transform="translate(1602 906) rotate(-28)" />
        </g>
      </svg>

      {stars.map((star, i) => (
        <span
          key={i}
          className="star absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.gold ? "rgb(212, 166, 42)" : "white",
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {sparkles.map((sparkle, i) => (
        <span
          key={i}
          className="sparkle absolute"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: "rgb(212, 166, 42)",
            // Forme d'étoile à 8 branches
            clipPath:
              "polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%)",
            animation: `sparkle ${4 + i}s ease-in-out ${i * 0.8}s infinite`,
          }}
        />
      ))}

      {shootingStars.map((shot, i) => (
        <span
          key={i}
          className="shooting-star absolute h-px w-36 bg-gradient-to-r from-transparent to-white opacity-0"
          style={{
            left: `${shot.left}%`,
            top: `${shot.top}%`,
            animation: `shooting-star 9s linear ${shot.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
