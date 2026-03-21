/** 단일 심사 가능한 요구사항 */
export interface Requirement {
  /** 표준 내 고유 ID, 예: "9001-4.1-R01" */
  id: string;
  /** 요구사항 설명 (한국어) */
  description: string;
  /** 심사원을 위한 선택적 가이드/힌트 */
  guidance?: string;
}

/** 세부조항 (예: 4.1, 4.2, 7.3.2) */
export interface SubClause {
  /** 세부조항 번호, 예: "4.1" */
  id: string;
  /** 세부조항 제목 (한국어) */
  title: string;
  /** 이 세부조항의 심사 가능한 요구사항 */
  requirements: Requirement[];
}

/** 주요 조항 (예: 조항 4, 조항 7) */
export interface Clause {
  /** 조항 번호, 예: "4" */
  id: string;
  /** 조항 제목 (한국어) */
  title: string;
  /** 이 조항의 세부조항 */
  subClauses: SubClause[];
}

/** ISO 표준 최상위 정의 */
export interface ISOStandard {
  /** 고유 키, 예: "iso9001" */
  key: string;
  /** 전체 표준 번호, 예: "ISO 9001:2015" */
  standardNumber: string;
  /** 표준명 (한국어) */
  name: string;
  /** 간단한 설명 (한국어) */
  description: string;
  /** 버전/연도, 예: "2015" */
  version: string;
  /** 심사 가능한 요구사항 총 수 */
  totalRequirements: number;
  /** 조항 목록 (순서대로) */
  clauses: Clause[];
}
