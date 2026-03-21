/** 심사 결과 유형 */
export type AuditResult = '적합' | '부적합' | '관찰사항' | '미심사';

/** 단일 요구사항에 대한 심사 결과 */
export interface RequirementResult {
  /** Requirement.id 참조 */
  requirementId: string;
  /** 심사 결과 */
  result: AuditResult;
  /** 증빙자료 또는 코멘트 메모 */
  memo: string;
  /** 마지막 업데이트 시각 */
  updatedAt: string;
}

/** 심사 세션 */
export interface AuditSession {
  /** 세션 UUID */
  id: string;
  /** ISOStandard.key 참조 */
  standardKey: string;
  /** 표시 이름, 예: "2024년 1차 내부심사" */
  name: string;
  /** 심사원 이름 */
  auditorName: string;
  /** 심사 대상 부서/조직 */
  auditTarget: string;
  /** 생성 시각 */
  createdAt: string;
  /** 마지막 수정 시각 */
  updatedAt: string;
  /** requirementId -> RequirementResult 매핑 */
  results: Record<string, RequirementResult>;
}

/** localStorage 저장 스키마 */
export interface StorageSchema {
  schemaVersion: number;
  sessions: AuditSession[];
}
