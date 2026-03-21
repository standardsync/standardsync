import { useState } from 'react';
import type { ISOStandard } from '../../types/standard';
import { AdminConfirmModal } from './AdminConfirmModal';

interface AdminStandardListProps {
  standards: ISOStandard[];
  hasCustomOverride: (key: string) => boolean;
  isCustomOnly: (key: string) => boolean;
  onEdit: (key: string) => void;
  onReset: (key: string) => void;
  onDelete: (key: string) => void;
  onAddStandard: () => void;
  onBack: () => void;
}

export function AdminStandardList({
  standards,
  hasCustomOverride,
  isCustomOnly,
  onEdit,
  onReset,
  onDelete,
  onAddStandard,
  onBack,
}: AdminStandardListProps) {
  const [confirmTarget, setConfirmTarget] = useState<{ key: string; action: 'reset' | 'delete' } | null>(null);
  const targetStd = confirmTarget ? standards.find((s) => s.key === confirmTarget.key) : undefined;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">규격 데이터 관리</h2>
          <p className="text-sm text-gray-500 mt-1">조항 및 요구사항을 편집하려면 규격을 선택하세요</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onAddStandard}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            새 표준 추가
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {standards.map((std) => {
          const isCustom = hasCustomOverride(std.key);
          const isUserAdded = isCustomOnly(std.key);
          return (
            <div
              key={std.key}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded">
                  {std.standardNumber}
                </span>
                {isUserAdded ? (
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    사용자 추가
                  </span>
                ) : isCustom ? (
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    사용자 정의
                  </span>
                ) : null}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{std.name}</h3>
              <p className="text-xs text-gray-500 mb-3">
                {std.totalRequirements}개 요구사항
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onEdit(std.key)}
                  className="flex-1 px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                >
                  편집
                </button>
                {isUserAdded ? (
                  <button
                    onClick={() => setConfirmTarget({ key: std.key, action: 'delete' })}
                    className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                    title="표준 삭제"
                  >
                    삭제
                  </button>
                ) : isCustom ? (
                  <button
                    onClick={() => setConfirmTarget({ key: std.key, action: 'reset' })}
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="기본값으로 초기화"
                  >
                    초기화
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {confirmTarget && targetStd && (
        <AdminConfirmModal
          title={confirmTarget.action === 'delete' ? '표준 삭제' : '기본값으로 초기화'}
          message={
            confirmTarget.action === 'delete'
              ? `"${targetStd.standardNumber} ${targetStd.name}"을(를) 완전히 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`
              : `"${targetStd.standardNumber} ${targetStd.name}"의 사용자 정의 내용을 삭제하고 기본값으로 복원하시겠습니까?`
          }
          confirmLabel={confirmTarget.action === 'delete' ? '삭제' : '초기화'}
          onConfirm={() => {
            if (confirmTarget.action === 'delete') onDelete(confirmTarget.key);
            else onReset(confirmTarget.key);
            setConfirmTarget(null);
          }}
          onCancel={() => setConfirmTarget(null)}
        />
      )}
    </div>
  );
}
