import { X, Star, Calendar, Code, Briefcase } from 'lucide-react';
import { TechDetail } from '@/constants';
import { formatYearsText } from '@/util';

interface TechModalProps {
  tech: TechDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const proficiencyColors = {
  beginner: 'text-yellow-500',
  intermediate: 'text-orange-500',
  advanced: 'text-blue-500',
  expert: 'text-green-500',
};

const proficiencyIcons = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

export default function TechModal({ tech, isOpen, onClose }: TechModalProps) {
  if (!isOpen || !tech) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="bg-base-100 animate-in fade-in-0 zoom-in-95 relative w-full max-w-2xl rounded-2xl shadow-2xl duration-300">
        {/* Header */}
        <div className="border-base-300 flex items-center justify-between border-b p-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Code className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-base-content text-2xl font-bold">{tech.name}</h2>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-base-content/70 text-sm">Proficiency:</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: proficiencyIcons[tech.proficiency] }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-current ${proficiencyColors[tech.proficiency]}`}
                    />
                  ))}
                  <span className={`text-sm font-medium ${proficiencyColors[tech.proficiency]}`}>
                    {tech.proficiency.charAt(0).toUpperCase() + tech.proficiency.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle hover:bg-base-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">
          {/* Description */}
          <div>
            <h3 className="text-base-content mb-2 text-lg font-semibold">About</h3>
            <p className="text-base-content/80 leading-relaxed">{tech.description}</p>
          </div>

          {/* Experience */}
          {tech.yearsExperience && (
            <div className="text-base-content/70 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{formatYearsText(tech.yearsExperience)} of experience</span>
            </div>
          )}

          {/* Use Cases */}
          <div>
            <h3 className="text-base-content mb-3 text-lg font-semibold">How I Use It</h3>
            <ul className="space-y-2">
              {tech.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                  <span className="text-base-content/80 text-sm">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          {tech.projects && tech.projects.length > 0 && (
            <div>
              <h3 className="text-base-content mb-3 flex items-center gap-2 text-lg font-semibold">
                <Briefcase className="h-5 w-5" />
                Experience
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.projects.map((project, index) => (
                  <span key={index} className="badge badge-outline badge-primary">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-base-300 bg-base-200/50 rounded-b-2xl border-t p-6">
          <button onClick={onClose} className="btn btn-primary w-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
