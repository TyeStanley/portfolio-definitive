import { User, Briefcase, Mail, Linkedin, Github, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="-mt-5 flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Software Engineer subtitle */}
        <h2 className="text-primary mb-4 text-xl font-medium drop-shadow-lg">Software Engineer</h2>

        {/* Main title */}
        <h1 className="mb-6 text-6xl font-bold tracking-wide text-white [text-shadow:0_0_20px_rgba(37,99,235,0.5)] md:text-7xl">
          TYE STANLEY
        </h1>

        {/* Decorative line */}
        <div className="bg-primary mx-auto mb-8 h-1 w-24 rounded-full shadow-lg" />

        {/* Action buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="btn btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content rounded-lg border-2 bg-white/30 px-8 py-3 transition-all duration-300"
          >
            <User className="mr-2 h-5 w-5" />
            About
          </Link>
          <Link
            href="/portfolio"
            className="btn btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content rounded-lg border-2 bg-white/30 px-8 py-3 transition-all duration-300"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content rounded-lg border-2 bg-white/30 px-8 py-3 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Link>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/tyestanley/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content border-2 bg-white/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/TyeStanley"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content border-2 bg-white/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="/Tye_Stanley_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content focus:bg-primary focus:text-primary-content border-2 bg-white/30 transition-all duration-300"
            aria-label="Resume"
          >
            <FileText className="h-6 w-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
