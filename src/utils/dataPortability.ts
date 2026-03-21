import type { StorageSchema } from '../types/audit';
import type { AdminStorageSchema } from '../types/admin';

const SESSION_KEY = 'iso-audit-sessions';
const ADMIN_KEY = 'iso-admin-custom-standards';

interface ExportData {
  exportVersion: 1;
  exportedAt: string;
  sessions: StorageSchema;
  customStandards: AdminStorageSchema;
}

/** 모든 데이터를 JSON 파일로 내보내기 */
export function exportAllData(): void {
  const sessions: StorageSchema = JSON.parse(
    localStorage.getItem(SESSION_KEY) || '{"schemaVersion":1,"sessions":[]}'
  );
  const customStandards: AdminStorageSchema = JSON.parse(
    localStorage.getItem(ADMIN_KEY) || '{"schemaVersion":1,"customStandards":{}}'
  );

  const data: ExportData = {
    exportVersion: 1,
    exportedAt: new Date().toISOString(),
    sessions,
    customStandards,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const date = new Date().toISOString().slice(0, 10);
  a.download = `ISO심사_백업_${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/** JSON 파일에서 데이터 가져오기. 기존 데이터와 병합(세션은 중복 ID 제거 후 추가, 커스텀 표준은 덮어쓰기) */
export function importAllData(file: File): Promise<{ sessionCount: number; standardCount: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data: ExportData = JSON.parse(reader.result as string);
        if (!data.exportVersion || !data.sessions || !data.customStandards) {
          throw new Error('올바른 백업 파일이 아닙니다.');
        }

        // 세션 병합
        const existing: StorageSchema = JSON.parse(
          localStorage.getItem(SESSION_KEY) || '{"schemaVersion":1,"sessions":[]}'
        );
        const existingIds = new Set(existing.sessions.map((s) => s.id));
        const newSessions = data.sessions.sessions.filter((s) => !existingIds.has(s.id));
        existing.sessions = [...newSessions, ...existing.sessions];
        localStorage.setItem(SESSION_KEY, JSON.stringify(existing));

        // 커스텀 표준 병합
        const existingAdmin: AdminStorageSchema = JSON.parse(
          localStorage.getItem(ADMIN_KEY) || '{"schemaVersion":1,"customStandards":{}}'
        );
        const importedStandards = data.customStandards.customStandards;
        existingAdmin.customStandards = { ...existingAdmin.customStandards, ...importedStandards };
        localStorage.setItem(ADMIN_KEY, JSON.stringify(existingAdmin));

        resolve({
          sessionCount: newSessions.length,
          standardCount: Object.keys(importedStandards).length,
        });
      } catch (e) {
        reject(e instanceof Error ? e : new Error('파일을 읽을 수 없습니다.'));
      }
    };
    reader.onerror = () => reject(new Error('파일을 읽을 수 없습니다.'));
    reader.readAsText(file);
  });
}
