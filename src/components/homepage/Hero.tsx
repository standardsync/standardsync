import { HeroIllustration } from './illustrations';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#4A6B3F' }}>
      {/* SVG background illustration */}
      <div className="absolute inset-0">
        <HeroIllustration className="w-full h-full" />
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3D5A2E]/30 to-[#4A6B3F]/60" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/15 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline - centered and prominent */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.08em] leading-snug mb-8">
          지속가능한 성장을 위한<br />
          글로벌 표준과의 동기화
        </h1>

        {/* Divider */}
        <div className="w-20 h-px bg-white/40 mx-auto mb-8" />

        {/* Company name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider mb-1">
          스탠다드싱크
        </h2>
        <p className="text-sm sm:text-base text-white/60 tracking-[0.35em] font-medium mb-10">
          StandardSync
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white text-primary-dark font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:bg-white/90"
          >
            무료 상담 신청
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border-2 border-white/40 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/5"
          >
            서비스 알아보기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
