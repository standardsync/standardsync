import type { AuditSession } from '../../types/audit';
import { useCustomStandards } from '../../hooks/useCustomStandards';
import type { ProgressInfo } from '../../utils/progress';

interface SessionListProps {
  sessions: AuditSession[];
  getProgress: (sessionId: string) => ProgressInfo;
  onOpen: (sessionId: string) => void;
  onDelete: (sessionId: string) => void;
}

export function SessionList({ sessions, getProgress, onOpen, onDelete }: SessionListProps) {
  const { getEffectiveStandard } = useCustomStandards();

  if (sessions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-sm">저장된 심사가 없습니다</p>
        <p className="text-xs mt-1">위에서 ISO 규격을 선택하여 새 심사를 시작하세요</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sessions.map((session) => {
        const standard = getEffectiveStandard(session.standardKey);
        const progress = getProgress(session.id);
        return (
          <div
            key={session.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-0.5 rounded">
                    {standard?.standardNumber ?? session.standardKey}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{session.name}</h4>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>심사원: {session.auditorName}</span>
                  <span>대상: {session.auditTarget}</span>
                  <span>{new Date(session.createdAt).toLocaleDateString('ko-KR')}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 w-10 text-right">{progress.percentage}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => onOpen(session.id)}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  계속
                </button>
                <button
                  onClick={() => onDelete(session.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                  title="삭제"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
