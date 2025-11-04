
import React from 'react';

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l-2.293 2.293a1 1 0 01-1.414 0L4 12l2.293-2.293a1 1 0 011.414 0L10 10l2.293-2.293a1 1 0 011.414 0L17 10l-2.293 2.293a1 1 0 01-1.414 0L11 10m0 0l-2.293 2.293a1 1 0 000 1.414L11 16l2.293-2.293a1 1 0 000-1.414L11 10z" />
    </svg>
);
