import { X, Code, Server, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SpecializationModalProps {
  type: 'frontend' | 'backend' | null;
  isOpen: boolean;
  onClose: () => void;
}

const frontendSkills = [
  'React & Next.js Development',
  'TypeScript & JavaScript',
  'Responsive Design with Tailwind CSS',
  'Component Architecture & State Management',
  'Performance Optimization',
  'SEO & Accessibility',
  'Modern Build Tools & Bundlers',
];

const backendSkills = [
  'Node.js & Express.js',
  '.NET Web API Development',
  'RESTful API Development',
  'Next.js Serverless API Routes',
  'Database Design & Management',
  'Authentication & Authorization',
  'Performance & Security Optimization',
];

const frontendProjects = [
  'Interactive Portfolio Website',
  'Music Streaming App',
  'Game Modding Desktop App',
  'Mobile-First Web Apps',
];

const backendProjects = [
  'Music Streaming API',
  'RESTful API Services',
  'User Authentication System',
  'Database Management APIs',
];

export default function SpecializationModal({ type, isOpen, onClose }: SpecializationModalProps) {
  if (!isOpen || !type) return null;

  const isFrontend = type === 'frontend';
  const title = isFrontend ? 'Frontend Development' : 'Backend Development';
  const description = isFrontend
    ? 'Creating beautiful, responsive, and performant user interfaces that provide exceptional user experiences.'
    : 'Building robust, scalable, and secure server-side applications and APIs that power modern applications.';
  const skills = isFrontend ? frontendSkills : backendSkills;
  const projects = isFrontend ? frontendProjects : backendProjects;
  const Icon = isFrontend ? Code : Server;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="bg-base-100 animate-in fade-in-0 zoom-in-95 relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl duration-300">
        {/* Header */}
        <div className="border-base-300 from-primary/10 to-accent/10 flex items-center justify-between border-b bg-gradient-to-r p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 rounded-xl p-3">
              <Icon className="text-primary h-8 w-8" />
            </div>
            <div>
              <h2 className="text-base-content text-3xl font-bold">{title}</h2>
              <p className="text-base-content/70 mt-1">{description}</p>
            </div>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle hover:bg-base-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[calc(90vh-200px)] overflow-y-auto p-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Skills */}
            <div>
              <h3 className="text-base-content mb-4 flex items-center gap-2 text-xl font-semibold">
                <CheckCircle className="text-accent h-5 w-5" />
                Core Skills
              </h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                    <span className="text-base-content/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-base-content mb-4 flex items-center gap-2 text-xl font-semibold">
                <ArrowRight className="text-accent h-5 w-5" />
                Project Experience
              </h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="bg-base-200/50 border-base-300 rounded-lg border p-3">
                    <span className="text-base-content font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="from-primary/10 to-accent/10 border-primary/20 mt-8 rounded-xl border bg-gradient-to-r p-6">
            <h4 className="text-base-content mb-2 text-lg font-semibold">
              Ready to work together?
            </h4>
            <p className="text-base-content/70 mb-4">
              {isFrontend
                ? "Let's create stunning user interfaces that your users will love."
                : "Let's build powerful backend systems that scale with your business."}
            </p>
            <div className="flex gap-3">
              <Link href="/portfolio" className="btn btn-primary rounded-lg" onClick={onClose}>
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline btn-primary rounded-lg"
                onClick={onClose}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
