import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '인증규격', href: '#standards' },
  { label: '컨설팅 프로세스', href: '#process' },
  { label: '문의하기', href: '#contact' },
];

export function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-[#2c2c2c]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
                스탠다드싱크
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-[0.25em] font-medium transition-colors ${scrolled ? 'text-primary/70' : 'text-white/60'}`}>
                StandardSync
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-primary-dark' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors ${
                scrolled
                  ? 'bg-primary hover:bg-primary-dark text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
              }`}
            >
              무료 상담
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-primary font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary text-white text-center font-semibold px-5 py-3 rounded-lg"
            >
              무료 상담
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
