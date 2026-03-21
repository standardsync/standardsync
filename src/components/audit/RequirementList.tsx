import type { SubClause } from '../../types/standard';
import type { AuditSession, AuditResult } from '../../types/audit';
import { RequirementItem } from './RequirementItem';

interface RequirementListProps {
  subClause: SubClause;
  session: AuditSession;
  onUpdate: (requirementId: string, result: AuditResult, memo: string) => void;
}

export function RequirementList({ subClause, session, onUpdate }: RequirementListProps) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          {subClause.id} {subClause.title}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">{subClause.requirements.length}개 요구사항</p>
      </div>
      <div className="space-y-3">
        {subClause.requirements.map((req) => (
          <RequirementItem
            key={req.id}
            requirement={req}
            result={session.results[req.id]}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}
