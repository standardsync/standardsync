import { useState, useRef } from 'react';
import { useCustomStandards } from '../../hooks/useCustomStandards';
import type { ISOStandard } from '../../types/standard';
import { useAuditSession } from '../../hooks/useAuditSession';
import { StandardCard } from './StandardCard';
import { SessionList } from './SessionList';
import { CreateSessionModal } from './CreateSessionModal';
import { exportAllData, importAllData } from '../../utils/dataPortability';

interface HomePageProps {
  onOpenSession: (sessionId: string) => void;
  onAdmin?: () => void;
}

export function HomePage({ onOpenSession, onAdmin }: HomePageProps) {
  const { allStandards, getEffectiveStandard } = useCustomStandards();
  const { sessions, createSession, deleteSession, getProgress } = useAuditSession(getEffectiveStandard);
  const [selectedStandard, setSelectedStandard] = useState<ISOStandard | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const result = await importAllData(file);
      alert(`가져오기 완료!\n새 심사 세션: ${result.sessionCount}건\n커스텀 규격: ${result.standardCount}건\n\n페이지를 새로고침합니다.`);
      window.location.reload();
    } catch (err) {
      alert(`가져오기 실패: ${err instanceof Error ? err.message : '알 수 없는 오류'}`);
    }
    e.target.value = '';
  };

  const handleCreate = (name: string, auditorName: string, auditTarget: string) => {
    if (!selectedStandard) return;
    const id = createSession(selectedStandard.key, name, auditorName, auditTarget);
    setSelectedStandard(null);
    onOpenSession(id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('이 심사를 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.')) {
      deleteSession(id);
    }
  };

  return (
    <div>
      {/* 규격 선택 */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-gray-900">ISO 규격 선택</h2>
          {onAdmin && (
            <button
              onClick={onAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              규격 데이터 관리
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-5">
          심사할 ISO 규격을 선택하여 새 심사를 시작하세요
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allStandards.map((standard) => (
            <StandardCard
              key={standard.key}
              standard={standard}
              onClick={setSelectedStandard}
            />
          ))}
        </div>
      </section>

      {/* 저장된 심사 */}
      <section>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-gray-900">저장된 심사</h2>
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              title="다른 PC에서 내보낸 백업 파일 가져오기"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              가져오기
            </button>
            <button
              onClick={exportAllData}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              title="모든 심사 데이터를 JSON 파일로 내보내기"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              내보내기
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-5">진행 중인 심사를 이어서 수행하세요</p>
        <SessionList
          sessions={sessions}
          getProgress={getProgress}
          onOpen={onOpenSession}
          onDelete={handleDelete}
        />
      </section>

      {/* 생성 모달 */}
      {selectedStandard && (
        <CreateSessionModal
          standard={selectedStandard}
          onClose={() => setSelectedStandard(null)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}
