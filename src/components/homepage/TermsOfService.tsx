import { PolicyModal } from './PolicyModal';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <PolicyModal isOpen={isOpen} onClose={onClose} title="이용약관">
      <p className="text-gray-400 text-xs">시행일: 2025년 1월 1일</p>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제1조 (목적)</h3>
        <p>
          이 약관은 스탠다드싱크(이하 "회사")가 운영하는 웹사이트(이하 "사이트")에서 제공하는 서비스(이하 "서비스")의
          이용조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항에 관한 사항을 규정함을 목적으로 합니다.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제2조 (정의)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>"서비스"란 회사가 사이트를 통해 제공하는 ISO 경영시스템 컨설팅, 심사 지원, 교육 관련 정보 제공 및 상담 서비스를 말합니다.</li>
          <li>"이용자"란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
          <li>"상담 신청"이란 이용자가 사이트의 문의 양식을 통해 회사에 컨설팅 상담을 요청하는 행위를 말합니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제3조 (약관의 효력 및 변경)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>이 약관은 사이트에 게시하여 공시함으로써 효력이 발생합니다.</li>
          <li>회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 안에서 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지함으로써 효력이 발생합니다.</li>
          <li>이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관 시행 이후에도 서비스를 계속 이용하는 경우 약관 변경에 동의한 것으로 간주합니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제4조 (서비스의 내용)</h3>
        <p className="mb-2">회사가 사이트를 통해 제공하는 서비스는 다음과 같습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ISO 경영시스템(ISO 9001, 14001, 45001, 13485, 22716, 37001, 37301, 27001, 42001, 50001) 컨설팅 정보 제공</li>
          <li>EcoVadis 컨설팅 정보 제공</li>
          <li>의료기기 인허가(RA) 및 KGMP 관련 정보 제공</li>
          <li>온라인 상담 신청 접수</li>
          <li>기타 회사가 정하는 서비스</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제5조 (서비스의 이용)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.</li>
          <li>회사는 시스템 정기 점검, 증설 및 교체, 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
          <li>제2항에 의한 서비스 중단의 경우 회사는 사이트에 사전 공지합니다. 다만, 불가피한 사유로 사전 공지가 불가능한 경우 사후에 공지할 수 있습니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제6조 (이용자의 의무)</h3>
        <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>상담 신청 시 허위 정보의 기재</li>
          <li>회사의 서비스 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 유통, 상업적으로 이용하는 행위</li>
          <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해 행위</li>
          <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          <li>외설 또는 폭력적인 메시지, 기타 공서양속에 반하는 정보를 사이트에 게시하는 행위</li>
          <li>기타 불법적이거나 부당한 행위</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제7조 (저작권 및 지적재산권)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 로고, 디자인 등)에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.</li>
          <li>이용자는 회사가 제공하는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제8조 (면책 조항)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>회사는 천재지변, 불가항력적 사유 등으로 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
          <li>회사는 이용자의 귀책 사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
          <li>사이트에서 제공하는 정보는 일반적인 안내 목적으로 제공되며, 구체적인 법률적, 전문적 조언을 대체하지 않습니다. 정확한 내용은 별도의 상담을 통해 확인하시기 바랍니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제9조 (분쟁 해결)</h3>
        <ul className="list-decimal pl-5 space-y-1">
          <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.</li>
          <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 회사의 본사 소재지를 관할하는 법원을 제1심 관할법원으로 합니다.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제10조 (기타)</h3>
        <p>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련 법령 및 상관례에 따릅니다.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <p><strong>회사 정보</strong></p>
        <p>상호: 스탠다드싱크(StandardSync)</p>
        <p>대표: 김충열</p>
        <p>소재지: (16317) 경기도 수원시 장안구 수성로245번길 21 화서역우방센트럴파크 314-1201</p>
        <p>연락처: 010-5315-5156</p>
        <p>이메일: auditor.kcr0607@gmail.com</p>
      </div>
    </PolicyModal>
  );
}
