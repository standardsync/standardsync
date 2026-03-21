import { ProcessBgIllust } from './illustrations';

const steps = [
  { step: '01', title: '초기 상담', description: '고객의 현황과 요구사항을 파악하고, 적합한 ISO 규격 및 인증 전략을 수립합니다.' },
  { step: '02', title: 'Gap 분석', description: '현재 경영시스템과 ISO 요구사항 간의 차이를 분석하고 개선 과제를 도출합니다.' },
  { step: '03', title: '시스템 구축', description: '문서 체계 수립, 프로세스 설계, 매뉴얼 작성 등 경영시스템을 체계적으로 구축합니다.' },
  { step: '04', title: '교육 및 훈련', description: '임직원 대상 ISO 규격 이해 및 시스템 운영 교육을 실시합니다.' },
  { step: '05', title: '내부심사', description: '전문 심사원이 내부심사를 수행하여 시스템의 적합성과 효과성을 사전 점검합니다.' },
  { step: '06', title: '인증심사 및 사후관리', description: '인증기관의 심사를 지원하고, 취득 후 지속적인 유지 관리 서비스를 제공합니다.' },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#3D5A2E' }}>
      {/* SVG background */}
      <div className="absolute inset-0">
        <ProcessBgIllust className="w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <span className="text-leaf-light font-semibold text-sm tracking-widest uppercase">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">컨설팅 프로세스</h2>
          <p className="text-white/60 max-w-2xl mx-auto">체계적인 6단계 프로세스로 효율적인 인증 취득을 지원합니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <div key={item.step} className="relative group">
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="text-leaf-light text-4xl font-black opacity-40 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
              {i % 3 !== 2 && i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
