import { useState } from 'react';
import { ContactBgIllust } from './illustrations';

// Formspree Form ID - formspree.io에서 발급받은 ID로 교체하세요
const FORMSPREE_ID = 'xgonbqwj';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* SVG background */}
      <div className="absolute inset-0">
        <ContactBgIllust className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mt-3 mb-6">
              무료 상담 문의
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              ISO 인증에 대해 궁금한 점이 있으시면 언제든 문의해 주세요.
              전문 컨설턴트가 귀사에 맞는 최적의 솔루션을 안내해 드립니다.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">전화 문의</div>
                  <div className="text-gray-500 text-sm">010-5315-5156</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">이메일</div>
                  <div className="text-gray-500 text-sm">auditor.kcr0607@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">주소</div>
                  <div className="text-gray-500 text-sm">(16317) 경기도 수원시 장안구 수성로245번길 21<br />화서역우방센트럴파크 314-1201</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">상담 시간</div>
                  <div className="text-gray-500 text-sm">평일 09:00 - 18:00</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-sm font-semibold text-primary-dark mb-3">온라인 채널</div>
              <div className="flex gap-3">
                <a
                  href="https://blog.naver.com/standardsync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
                  Blog
                </a>
                <a
                  href="https://www.linkedin.com/in/standardsync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">상담 신청이 접수되었습니다</h3>
                <p className="text-gray-500 text-sm mb-6">빠른 시간 내에 연락드리겠습니다.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">회사명</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="회사명을 입력해 주세요"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">담당자명</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="성함"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">이메일</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">관심 규격</label>
                <select
                  name="standard"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                >
                  <option value="">선택해 주세요</option>
                  <option>ISO 9001 (품질경영)</option>
                  <option>ISO 14001 (환경경영)</option>
                  <option>ISO 45001 (안전보건)</option>
                  <option>ISO 13485 (의료기기)</option>
                  <option>ISO 22716 (화장품 GMP)</option>
                  <option>ISO 37001 (부패방지)</option>
                  <option>ISO 37301 (규범준수)</option>
                  <option>ISO 27001 (정보보안)</option>
                  <option>ISO 42001 (인공지능)</option>
                  <option>ISO 50001 (에너지)</option>
                  <option>ESG 컨설팅</option>
                  <option>의료기기 인허가 / KGMP</option>
                  <option>기타 / 복수 규격</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">문의 내용</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="문의 내용을 입력해 주세요"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
              >
                {submitting ? '전송 중...' : '무료 상담 신청하기'}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
