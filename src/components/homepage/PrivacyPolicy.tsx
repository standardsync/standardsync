import { PolicyModal } from './PolicyModal';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <PolicyModal isOpen={isOpen} onClose={onClose} title="개인정보처리방침">
      <p className="text-gray-400 text-xs">시행일: 2025년 1월 1일</p>

      <div>
        <p>
          스탠다드싱크(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
          이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          수립·공개합니다.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제1조 (개인정보의 처리 목적)</h3>
        <p className="mb-2">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>상담 문의 접수 및 처리: 문의자 확인, 상담 내용 확인, 사실 조회, 결과 통보</li>
          <li>서비스 제공: ISO 컨설팅, 심사 지원, 교육 등 계약 이행 및 서비스 제공</li>
          <li>마케팅 및 광고 활용: 신규 서비스 안내, 이벤트 정보 제공 (별도 동의 시)</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제2조 (개인정보의 처리 및 보유 기간)</h3>
        <p className="mb-2">회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>상담 문의 기록: 3년 (상법 등 관련 법령에 따른 보존 기간)</li>
          <li>계약 및 서비스 제공 기록: 5년</li>
          <li>소비자 불만 또는 분쟁 처리 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제3조 (처리하는 개인정보의 항목)</h3>
        <p className="mb-2">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>필수 항목: 회사명, 담당자명, 연락처, 이메일</li>
          <li>선택 항목: 관심 규격, 문의 내용</li>
          <li>자동 수집 항목: 접속 IP 주소, 쿠키, 접속 일시, 서비스 이용 기록</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제4조 (개인정보의 제3자 제공)</h3>
        <p>
          회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
          「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제5조 (개인정보의 파기절차 및 방법)</h3>
        <p className="mb-2">회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제</li>
          <li>기록물, 인쇄물, 서면 등: 분쇄기로 분쇄하거나 소각</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제6조 (정보주체의 권리·의무 및 행사방법)</h3>
        <p className="mb-2">정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리 정지 요구</li>
        </ul>
        <p className="mt-2">위 권리 행사는 서면, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제7조 (개인정보의 안전성 확보조치)</h3>
        <p className="mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>관리적 조치: 내부 관리계획 수립·시행, 개인정보 취급 직원의 최소화 및 교육</li>
          <li>기술적 조치: 개인정보처리시스템의 접근 권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화</li>
          <li>물리적 조치: 전산실, 자료보관실 등의 접근 통제</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제8조 (개인정보 보호책임자)</h3>
        <p className="mb-2">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p><strong>개인정보 보호책임자</strong></p>
          <p>성명: 김충열</p>
          <p>직책: 대표</p>
          <p>연락처: 010-5315-5156</p>
          <p>이메일: auditor.kcr0607@gmail.com</p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제9조 (개인정보 처리방침 변경)</h3>
        <p>이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다. 변경 사항이 있을 경우 웹사이트를 통해 공지할 예정입니다.</p>
      </div>

      <div>
        <h3 className="font-bold text-primary-dark text-base mb-2">제10조 (권익침해 구제방법)</h3>
        <p className="mb-2">정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담 등을 신청할 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>개인정보분쟁조정위원회: (국번없이) 1833-6972</li>
          <li>개인정보침해신고센터: (국번없이) 118</li>
          <li>대검찰청 사이버수사과: (국번없이) 1301</li>
          <li>경찰청 사이버안전국: (국번없이) 182</li>
        </ul>
      </div>
    </PolicyModal>
  );
}
