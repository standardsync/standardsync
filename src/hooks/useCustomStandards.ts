import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { standards as builtInStandards, computeTotal } from '../data/standards';
import type { AdminStorageSchema } from '../types/admin';
import type { ISOStandard } from '../types/standard';

const STORAGE_KEY = 'iso-admin-custom-standards';
const DEFAULT_SCHEMA: AdminStorageSchema = { schemaVersion: 1, customStandards: {} };

export function useCustomStandards() {
  const [storage, setStorage] = useLocalStorage<AdminStorageSchema>(STORAGE_KEY, DEFAULT_SCHEMA);

  const builtInKeys = useMemo(() => new Set(builtInStandards.map((s) => s.key)), []);

  /** 커스텀 오버라이드 우선, 없으면 내장 기본값 반환 */
  const getEffectiveStandard = useCallback(
    (key: string): ISOStandard | undefined => {
      const custom = storage.customStandards[key];
      if (custom) return computeTotal(custom);
      return builtInStandards.find((s) => s.key === key);
    },
    [storage.customStandards]
  );

  /** 전체 표준 목록 (내장 + 커스텀 오버라이드 + 사용자 추가 표준) */
  const allStandards = useMemo(() => {
    // 1. 내장 표준에 커스텀 오버라이드 적용
    const merged = builtInStandards.map((s) => {
      const custom = storage.customStandards[s.key];
      return custom ? computeTotal(custom) : s;
    });
    // 2. 내장에 없는 사용자 추가 표준 추가
    const customOnly = Object.values(storage.customStandards)
      .filter((s) => !builtInKeys.has(s.key))
      .map(computeTotal);
    return [...merged, ...customOnly];
  }, [storage.customStandards, builtInKeys]);

  /** 특정 표준에 커스텀 오버라이드 존재 여부 */
  const hasCustomOverride = useCallback(
    (key: string): boolean => key in storage.customStandards,
    [storage.customStandards]
  );

  /** 내장 표준이 아닌 사용자 추가 표준인지 여부 */
  const isCustomOnly = useCallback(
    (key: string): boolean => key in storage.customStandards && !builtInKeys.has(key),
    [storage.customStandards, builtInKeys]
  );

  /** 커스터마이즈된 표준 저장 */
  const saveCustomStandard = useCallback(
    (standard: ISOStandard): void => {
      setStorage((prev) => ({
        ...prev,
        customStandards: {
          ...prev.customStandards,
          [standard.key]: standard,
        },
      }));
    },
    [setStorage]
  );

  /** 특정 표준 기본값으로 초기화 (내장) 또는 완전 삭제 (사용자 추가) */
  const resetStandard = useCallback(
    (key: string): void => {
      setStorage((prev) => {
        const { [key]: _, ...rest } = prev.customStandards;
        return { ...prev, customStandards: rest };
      });
    },
    [setStorage]
  );

  /** 새 표준 추가 */
  const addNewStandard = useCallback(
    (standard: ISOStandard): void => {
      setStorage((prev) => ({
        ...prev,
        customStandards: {
          ...prev.customStandards,
          [standard.key]: standard,
        },
      }));
    },
    [setStorage]
  );

  return {
    getEffectiveStandard,
    allStandards,
    hasCustomOverride,
    isCustomOnly,
    saveCustomStandard,
    resetStandard,
    addNewStandard,
  };
}
