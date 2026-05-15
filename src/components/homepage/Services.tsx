import { ConsultingIllust, AuditIllust, CertIllust, MedicalIllust, TrainingIllust, EsgIllust } from './illustrations';

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: '시스템 구축 컨설팅',
    description: 'ISO 경영시스템의 요구사항을 분석하고, 귀사의 업무 프로세스에 맞는 체계적인 경영시스템을 구축합니다.',
    features: ['Gap 분석 및 현황 진단', '문서 체계 수립', '프로세스 설계 및 매뉴얼 작성', '임직원 교육 및 훈련'],
    illustration: ConsultingIllust,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: '내부심사 지원',
    description: '인증심사 전 내부심사를 통해 시스템의 적합성과 효과성을 사전에 점검합니다.',
    features: ['내부심사 계획 수립', '현장 심사 수행', '부적합 사항 보고', '시정조치 지원'],
    illustration: AuditIllust,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '인증심사 지원',
    description: '인증기관의 심사에 대비하여 사전 준비부터 심사 당일 지원까지 전 과정을 함께합니다.',
    features: ['심사 사전 준비', '인증기관 선정 지원', '심사 당일 현장 지원', '부적합 시정조치 대응'],
    illustration: CertIllust,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: '의료기기 인허가 · KGMP',
    description: '의료기기 인허가(RA) 및 KGMP 적합성 인증을 전문적으로 지원합니다.',
    features: ['의료기기 인허가 지원', 'KGMP 적합성 인증', '체외진단의료기기 대응', '디지털 헬스케어 컨설팅'],
    illustration: MedicalIllust,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '업체교육 · 사후관리',
    description: '인증 취득 후에도 경영시스템이 지속적으로 유지되고 개선될 수 있도록 지원합니다.',
    features: ['경영시스템 유지 관리', '연간 사후심사 대비', '개정 규격 반영', '맞춤형 업체교육 훈련'],
    illustration: TrainingIllust,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'EcoVadis 컨설팅',
    badge: 'Econine에서 진행',
    description: '글로벌 공급망 지속가능성 평가 플랫폼 EcoVadis 대응을 통해 기업의 ESG 경쟁력을 강화합니다.',
    features: ['EcoVadis 평가 대응 컨설팅', '환경·노동·윤리·조달 개선', 'CSR/지속가능성 문서화 지원', '평가 등급 향상 전략 수립'],
    illustration: EsgIllust,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mt-3 mb-4">
            서비스 안내
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            ISO 경영시스템의 구축부터 인증 취득, 의료기기 인허가, EcoVadis 컨설팅 및 사후관리까지 전 과정을 전문적으로 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Illust = service.illustration;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Card illustration */}
                <div className="overflow-hidden">
                  <Illust className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-lg font-bold text-primary-dark">{service.title}</h3>
                    {service.badge && (
                      <a href="https://econine.kr/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap hover:bg-emerald-100 transition-colors">
                        {service.badge}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
