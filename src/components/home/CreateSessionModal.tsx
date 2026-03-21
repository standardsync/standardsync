import { useState } from 'react';
import type { ISOStandard } from '../../types/standard';

interface CreateSessionModalProps {
  standard: ISOStandard;
  onClose: () => void;
  onCreate: (name: string, auditorName: string, auditTarget: string) => void;
}

export function CreateSessionModal({ standard, onClose, onCreate }: CreateSessionModalProps) {
  const [name, setName] = useState(`${new Date().getFullYear()}년 ${standard.name} 심사`);
  const [auditorName, setAuditorName] = useState('');
  const [auditTarget, setAuditTarget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && auditorName.trim()) {
      onCreate(name.trim(), auditorName.trim(), auditTarget.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">새 심사 생성</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 mb-5">
            <span className="text-xs font-semibold text-primary">{standard.standardNumber}</span>
            <p className="text-sm font-medium text-gray-800 mt-0.5">{standard.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{standard.totalRequirements}개 심사 항목</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">심사명 *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="예: 2024년 1차 내부심사"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">심사원 *</label>
              <input
                type="text"
                value={auditorName}
                onChange={(e) => setAuditorName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="심사원 이름"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">심사 대상</label>
              <input
                type="text"
                value={auditTarget}
                onChange={(e) => setAuditTarget(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="부서 또는 조직명"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                심사 시작
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
