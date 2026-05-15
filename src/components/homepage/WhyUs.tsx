import { ExpertiseIllust, CostIllust, CommIllust, ResultsIllust } from './illustrations';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: '다양한 규격 전문성',
    description: '11개 이상의 ISO 규격 및 EcoVadis에 대한 깊은 이해와 실무 경험을 보유하고 있어, 다중 인증도 효율적으로 진행합니다.',
    illustration: ExpertiseIllust,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '합리적인 비용',
    description: '불필요한 과정 없이 핵심에 집중하는 효율적인 컨설팅으로, 합리적인 비용으로 인증을 취득할 수 있습니다.',
    illustration: CostIllust,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '밀착 커뮤니케이션',
    description: '담당 컨설턴트가 전 과정에서 밀착 소통하며, 궁금한 점에 신속하게 대응합니다.',
    illustration: CommIllust,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '실질적 성과',
    description: '단순 서류 작업이 아닌, 실제 업무에 적용 가능한 시스템을 구축하여 조직의 실질적인 역량을 향상시킵니다.',
    illustration: ResultsIllust,
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why StandardSync</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mt-3 mb-4">
            스탠다드싱크를 선택하는 이유
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Illust = reason.illustration;
            return (
              <div
                key={reason.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="overflow-hidden">
                  <Illust className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 -mt-10 relative z-10 border-4 border-white shadow-sm">
                    {reason.icon}
                  </div>
                  <h3 className="text-base font-bold text-primary-dark mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
