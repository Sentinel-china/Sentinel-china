import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Settings } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import CookieSettingsModal from './CookieSettingsModal';

// Define the types for navigation items for better type safety
interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect to close dropdowns when clicking outside of the navigation area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Effect to close all menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location.pathname]);
  // Nested navigation structure
  const navItems: NavItem[] = [
    { path: '/', label: t('nav.home') },
    {
      path: '/products',
      label: t('nav.products'),
      children: [
        {
          path: '/products/sensor',
          label: t('nav.sensors'),
          children: [
            { path: '/products/sensor/liquid-level-sensor', label: t('nav.levelSensors') },
            { path: '/products/sensor/thermal-flow-sensor', label: t('nav.flowSensors') },
            { path: '/products/sensor/pressure-sensor', label: t('nav.pressureSensors') },
            { path: '/products/sensor/temperature-sensor', label: t('nav.temperatureSensors') },
            { path: '/products/sensor/inductive-proximity-sensor', label: t('nav.inductiveSensors') },
            { path: '/products/sensor/vortex-flow-sensor', label: t('nav.vortexFlowSensors') },
          ],
        },
        { path: '/products/io-link', label: t('nav.ioLink') },
        { path: '/products/connectivity', label: t('nav.connectivity') },
        { path: '/products/Relay-Module', label: t('nav.relayModule') },
        { path: '/products/io-module', label: t('nav.ioModule') },
      ],
    },
    { path: '/solutions', label: t('nav.solutions') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const logoSrc = mounted && theme === 'light' ? '/logo-light.png' : '/logo.png';

  // Toggle main dropdown visibility
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
    setOpenSubDropdown(null); // Always close sub-menus when a main menu is toggled
  };

  // Toggle sub-dropdown visibility and prevent parent from closing
  const handleSubDropdownToggle = (label: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent main dropdown from closing
    setOpenSubDropdown(prev => (prev === label ? null : label));
  };

  // Renders each navigation item
  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isDropdownOpen = openDropdown === item.label;

    // Classes for the link, preserving the original hover/active style
    const linkClasses = `px-3 py-2 text-base font-medium transition-all duration-200 relative group ${
      location.pathname === item.path
        ? 'text-yellow-400'
        : 'text-muted-foreground hover:text-yellow-400'
    }`;
    const underlineClasses = `absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-200 ${
      location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`;

    if (!hasChildren) {
      return (
        <Link key={item.label} to={item.path} className={linkClasses}>
          {item.label}
          <span className={underlineClasses}></span>
        </Link>
      );
    }

    return (
      <div key={item.label} className="flex items-center relative">
        {/* Clickable link for parent item */}
        <Link to={item.path} className={linkClasses}>
          {item.label}
          <span className={underlineClasses}></span>
        </Link>
        {/* Separate button to toggle the dropdown */}
        <button
          onClick={() => handleDropdownToggle(item.label)}
          className="p-1 -ml-1 text-muted-foreground hover:text-yellow-400"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-20">
            <ul className="py-1">
              {item.children?.map(child => {
                const hasSubChildren = child.children && child.children.length > 0;
                const isSubDropdownOpen = openSubDropdown === child.label;

                if (!hasSubChildren) {
                  return (
                    <li key={child.label}>
                      <Link
                        to={child.path}
                        className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-yellow-400"
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={child.label} className="relative">
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                      <Link to={child.path} className="flex-grow hover:text-yellow-400">
                        {child.label}
                      </Link>
                      <button
                        onClick={(e) => handleSubDropdownToggle(child.label, e)}
                        className="p-1 -mr-2 text-muted-foreground hover:text-yellow-400"
                        aria-haspopup="true"
                        aria-expanded={isSubDropdownOpen}
                      >
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isSubDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {isSubDropdownOpen && (
                      <div className="absolute top-0 left-full ml-1 w-56 bg-background border border-border rounded-md shadow-lg">
                        <ul className="py-1">
                          {child.children?.map(subChild => (
                            <li key={subChild.label}>
                              <Link
                                to={subChild.path}
                                className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-yellow-400"
                              >
                                {subChild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoSrc} alt="sentinel-logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center" ref={navRef}>
            <nav className="flex items-center space-x-1">
              {navItems.map(item => renderNavItem(item))}
            </nav>
            <div className="ml-6 flex items-center space-x-2">
              <LanguageToggle />
              <CookieSettingsModal
                trigger={
                  <button className="p-2 text-muted-foreground hover:text-yellow-400 transition-colors" aria-label="Cookie settings">
                    <Settings className="w-5 h-5" />
                  </button>
                }
              />
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <CookieSettingsModal
              trigger={
                <button className="p-2 text-muted-foreground hover:text-yellow-400 transition-colors" aria-label="Cookie settings">
                  <Settings className="w-5 h-5" />
                </button>
              }
            />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-yellow-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            {/* TODO: Implement mobile dropdown logic */}
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path + item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-yellow-400 bg-muted'
                      : 'text-muted-foreground hover:text-yellow-400 hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

