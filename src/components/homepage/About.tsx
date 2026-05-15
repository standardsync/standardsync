import { AboutIllustration } from './illustrations';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mt-3 mb-6 leading-tight">
              신뢰할 수 있는<br />ISO 경영시스템 파트너
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary-dark">스탠다드싱크(StandardSync)</strong>는 ISO 국제 표준 기반의
                경영시스템 구현 컨설팅, 심사 지원 및 사후관리 서비스를 제공하는 전문 컨설팅 업체입니다.
              </p>
              <p>
                품질, 환경, 안전보건, 의료기기, 화장품, 반부패, 준법, 정보보안, 인공지능, 에너지 및 EcoVadis 등 다양한 분야의
                ISO 규격에 대한 깊은 전문성을 바탕으로, 귀사의 경영시스템을 국제 표준에 부합하도록 체계적으로 구축해 드립니다.
              </p>
              <p>
                단순한 인증 취득을 넘어, 실질적으로 조직의 역량을 강화하고 지속 가능한 성장을 이끌어 내는 것이 스탠다드싱크의 목표입니다.
              </p>
            </div>
          </div>

          {/* Right - illustration + feature cards */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-primary/5 border border-primary/10 flex items-center justify-center p-4">
              <AboutIllustration className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: '검증된 전문성',
                  desc: '다수의 ISO 규격 심사 및 컨설팅 경험',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: '맞춤형 솔루션',
                  desc: '업종과 규모에 맞는 최적화된 컨설팅',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: '신속한 대응',
                  desc: '빠른 커뮤니케이션과 효율적인 진행',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  title: '사후관리',
                  desc: '인증 취득 후 지속적인 유지 관리 지원',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-primary/5 rounded-2xl p-5 hover:shadow-lg transition-shadow border border-primary/10"
                >
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h3 className="font-bold text-primary-dark mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
