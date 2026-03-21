import { useState, useMemo } from 'react';
import { useAuditSession } from '../../hooks/useAuditSession';
import { useCustomStandards } from '../../hooks/useCustomStandards';
import { calculateProgress } from '../../utils/progress';
import type { AuditResult } from '../../types/audit';
import { ProgressBar } from './ProgressBar';
import { ClauseNav } from './ClauseNav';
import { RequirementList } from './RequirementList';
import { ExportButton } from './ExportButton';

interface AuditPageProps {
  sessionId: string;
  onBack: () => void;
}

export function AuditPage({ sessionId, onBack }: AuditPageProps) {
  const { getEffectiveStandard } = useCustomStandards();
  const { getSession, updateResult } = useAuditSession(getEffectiveStandard);
  const session = getSession(sessionId);
  const standard = session ? getEffectiveStandard(session.standardKey) : undefined;

  const [selectedSubClauseId, setSelectedSubClauseId] = useState<string | null>(() => {
    if (!standard) return null;
    const first = standard.clauses[0]?.subClauses[0];
    return first?.id ?? null;
  });

  const selectedSubClause = useMemo(() => {
    if (!standard || !selectedSubClauseId) return undefined;
    for (const clause of standard.clauses) {
      for (const sc of clause.subClauses) {
        if (sc.id === selectedSubClauseId) return sc;
      }
    }
    return undefined;
  }, [standard, selectedSubClauseId]);

  if (!session || !standard) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">심사 세션을 찾을 수 없습니다.</p>
        <button onClick={onBack} className="mt-4 text-primary hover:underline text-sm">
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const progress = calculateProgress(session, standard);

  const handleUpdate = (requirementId: string, result: AuditResult, memo: string) => {
    updateResult(sessionId, requirementId, result, memo);
  };

  return (
    <div>
      {/* 헤더 정보 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full">
              {standard.standardNumber}
            </span>
            <h2 className="text-lg font-bold text-gray-900">{session.name}</h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>심사원: {session.auditorName}</span>
            {session.auditTarget && <span>대상: {session.auditTarget}</span>}
          </div>
        </div>
        <ExportButton session={session} standard={standard} />
      </div>

      {/* 진행률 */}
      <div className="mb-5">
        <ProgressBar progress={progress} />
      </div>

      {/* 모바일 조항 선택 */}
      <div className="lg:hidden mb-4">
        <select
          value={selectedSubClauseId ?? ''}
          onChange={(e) => setSelectedSubClauseId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {standard.clauses.map((clause) => (
            <optgroup key={clause.id} label={`${clause.id}. ${clause.title}`}>
              {clause.subClauses.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.id} {sc.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* 2열 레이아웃 */}
      <div className="flex gap-5">
        {/* 좌측: 조항 네비게이션 */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24">
            <ClauseNav
              standard={standard}
              session={session}
              selectedSubClauseId={selectedSubClauseId}
              onSelect={setSelectedSubClauseId}
            />
          </div>
        </div>

        {/* 우측: 요구사항 리스트 */}
        <div className="flex-1 min-w-0">
          {selectedSubClause ? (
            <RequirementList
              subClause={selectedSubClause}
              session={session}
              onUpdate={handleUpdate}
            />
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p>좌측에서 조항을 선택하세요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
