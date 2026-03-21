interface AdminConfirmModalProps {
  title: string;
  message: string;
  confirmLabel?: string;
  confirmColor?: 'red' | 'primary';
  onConfirm: () => void;
  onCancel: () => void;
}

export function AdminConfirmModal({
  title,
  message,
  confirmLabel = '확인',
  confirmColor = 'red',
  onConfirm,
  onCancel,
}: AdminConfirmModalProps) {
  const colorClass =
    confirmColor === 'red'
      ? 'bg-red-600 hover:bg-red-700'
      : 'bg-primary hover:bg-primary-dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onCancel}>
      <div className="fixed inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 whitespace-pre-line">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${colorClass}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
