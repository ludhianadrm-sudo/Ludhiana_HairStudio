import React from 'react';

interface ScalpDiagramProps {
  stage: string; // 'Stage 1' | 'Stage 2' | 'Stage 3' | 'Stage 3 Vertex' | 'Stage 4' | 'Stage 5' | 'Stage 6' | 'Stage 7' | 'Mild' | 'Moderate' | 'Severe'
  gender: 'Male' | 'Female';
  className?: string;
}

export const ScalpDiagramSVG: React.FC<ScalpDiagramProps> = ({ stage, gender, className = 'w-full h-full' }) => {
  // Common Skin & Hair Colors for crisp medical vector look
  const skinColor = '#FDF0E6';
  const strokeColor = '#334155'; // Slate 700
  const hairColor = '#1E293B'; // Dark Slate 800
  const baldAreaColor = '#FDF0E6';

  if (gender === 'Female') {
    // Ludwig Female Pattern Scalp Diagrams
    return (
      <svg viewBox="0 0 160 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Card Canvas */}
        <rect width="160" height="110" fill="#F8FAFC" rx="12" />
        
        {/* Head Top View */}
        <g transform="translate(20, 5)">
          {/* Ears */}
          <ellipse cx="20" cy="50" rx="4" ry="10" fill={skinColor} stroke={strokeColor} strokeWidth="2" />
          <ellipse cx="100" cy="50" rx="4" ry="10" fill={skinColor} stroke={strokeColor} strokeWidth="2" />
          {/* Nose */}
          <polygon points="56,12 60,4 64,12" fill={skinColor} stroke={strokeColor} strokeWidth="2" />
          {/* Head Shape */}
          <ellipse cx="60" cy="52" rx="40" ry="46" fill={skinColor} stroke={strokeColor} strokeWidth="2.5" />
          
          {/* Hair Outer Shape */}
          <path
            d="M 22,50 C 20,20 40,10 60,10 C 80,10 100,20 98,50 C 98,80 80,96 60,96 C 40,96 22,80 22,50 Z"
            fill={hairColor}
          />

          {/* Parting Width / Thinning based on Ludwig Grade */}
          {stage === 'Mild' && (
            /* Ludwig 1: Narrow Central Parting Line */
            <path d="M 60,16 L 60,70" stroke={skinColor} strokeWidth="3" strokeLinecap="round" />
          )}

          {stage === 'Moderate' && (
            /* Ludwig 2: Widened Central Parting Line (Pine Tree Shape) */
            <path
              d="M 60,16 L 63,35 L 68,55 L 60,70 L 52,55 L 57,35 Z"
              fill={skinColor}
              stroke={strokeColor}
              strokeWidth="1"
            />
          )}

          {stage === 'Severe' && (
            /* Ludwig 3: Wide Diffuse Oval Thinning on Top */
            <ellipse cx="60" cy="45" rx="22" ry="26" fill={skinColor} stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
          )}
        </g>
      </svg>
    );
  }

  // Male Norwood Pattern Scalp Diagrams (Top + Profile Dual View)
  return (
    <svg viewBox="0 0 180 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Panel */}
      <rect width="180" height="110" fill="#F8FAFC" rx="12" />

      {/* TOP VIEW (Left side) */}
      <g transform="translate(10, 5)">
        {/* Ears */}
        <ellipse cx="10" cy="50" rx="3.5" ry="9" fill={skinColor} stroke={strokeColor} strokeWidth="1.5" />
        <ellipse cx="80" cy="50" rx="3.5" ry="9" fill={skinColor} stroke={strokeColor} strokeWidth="1.5" />
        {/* Nose */}
        <polygon points="42,12 45,5 48,12" fill={skinColor} stroke={strokeColor} strokeWidth="1.5" />
        {/* Head Base */}
        <ellipse cx="45" cy="52" rx="35" ry="42" fill={skinColor} stroke={strokeColor} strokeWidth="2" />

        {/* Dynamic Hair Layer according to Norwood Stage */}
        {stage === 'Stage 1' && (
          <path
            d="M 12,50 C 12,25 28,14 45,14 C 62,14 78,25 78,50 C 78,78 65,92 45,92 C 25,92 12,78 12,50 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 2' && (
          /* Slight Temple Recession */
          <path
            d="M 12,50 C 12,32 18,22 28,26 C 36,29 45,20 45,20 C 45,20 54,29 62,26 C 72,22 78,32 78,50 C 78,78 65,92 45,92 C 25,92 12,78 12,50 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 3' && (
          /* Deep M-shape Frontal Recession */
          <path
            d="M 12,50 C 12,38 22,34 32,38 C 38,41 45,26 45,26 C 45,26 52,41 58,38 C 68,34 78,38 78,50 C 78,78 65,92 45,92 C 25,92 12,78 12,50 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 3 Vertex' && (
          /* Deep M-shape Frontal + Vertex Bald Circle */
          <g>
            <path
              d="M 12,50 C 12,38 22,34 32,38 C 38,41 45,26 45,26 C 45,26 52,41 58,38 C 68,34 78,38 78,50 C 78,78 65,92 45,92 C 25,92 12,78 12,50 Z"
              fill={hairColor}
            />
            <circle cx="45" cy="66" r="10" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 4' && (
          /* Pronounced Frontal + Larger Vertex Patch separated by hair bridge */
          <g>
            <path
              d="M 12,50 C 12,42 24,38 32,42 C 38,45 45,34 45,34 C 45,34 52,45 58,42 C 66,38 78,42 78,50 C 78,78 65,92 45,92 C 25,92 12,78 12,50 Z"
              fill={hairColor}
            />
            <ellipse cx="45" cy="68" rx="14" ry="12" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 5' && (
          /* Frontal & Vertex Merging with thin sparse bridge */
          <g>
            <path
              d="M 12,52 C 12,44 26,45 30,48 C 38,51 45,45 45,45 C 45,45 52,51 60,48 C 64,45 78,44 78,52 C 78,78 65,92 45,92 C 25,92 12,78 12,52 Z"
              fill={hairColor}
            />
            <ellipse cx="45" cy="62" rx="18" ry="20" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 6' && (
          /* Single Large Bald Patch on Top */
          <g>
            <path
              d="M 12,58 C 12,52 22,54 28,58 C 38,62 45,58 45,58 C 45,58 52,62 62,58 C 68,54 78,52 78,58 C 78,80 65,92 45,92 C 25,92 12,80 12,58 Z"
              fill={hairColor}
            />
            <ellipse cx="45" cy="52" rx="24" ry="26" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 7' && (
          /* Narrow Horseshoe Band remaining */
          <g>
            <path
              d="M 12,68 C 12,62 20,66 26,70 C 35,74 45,72 45,72 C 45,72 55,74 64,70 C 70,66 78,62 78,68 C 78,84 65,92 45,92 C 25,92 12,84 12,68 Z"
              fill={hairColor}
            />
            <ellipse cx="45" cy="48" rx="27" ry="32" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}
        <text x="45" y="102" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#64748B">
          TOP VIEW
        </text>
      </g>

      {/* SIDE PROFILE VIEW (Right side) */}
      <g transform="translate(95, 5)">
        {/* Profile Head Outline */}
        <path
          d="M 25,75 C 22,65 18,52 20,38 C 23,22 36,12 55,12 C 72,12 80,24 80,42 C 80,50 78,58 78,65 C 75,68 70,72 65,72 L 60,65 L 56,70 C 50,70 45,78 38,78 Z"
          fill={skinColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        {/* Nose & Mouth profile accent */}
        <path d="M 20,38 L 12,46 L 21,50 L 19,56 L 24,60" fill={skinColor} stroke={strokeColor} strokeWidth="1.5" />

        {/* Hair Layer on Profile according to Stage */}
        {stage === 'Stage 1' && (
          <path
            d="M 22,36 C 26,20 38,12 55,12 C 72,12 80,24 80,42 C 80,52 78,62 78,65 L 68,65 C 68,50 65,30 45,28 C 30,28 24,32 22,36 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 2' && (
          <path
            d="M 28,34 C 32,22 40,12 55,12 C 72,12 80,24 80,42 C 80,52 78,62 78,65 L 68,65 C 68,50 65,30 48,28 C 36,28 30,32 28,34 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 3' && (
          <path
            d="M 36,32 C 40,22 46,12 55,12 C 72,12 80,24 80,42 C 80,52 78,62 78,65 L 68,65 C 68,50 65,30 52,28 C 42,28 38,30 36,32 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 3 Vertex' && (
          <g>
            <path
              d="M 36,32 C 40,22 46,12 55,12 C 72,12 80,24 80,42 C 80,52 78,62 78,65 L 68,65 C 68,50 65,30 52,28 C 42,28 38,30 36,32 Z"
              fill={hairColor}
            />
            <circle cx="66" cy="18" r="6" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 4' && (
          <g>
            <path
              d="M 42,30 C 46,20 50,12 58,12 C 72,12 80,24 80,42 C 80,52 78,62 78,65 L 68,65 C 68,52 64,36 55,32 C 48,32 44,30 42,30 Z"
              fill={hairColor}
            />
            <ellipse cx="64" cy="16" rx="8" ry="5" fill={baldAreaColor} stroke={strokeColor} strokeWidth="1" />
          </g>
        )}

        {stage === 'Stage 5' && (
          <path
            d="M 50,28 C 55,16 62,14 70,16 C 78,22 80,32 80,46 C 80,56 78,62 78,65 L 68,65 C 68,54 62,40 58,34 C 54,34 51,30 50,28 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 6' && (
          <path
            d="M 60,32 C 66,22 74,22 78,28 C 80,36 80,48 80,65 L 68,65 C 68,54 64,42 60,32 Z"
            fill={hairColor}
          />
        )}

        {stage === 'Stage 7' && (
          <path
            d="M 68,44 C 72,38 78,38 80,42 C 80,52 80,62 80,65 L 68,65 Z"
            fill={hairColor}
          />
        )}

        <text x="50" y="102" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#64748B">
          SIDE PROFILE
        </text>
      </g>
    </svg>
  );
};
