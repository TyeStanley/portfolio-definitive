'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Code2 } from 'lucide-react';
import { TECHNOLOGIES, TECH_CATEGORIES, TechDetail, TechCategory } from '@/constants';
import { formatYearsText } from '@/util';

interface TechSectionProps {
  onTechClick: (tech: TechDetail) => void;
}

export default function TechSection({ onTechClick }: TechSectionProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<TechCategory>>(new Set([]));

  const toggleCategory = (category: TechCategory) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  // Group technologies by category
  const techByCategory = Object.values(TECHNOLOGIES).reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<TechCategory, TechDetail[]>,
  );

  return (
    <>
      <div className="space-y-4">
        {Object.entries(TECH_CATEGORIES).map(([categoryKey, categoryName]) => {
          const category = categoryKey as TechCategory;
          const techs = techByCategory[category] || [];
          const isExpanded = expandedCategories.has(category);

          if (techs.length === 0) return null;

          return (
            <div key={category} className="bg-base-200/30 rounded-xl p-4">
              <button
                onClick={() => toggleCategory(category)}
                className="hover:bg-base-200/50 flex w-full items-center justify-between rounded-lg p-2 text-left transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <Code2 className="text-primary h-5 w-5" />
                  <h3 className="text-base-content text-lg font-semibold">{categoryName}</h3>
                  <span className="badge badge-primary badge-sm">{techs.length}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="text-base-content/60 h-5 w-5" />
                ) : (
                  <ChevronDown className="text-base-content/60 h-5 w-5" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {techs.map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => onTechClick(tech)}
                      className="group bg-base-100 border-base-300 hover:border-primary rounded-lg border p-3 text-left transition-all duration-200 hover:shadow-md"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-base-content group-hover:text-primary font-medium transition-colors">
                          {tech.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 4 }, (_, i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${
                                i <
                                (tech.proficiency === 'beginner'
                                  ? 1
                                  : tech.proficiency === 'intermediate'
                                    ? 2
                                    : tech.proficiency === 'advanced'
                                      ? 3
                                      : 4)
                                  ? 'bg-primary'
                                  : 'bg-base-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-base-content/60 line-clamp-2 text-xs">
                        {tech.description}
                      </p>
                      {tech.yearsExperience && (
                        <div className="text-primary mt-2 text-xs font-medium">
                          {formatYearsText(tech.yearsExperience)}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
