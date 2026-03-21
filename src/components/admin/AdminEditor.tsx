import { useState, useCallback, useMemo } from 'react';
import type { ISOStandard, Clause, SubClause, Requirement } from '../../types/standard';
import { useCustomStandards } from '../../hooks/useCustomStandards';
import { generateClauseId, generateSubClauseId } from '../../utils/adminHelpers';
import { AdminClauseNav } from './AdminClauseNav';
import { AdminRequirementEditor } from './AdminRequirementEditor';
import { AdminConfirmModal } from './AdminConfirmModal';
import { AdminAddModal } from './AdminAddModal';
import { AdminEditInfoModal } from './AdminEditInfoModal';

interface AdminEditorProps {
  standardKey: string;
  onBack: () => void;
}

type ModalState =
  | null
  | { kind: 'addClause' }
  | { kind: 'addSubClause'; clauseId: string }
  | { kind: 'deleteClause'; clauseId: string }
  | { kind: 'deleteSubClause'; clauseId: string; subClauseId: string }
  | { kind: 'deleteRequirement'; subClauseId: string; reqId: string }
  | { kind: 'resetConfirm' }
  | { kind: 'editInfo' };

export function AdminEditor({ standardKey, onBack }: AdminEditorProps) {
  const { getEffectiveStandard, saveCustomStandard, hasCustomOverride, resetStandard } = useCustomStandards();
  const baseStandard = getEffectiveStandard(standardKey);

  const [working, setWorking] = useState<ISOStandard>(() => {
    if (!baseStandard) throw new Error(`Standard not found: ${standardKey}`);
    return structuredClone(baseStandard);
  });

  const [selectedSubClauseId, setSelectedSubClauseId] = useState<string | null>(() => {
    const first = working.clauses[0]?.subClauses[0];
    return first?.id ?? null;
  });

  const [modal, setModal] = useState<ModalState>(null);

  const isCustom = hasCustomOverride(standardKey);

  // 선택된 세부조항 찾기
  const { selectedClause, selectedSubClause } = useMemo(() => {
    for (const clause of working.clauses) {
      for (const sc of clause.subClauses) {
        if (sc.id === selectedSubClauseId) {
          return { selectedClause: clause, selectedSubClause: sc };
        }
      }
    }
    return { selectedClause: undefined, selectedSubClause: undefined };
  }, [working, selectedSubClauseId]);

  // 변경 저장 헬퍼
  const persist = useCallback(
    (updated: ISOStandard) => {
      setWorking(updated);
      saveCustomStandard(updated);
    },
    [saveCustomStandard]
  );

  // ── 조항 CRUD ──
  const addClause = useCallback(
    (id: string, title: string) => {
      const newClause: Clause = { id, title, subClauses: [] };
      persist({ ...working, clauses: [...working.clauses, newClause] });
    },
    [working, persist]
  );

  const deleteClause = useCallback(
    (clauseId: string) => {
      const updated = { ...working, clauses: working.clauses.filter((c) => c.id !== clauseId) };
      persist(updated);
      if (selectedClause?.id === clauseId) {
        const first = updated.clauses[0]?.subClauses[0];
        setSelectedSubClauseId(first?.id ?? null);
      }
    },
    [working, persist, selectedClause]
  );

  // ── 세부조항 CRUD ──
  const addSubClause = useCallback(
    (clauseId: string, id: string, title: string) => {
      const newSc: SubClause = { id, title, requirements: [] };
      const updated = {
        ...working,
        clauses: working.clauses.map((c) =>
          c.id === clauseId ? { ...c, subClauses: [...c.subClauses, newSc] } : c
        ),
      };
      persist(updated);
      setSelectedSubClauseId(id);
    },
    [working, persist]
  );

  const deleteSubClause = useCallback(
    (clauseId: string, subClauseId: string) => {
      const updated = {
        ...working,
        clauses: working.clauses.map((c) =>
          c.id === clauseId
            ? { ...c, subClauses: c.subClauses.filter((sc) => sc.id !== subClauseId) }
            : c
        ),
      };
      persist(updated);
      if (selectedSubClauseId === subClauseId) {
        const first = updated.clauses.flatMap((c) => c.subClauses)[0];
        setSelectedSubClauseId(first?.id ?? null);
      }
    },
    [working, persist, selectedSubClauseId]
  );

  // ── 세부조항 제목 수정 ──
  const updateSubClauseTitle = useCallback(
    (title: string) => {
      if (!selectedSubClauseId) return;
      const updated = {
        ...working,
        clauses: working.clauses.map((c) => ({
          ...c,
          subClauses: c.subClauses.map((sc) =>
            sc.id === selectedSubClauseId ? { ...sc, title } : sc
          ),
        })),
      };
      persist(updated);
    },
    [working, persist, selectedSubClauseId]
  );

  // ── 요구사항 CRUD ──
  const updateRequirement = useCallback(
    (reqId: string, field: 'description' | 'guidance', value: string) => {
      if (!selectedSubClauseId) return;
      const updated = {
        ...working,
        clauses: working.clauses.map((c) => ({
          ...c,
          subClauses: c.subClauses.map((sc) =>
            sc.id === selectedSubClauseId
              ? {
                  ...sc,
                  requirements: sc.requirements.map((r) =>
                    r.id === reqId ? { ...r, [field]: value || undefined } : r
                  ),
                }
              : sc
          ),
        })),
      };
      persist(updated);
    },
    [working, persist, selectedSubClauseId]
  );

  const deleteRequirement = useCallback(
    (reqId: string) => {
      if (!selectedSubClauseId) return;
      const updated = {
        ...working,
        clauses: working.clauses.map((c) => ({
          ...c,
          subClauses: c.subClauses.map((sc) =>
            sc.id === selectedSubClauseId
              ? { ...sc, requirements: sc.requirements.filter((r) => r.id !== reqId) }
              : sc
          ),
        })),
      };
      persist(updated);
    },
    [working, persist, selectedSubClauseId]
  );

  const addRequirement = useCallback(
    (req: Requirement) => {
      if (!selectedSubClauseId) return;
      const updated = {
        ...working,
        clauses: working.clauses.map((c) => ({
          ...c,
          subClauses: c.subClauses.map((sc) =>
            sc.id === selectedSubClauseId
              ? { ...sc, requirements: [...sc.requirements, req] }
              : sc
          ),
        })),
      };
      persist(updated);
    },
    [working, persist, selectedSubClauseId]
  );

  // ── 초기화 ──
  const handleReset = useCallback(() => {
    resetStandard(standardKey);
    const builtIn = getEffectiveStandard(standardKey);
    if (builtIn) {
      setWorking(structuredClone(builtIn));
      const first = builtIn.clauses[0]?.subClauses[0];
      setSelectedSubClauseId(first?.id ?? null);
    }
    setModal(null);
  }, [standardKey, resetStandard, getEffectiveStandard]);

  if (!baseStandard) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>표준을 찾을 수 없습니다.</p>
        <button onClick={onBack} className="mt-4 text-primary hover:underline text-sm">돌아가기</button>
      </div>
    );
  }

  // 총 요구사항 수 계산
  const totalReqs = working.clauses.reduce(
    (sum, c) => sum + c.subClauses.reduce((s, sc) => s + sc.requirements.length, 0),
    0
  );

  return (
    <div>
      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full">
              {working.standardNumber}
            </span>
            {working.version && (
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                {working.version}
              </span>
            )}
            {isCustom && (
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                사용자 정의
              </span>
            )}
            <button
              onClick={() => setModal({ kind: 'editInfo' })}
              className="p-1 text-gray-400 hover:text-primary hover:bg-blue-50 rounded transition-colors"
              title="표준 정보 편집"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          <h2 className="text-lg font-bold text-gray-900">{working.name}</h2>
          {working.description && (
            <p className="text-xs text-gray-400 mt-0.5">{working.description}</p>
          )}
          <p className="text-xs text-gray-500 mt-0.5">
            {working.clauses.length}개 조항 · {totalReqs}개 요구사항
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isCustom && (
            <button
              onClick={() => setModal({ kind: 'resetConfirm' })}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              기본값으로 초기화
            </button>
          )}
          <button
            onClick={onBack}
            className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            ← 목록으로
          </button>
        </div>
      </div>

      {/* 모바일 세부조항 선택 */}
      <div className="lg:hidden mb-4">
        <select
          value={selectedSubClauseId ?? ''}
          onChange={(e) => setSelectedSubClauseId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {working.clauses.map((clause) => (
            <optgroup key={clause.id} label={`${clause.id}. ${clause.title}`}>
              {clause.subClauses.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.id} {sc.title} ({sc.requirements.length})
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
            <AdminClauseNav
              standard={working}
              selectedSubClauseId={selectedSubClauseId}
              onSelect={setSelectedSubClauseId}
              onAddClause={() => setModal({ kind: 'addClause' })}
              onDeleteClause={(clauseId) => setModal({ kind: 'deleteClause', clauseId })}
              onAddSubClause={(clauseId) => setModal({ kind: 'addSubClause', clauseId })}
              onDeleteSubClause={(clauseId, subClauseId) =>
                setModal({ kind: 'deleteSubClause', clauseId, subClauseId })
              }
            />
          </div>
        </div>

        {/* 우측: 요구사항 편집 */}
        <div className="flex-1 min-w-0">
          {selectedSubClause ? (
            <AdminRequirementEditor
              standardKey={standardKey}
              subClause={selectedSubClause}
              onUpdateSubClauseTitle={updateSubClauseTitle}
              onUpdateRequirement={updateRequirement}
              onDeleteRequirement={(reqId) =>
                setModal({ kind: 'deleteRequirement', subClauseId: selectedSubClause.id, reqId })
              }
              onAddRequirement={addRequirement}
            />
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p>좌측에서 세부조항을 선택하세요</p>
            </div>
          )}
        </div>
      </div>

      {/* 모달 */}
      {modal?.kind === 'addClause' && (
        <AdminAddModal
          title="조항 추가"
          idLabel="조항 번호"
          titleLabel="조항 제목"
          defaultId={generateClauseId(working.clauses.map((c) => c.id))}
          onConfirm={(id, title) => { addClause(id, title); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'addSubClause' && (
        <AdminAddModal
          title="세부조항 추가"
          idLabel="세부조항 번호"
          titleLabel="세부조항 제목"
          defaultId={generateSubClauseId(
            modal.clauseId,
            working.clauses.find((c) => c.id === modal.clauseId)?.subClauses.map((sc) => sc.id) ?? []
          )}
          onConfirm={(id, title) => { addSubClause(modal.clauseId, id, title); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'deleteClause' && (
        <AdminConfirmModal
          title="조항 삭제"
          message={`조항 ${modal.clauseId}과(와) 하위 세부조항 및 모든 요구사항이 삭제됩니다.\n이 작업은 되돌릴 수 없습니다.`}
          confirmLabel="삭제"
          onConfirm={() => { deleteClause(modal.clauseId); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'deleteSubClause' && (
        <AdminConfirmModal
          title="세부조항 삭제"
          message={`세부조항 ${modal.subClauseId}과(와) 모든 요구사항이 삭제됩니다.\n이 작업은 되돌릴 수 없습니다.`}
          confirmLabel="삭제"
          onConfirm={() => { deleteSubClause(modal.clauseId, modal.subClauseId); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'deleteRequirement' && (
        <AdminConfirmModal
          title="요구사항 삭제"
          message={`요구사항 "${modal.reqId}"을(를) 삭제하시겠습니까?`}
          confirmLabel="삭제"
          onConfirm={() => { deleteRequirement(modal.reqId); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'resetConfirm' && (
        <AdminConfirmModal
          title="기본값으로 초기화"
          message={`"${working.standardNumber} ${working.name}"의 사용자 정의 내용을 삭제하고 기본값으로 복원하시겠습니까?`}
          confirmLabel="초기화"
          onConfirm={handleReset}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.kind === 'editInfo' && (
        <AdminEditInfoModal
          standardNumber={working.standardNumber}
          name={working.name}
          description={working.description}
          version={working.version}
          onConfirm={(info) => {
            persist({ ...working, ...info });
            setModal(null);
          }}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  );
}
