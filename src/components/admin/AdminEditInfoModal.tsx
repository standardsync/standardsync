import { useState } from 'react';

interface AdminEditInfoModalProps {
  standardNumber: string;
  name: string;
  description: string;
  version: string;
  onConfirm: (info: {
    standardNumber: string;
    name: string;
    description: string;
    version: string;
  }) => void;
  onCancel: () => void;
}

export function AdminEditInfoModal({
  standardNumber: initNumber,
  name: initName,
  description: initDesc,
  version: initVersion,
  onConfirm,
  onCancel,
}: AdminEditInfoModalProps) {
  const [standardNumber, setStandardNumber] = useState(initNumber);
  const [name, setName] = useState(initName);
  const [description, setDescription] = useState(initDesc);
  const [version, setVersion] = useState(initVersion);

  const canSubmit = standardNumber.trim() !== '' && name.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onConfirm({
      standardNumber: standardNumber.trim(),
      name: name.trim(),
      description: description.trim(),
      version: version.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onCancel}>
      <div className="fixed inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">표준 정보 편집</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              표준 번호 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={standardNumber}
              onChange={(e) => setStandardNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="예: ISO 9001:2015"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              표준명 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="예: 품질경영시스템"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="예: 제품 및 서비스의 일관된 품질 보증을 위한 요구사항"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">버전/연도</label>
            <input
              type="text"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="예: 2015"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
