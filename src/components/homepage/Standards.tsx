const standards = [
  {
    number: 'ISO 9001',
    title: '품질경영시스템',
    description: '제품 및 서비스의 품질을 일관되게 제공하고 고객 만족을 향상시키기 위한 품질경영시스템 국제 표준',
    color: 'from-green-600 to-green-700',
  },
  {
    number: 'ISO 14001',
    title: '환경경영시스템',
    description: '환경 성과를 향상시키고 환경 목표를 달성하며 법적 의무를 이행하기 위한 환경경영시스템 표준',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    number: 'ISO 45001',
    title: '안전보건경영시스템',
    description: '근로자의 업무 관련 부상 및 건강 악화를 예방하고 안전한 작업 환경을 제공하기 위한 표준',
    color: 'from-teal-600 to-teal-700',
  },
  {
    number: 'ISO 13485',
    title: '의료기기 품질경영시스템',
    description: '의료기기의 설계, 개발, 생산, 설치 및 서비스에 대한 품질경영시스템 요구사항 표준',
    color: 'from-lime-600 to-lime-700',
  },
  {
    number: 'ISO 22716',
    title: '화장품 품질경영시스템',
    description: '화장품의 생산, 관리, 보관 및 출하에 관한 우수 제조 관리 기준(GMP) 가이드라인',
    color: 'from-green-500 to-green-600',
  },
  {
    number: 'ISO 37001',
    title: '부패방지경영시스템',
    description: '조직의 반부패 문화를 구축하고 뇌물 수수를 예방, 탐지, 대응하기 위한 경영시스템 표준',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    number: 'ISO 37301',
    title: '규범준수경영시스템',
    description: '법적 요구사항 및 자발적 의무를 체계적으로 관리하고 준수하기 위한 준법경영시스템 표준',
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: 'ISO 27001',
    title: '정보보안경영시스템',
    description: '정보 자산을 체계적으로 보호하고 정보보안 리스크를 관리하기 위한 경영시스템 표준',
    color: 'from-lime-500 to-lime-600',
  },
  {
    number: 'ISO 42001',
    title: '인공지능경영시스템',
    description: '인공지능 시스템의 책임있는 개발, 배포 및 사용을 위한 경영시스템 표준',
    color: 'from-green-600 to-emerald-600',
  },
  {
    number: 'ISO 50001',
    title: '에너지경영시스템',
    description: '에너지 성과를 지속적으로 개선하고 에너지 효율성을 향상시키기 위한 경영시스템 표준',
    color: 'from-teal-600 to-green-600',
  },
  {
    number: 'ESG',
    title: 'Environmental, Social & Governance',
    description: '환경, 사회, 지배구조 측면의 지속가능경영을 체계적으로 구축하고 실천하기 위한 프레임워크',
    color: 'from-emerald-700 to-green-700',
  },
];

import { StandardsBgIllust } from './illustrations';

export function Standards() {
  return (
    <section id="standards" className="relative py-20 sm:py-28 overflow-hidden">
      {/* SVG background */}
      <div className="absolute inset-0">
        <StandardsBgIllust className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Standards</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mt-3 mb-4">
            인증 규격 안내
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            스탠다드싱크는 아래 ISO 규격 및 ESG에 대한 전문 컨설팅 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((std) => (
            <div
              key={std.number}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${std.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`inline-flex items-center bg-gradient-to-r ${std.color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4`}>
                {std.number}
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{std.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{std.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
