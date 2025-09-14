import Link from 'next/link';
import { User, Briefcase, Mail, Home } from 'lucide-react';

interface NavbarProps {
  title: 'About' | 'Portfolio' | 'Contact';
}

const navLinks = [
  {
    href: '/about',
    label: 'About',
    icon: User,
  },
  {
    href: '/portfolio',
    label: 'Portfolio',
    icon: Briefcase,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
  },
];

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="navbar relative z-20 mx-auto max-w-5xl px-6 py-4">
      <div className="container mx-auto">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold text-white [text-shadow:0_0_5px_rgba(59,130,246,0.6)]">
            {title}
          </h1>
          <Link
            href="/"
            className="mr-4 flex items-center text-white transition-all duration-200 hover:scale-110 hover:text-white/80"
          >
            <Home className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="flex space-x-4">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`group hover:bg-base-100/20 flex items-center font-bold transition-all duration-200 [text-shadow:0_0_5px_rgba(59,130,246,0.6)] hover:rounded-lg hover:px-3 hover:py-1 hover:text-white ${title === label ? 'bg-base-100/20 rounded-lg px-3 py-1 text-white' : 'text-white'}`}
              >
                <Icon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
