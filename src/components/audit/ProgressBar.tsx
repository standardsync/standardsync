import type { ProgressInfo } from '../../utils/progress';

interface ProgressBarProps {
  progress: ProgressInfo;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">심사 진행률</span>
        <span className="text-2xl font-bold text-primary">{progress.percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${progress.percentage}%`,
            background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
          }}
        />
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-conformity" />
          <span className="text-gray-600">적합 {progress.conformity}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-nonconformity" />
          <span className="text-gray-600">부적합 {progress.nonconformity}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-observation" />
          <span className="text-gray-600">관찰사항 {progress.observation}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-not-audited" />
          <span className="text-gray-600">미심사 {progress.notAudited}</span>
        </div>
      </div>
    </div>
  );
}
