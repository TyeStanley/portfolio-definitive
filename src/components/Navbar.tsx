import Link from 'next/link';
import { User, Briefcase, Mail, Home } from 'lucide-react';

interface NavbarProps {
  title: 'About' | 'Portfolio' | 'Contact';
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="navbar relative z-20 px-6 py-4">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link
          href="/"
          className="text-base-content hover:text-primary mr-4 flex items-center transition-colors duration-200"
        >
          <Home className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="navbar-end">
        <div className="flex space-x-4">
          <Link
            href="/about"
            className={`hover:text-primary flex items-center transition-colors duration-200 ${title === 'About' ? 'text-primary' : 'text-base-content'}`}
          >
            <User className="mr-2 h-4 w-4" />
            About
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-primary flex items-center transition-colors duration-200 ${title === 'Portfolio' ? 'text-primary' : 'text-base-content'}`}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`hover:text-primary flex items-center transition-colors duration-200 ${title === 'Contact' ? 'text-primary' : 'text-base-content'}`}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
