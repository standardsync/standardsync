import { useState, useRef, useCallback, useEffect } from 'react';
import type { SubClause, Requirement } from '../../types/standard';
import { generateRequirementId } from '../../utils/adminHelpers';

interface AdminRequirementEditorProps {
  standardKey: string;
  subClause: SubClause;
  onUpdateSubClauseTitle: (title: string) => void;
  onUpdateRequirement: (reqId: string, field: 'description' | 'guidance', value: string) => void;
  onDeleteRequirement: (reqId: string) => void;
  onAddRequirement: (req: Requirement) => void;
}

export function AdminRequirementEditor({
  standardKey,
  subClause,
  onUpdateSubClauseTitle,
  onUpdateRequirement,
  onDeleteRequirement,
  onAddRequirement,
}: AdminRequirementEditorProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* 세부조항 헤더 */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded">
            {subClause.id}
          </span>
          <span className="text-xs text-gray-400">{subClause.requirements.length}개 요구사항</span>
        </div>
        <DebouncedInput
          value={subClause.title}
          onChange={onUpdateSubClauseTitle}
          className="w-full text-sm font-bold text-gray-900 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="세부조항 제목"
        />
      </div>

      {/* 요구사항 목록 */}
      <div className="divide-y divide-gray-100">
        {subClause.requirements.map((req) => (
          <RequirementRow
            key={req.id}
            requirement={req}
            onUpdate={onUpdateRequirement}
            onDelete={onDeleteRequirement}
          />
        ))}
      </div>

      {/* 요구사항 추가 */}
      <div className="p-3 border-t border-gray-100">
        <button
          onClick={() => {
            const existingIds = subClause.requirements.map((r) => r.id);
            const newId = generateRequirementId(standardKey, subClause.id, existingIds);
            onAddRequirement({ id: newId, description: '' });
          }}
          className="w-full py-2 text-sm font-medium text-primary hover:text-primary-dark hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          요구사항 추가
        </button>
      </div>
    </div>
  );
}

/* ── 개별 요구사항 행 ── */
function RequirementRow({
  requirement,
  onUpdate,
  onDelete,
}: {
  requirement: Requirement;
  onUpdate: (reqId: string, field: 'description' | 'guidance', value: string) => void;
  onDelete: (reqId: string) => void;
}) {
  const [showGuidance, setShowGuidance] = useState(!!requirement.guidance);

  return (
    <div className="p-4 group">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
          {requirement.id}
        </span>
        <div className="flex-1" />
        <button
          onClick={() => setShowGuidance((v) => !v)}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors shrink-0"
          title={showGuidance ? '가이던스 숨기기' : '가이던스 표시'}
        >
          {showGuidance ? '가이던스 ▲' : '가이던스 ▼'}
        </button>
        <button
          onClick={() => onDelete(requirement.id)}
          className="p-0.5 text-gray-300 hover:text-red-500 transition-colors shrink-0"
          title="삭제"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <DebouncedTextarea
        value={requirement.description}
        onChange={(v) => onUpdate(requirement.id, 'description', v)}
        className="w-full text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
        placeholder="요구사항 설명을 입력하세요"
        rows={2}
      />
      {showGuidance && (
        <div className="mt-2">
          <label className="text-xs text-gray-400 mb-1 block">가이던스 (선택)</label>
          <DebouncedTextarea
            value={requirement.guidance ?? ''}
            onChange={(v) => onUpdate(requirement.id, 'guidance', v)}
            className="w-full text-xs text-gray-600 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            placeholder="심사원을 위한 가이드/힌트"
            rows={2}
          />
        </div>
      )}
    </div>
  );
}

/* ── 디바운스 Input ── */
function DebouncedInput({
  value,
  onChange,
  className,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
}) {
  const [local, setLocal] = useState(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => { setLocal(value); }, [value]);

  const handleChange = useCallback((v: string) => {
    setLocal(v);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onChangeRef.current(v), 400);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <input
      type="text"
      value={local}
      onChange={(e) => handleChange(e.target.value)}
      className={className}
      placeholder={placeholder}
    />
  );
}

/* ── 디바운스 Textarea ── */
function DebouncedTextarea({
  value,
  onChange,
  className,
  placeholder,
  rows,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
  rows?: number;
}) {
  const [local, setLocal] = useState(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => { setLocal(value); }, [value]);

  const handleChange = useCallback((v: string) => {
    setLocal(v);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onChangeRef.current(v), 400);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <textarea
      value={local}
      onChange={(e) => handleChange(e.target.value)}
      className={className}
      placeholder={placeholder}
      rows={rows}
    />
  );
}
