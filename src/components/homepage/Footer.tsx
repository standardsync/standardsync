interface FooterProps {
  onPrivacy: () => void;
  onTerms: () => void;
}

export function Footer({ onPrivacy, onTerms }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#536B3E' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-1">
              <span className="text-xl font-bold tracking-tight">스탠다드싱크</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] text-white/50 mb-4">StandardSync</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              ISO 경영시스템, 의료기기(인허가, KGMP)<br />
              컨설팅 및 업체교육
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              대표: 김충열<br />
              (16317) 경기도 수원시 장안구<br />
              수성로245번길 21<br />
              화서역우방센트럴파크 314-1201
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">서비스</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#services" className="hover:text-leaf-light transition-colors">시스템 구축 컨설팅</a></li>
              <li><a href="#services" className="hover:text-leaf-light transition-colors">내부심사 지원</a></li>
              <li><a href="#services" className="hover:text-leaf-light transition-colors">인증심사 지원</a></li>
              <li><a href="#services" className="hover:text-leaf-light transition-colors">의료기기 인허가 · KGMP</a></li>
              <li><a href="#services" className="hover:text-leaf-light transition-colors">업체교육 · 사후관리</a></li>
              <li><a href="#services" className="hover:text-leaf-light transition-colors">EcoVadis 컨설팅</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">인증 규격</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>ISO 9001 / 14001 / 45001</li>
              <li>ISO 13485 / 22716</li>
              <li>ISO 37001 / 37301</li>
              <li>ISO 27001 / 42001 / 50001</li>
              <li>EcoVadis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">연락처</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Tel. 010-5315-5156</li>
              <li>auditor.kcr0607@gmail.com</li>
              <li>평일 09:00 - 18:00</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://blog.naver.com/standardsync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-leaf-light transition-colors"
                aria-label="Naver Blog"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/standardsync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-leaf-light transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} StandardSync. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <button onClick={onPrivacy} className="hover:text-white/70 transition-colors cursor-pointer">개인정보처리방침</button>
            <button onClick={onTerms} className="hover:text-white/70 transition-colors cursor-pointer">이용약관</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
