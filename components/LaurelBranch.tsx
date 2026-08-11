"use client";

interface LaurelBranchProps {
  className?: string;
  flip?: boolean;
}

export default function LaurelBranch({ className = "w-12 h-12 text-[#171717]", flip = false }: LaurelBranchProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
    >
      {/* Curved Stem */}
      <path d="M 50 90 Q 25 60 30 15" />
      
      {/* Laurel Leaves along stem */}
      {/* Pair 1 */}
      <path d="M 45 80 Q 30 75 25 82 Q 38 85 45 80 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 46 78 Q 55 70 60 75 Q 52 82 46 78 Z" fill="currentColor" fillOpacity="0.1" />

      {/* Pair 2 */}
      <path d="M 38 65 Q 20 60 18 68 Q 30 71 38 65 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 39 63 Q 50 54 56 59 Q 47 67 39 63 Z" fill="currentColor" fillOpacity="0.1" />

      {/* Pair 3 */}
      <path d="M 33 50 Q 15 42 15 50 Q 27 54 33 50 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 34 48 Q 46 38 52 44 Q 42 51 34 48 Z" fill="currentColor" fillOpacity="0.1" />

      {/* Pair 4 */}
      <path d="M 30 35 Q 12 25 15 32 Q 25 38 30 35 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 31 33 Q 42 22 48 27 Q 38 36 31 33 Z" fill="currentColor" fillOpacity="0.1" />

      {/* Tip Leaf */}
      <path d="M 30 15 Q 26 5 30 2 Q 35 8 30 15 Z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

export function LaurelWreath({ className = "w-16 h-16 text-[#171717]" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <LaurelBranch className="w-1/2 h-full" />
      <LaurelBranch className="w-1/2 h-full" flip />
    </div>
  );
}
