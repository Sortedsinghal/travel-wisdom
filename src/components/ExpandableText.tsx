// src/components/ExpandableText.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableTextProps {
  children: React.ReactNode;
  collapsedHeight?: string; // e.g., 'max-h-28'
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, collapsedHeight = 'max-h-24' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-[4000px]' : collapsedHeight
        }`}
      >
        {children}
        {/* Fading gradient effect when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 to-transparent" />
        )}
      </div>
      <div className="text-right mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-semibold text-blue-700 hover:underline flex items-center gap-1 ml-auto px-2 py-1"
        >
          {isExpanded ? 'View Less' : 'View More'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default ExpandableText;