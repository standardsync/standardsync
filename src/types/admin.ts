import type { ISOStandard } from './standard';

/** 관리자 커스텀 표준 저장소 스키마 */
export interface AdminStorageSchema {
  schemaVersion: number;
  /** 표준 key -> 커스터마이즈된 ISOStandard 매핑 */
  customStandards: Record<string, ISOStandard>;
}
