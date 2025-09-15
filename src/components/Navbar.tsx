import Link from 'next/link';
import { User, Briefcase, Mail, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  title: 'About' | 'Portfolio' | 'Contact';
  handleNavigation?: (href: string) => void;
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

export default function Navbar({ title, handleNavigation }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Spacer to fill gap when navbar is fixed */}
      {isMobileMenuOpen && <div className="h-18" />}

      <nav
        className={`navbar ${isMobileMenuOpen ? 'fixed top-0 right-0 left-0' : 'relative'} z-30 mx-auto max-w-5xl px-6 py-4`}
      >
        <div className="container mx-auto">
          <div className="navbar-start">
            <h1 className="text-2xl font-bold text-white [text-shadow:0_0_5px_rgba(59,130,246,0.6)]">
              {title}
            </h1>
            {handleNavigation ? (
              <button
                onClick={() => handleNavigation('/')}
                className={`mr-4 flex items-center text-white transition-all duration-200 hover:scale-110 hover:text-white/80 ${
                  isMobileMenuOpen ? 'md:flex' : 'hidden md:flex'
                }`}
              >
                <Home className="ml-2 h-6 w-6" />
              </button>
            ) : (
              <Link
                href="/"
                className={`mr-4 flex items-center text-white transition-all duration-200 hover:scale-110 hover:text-white/80 ${
                  isMobileMenuOpen ? 'md:flex' : 'hidden md:flex'
                }`}
              >
                <Home className="ml-2 h-6 w-6" />
              </Link>
            )}
          </div>

          <div className="navbar-end">
            {/* Desktop Navigation */}
            <div className="hidden space-x-4 md:flex">
              {navLinks.map(({ href, label, icon: Icon }) =>
                handleNavigation ? (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`group hover:bg-base-100/20 flex items-center font-bold transition-all duration-200 [text-shadow:0_0_5px_rgba(59,130,246,0.6)] hover:rounded-lg hover:px-3 hover:py-1 hover:text-white ${title === label ? 'bg-base-100/20 rounded-lg px-3 py-1 text-white' : 'text-white'}`}
                  >
                    <Icon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                    {label}
                  </button>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className={`group hover:bg-base-100/20 flex items-center font-bold transition-all duration-200 [text-shadow:0_0_5px_rgba(59,130,246,0.6)] hover:rounded-lg hover:px-3 hover:py-1 hover:text-white ${title === label ? 'bg-base-100/20 rounded-lg px-3 py-1 text-white' : 'text-white'}`}
                  >
                    <Icon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                    {label}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="hover:text-primary/80 hover:bg-primary/20 flex items-center p-2 text-white transition-all duration-200 hover:scale-110 hover:rounded-lg md:hidden"
              aria-label="Toggle mobile menu"
            >
              <div className="relative h-6 w-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'scale-0 rotate-180 opacity-0'
                      : 'scale-100 rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'scale-100 rotate-0 opacity-100'
                      : 'scale-0 -rotate-180 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for better backdrop-blur */}
      {isMobileMenuOpen && (
        <div className="bg-base-200/80 fixed top-0 right-0 left-0 z-20 h-screen backdrop-blur-md md:hidden">
          <div className="space-y-3 px-6 py-4 pt-18">
            {navLinks.map(({ href, label, icon: Icon }) =>
              handleNavigation ? (
                <button
                  key={href}
                  onClick={() => {
                    handleNavigation(href);
                    closeMobileMenu();
                  }}
                  className={`group hover:bg-primary/30 flex w-full items-center px-3 py-2 font-bold text-white transition-all duration-200 [text-shadow:0_0_5px_rgba(59,130,246,0.6)] hover:rounded-lg ${title === label ? 'bg-primary/30 rounded-lg' : ''}`}
                >
                  <Icon className="mr-3 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                  {label}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`group hover:bg-primary/30 flex w-full items-center px-3 py-2 font-bold text-white transition-all duration-200 [text-shadow:0_0_5px_rgba(59,130,246,0.6)] hover:rounded-lg ${title === label ? 'bg-primary/30 rounded-lg' : ''}`}
                >
                  <Icon className="mr-3 h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
}
