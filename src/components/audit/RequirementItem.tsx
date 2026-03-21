import { useState, useEffect, useRef } from 'react';
import type { Requirement } from '../../types/standard';
import type { AuditResult, RequirementResult } from '../../types/audit';

interface RequirementItemProps {
  requirement: Requirement;
  result: RequirementResult | undefined;
  onUpdate: (requirementId: string, result: AuditResult, memo: string) => void;
}

const RESULTS: { value: AuditResult; label: string; color: string; bg: string }[] = [
  { value: '적합', label: '적합', color: 'text-conformity', bg: 'bg-green-50 border-conformity' },
  { value: '부적합', label: '부적합', color: 'text-nonconformity', bg: 'bg-red-50 border-nonconformity' },
  { value: '관찰사항', label: '관찰', color: 'text-observation', bg: 'bg-amber-50 border-observation' },
  { value: '미심사', label: '미심사', color: 'text-not-audited', bg: 'bg-gray-50 border-not-audited' },
];

export function RequirementItem({ requirement, result, onUpdate }: RequirementItemProps) {
  const currentResult = result?.result ?? '미심사';
  const [memo, setMemo] = useState(result?.memo ?? '');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMemo(result?.memo ?? '');
  }, [result?.memo]);

  const handleResultChange = (newResult: AuditResult) => {
    onUpdate(requirement.id, newResult, memo);
  };

  const handleMemoChange = (newMemo: string) => {
    setMemo(newMemo);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onUpdate(requirement.id, currentResult, newMemo);
    }, 400);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
          {requirement.id}
        </span>
        <p className="text-sm text-gray-800 leading-relaxed">{requirement.description}</p>
      </div>

      {/* 결과 선택 */}
      <div className="flex flex-wrap gap-2 mb-3">
        {RESULTS.map((r) => (
          <button
            key={r.value}
            onClick={() => handleResultChange(r.value)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-150 ${
              currentResult === r.value
                ? `${r.bg} ${r.color} border-current shadow-sm`
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* 메모 */}
      <textarea
        value={memo}
        onChange={(e) => handleMemoChange(e.target.value)}
        placeholder="증빙자료 및 코멘트를 입력하세요..."
        rows={2}
        className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 placeholder:text-gray-300"
      />
    </div>
  );
}
