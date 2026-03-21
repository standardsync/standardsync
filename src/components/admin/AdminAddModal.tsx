import { useState } from 'react';

interface AdminAddModalProps {
  title: string;
  idLabel: string;
  titleLabel: string;
  defaultId: string;
  onConfirm: (id: string, title: string) => void;
  onCancel: () => void;
}

export function AdminAddModal({
  title,
  idLabel,
  titleLabel,
  defaultId,
  onConfirm,
  onCancel,
}: AdminAddModalProps) {
  const [id, setId] = useState(defaultId);
  const [itemTitle, setItemTitle] = useState('');

  const canSubmit = id.trim() !== '' && itemTitle.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) onConfirm(id.trim(), itemTitle.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onCancel}>
      <div className="fixed inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{idLabel}</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="예: 4.1"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{titleLabel}</label>
            <input
              type="text"
              value={itemTitle}
              onChange={(e) => setItemTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="제목을 입력하세요"
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
              추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
