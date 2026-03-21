import type { AuditSession } from '../types/audit';
import type { ISOStandard, SubClause, Clause } from '../types/standard';

export interface ProgressInfo {
  total: number;
  audited: number;
  conformity: number;
  nonconformity: number;
  observation: number;
  notAudited: number;
  percentage: number;
}

function emptyProgress(): ProgressInfo {
  return { total: 0, audited: 0, conformity: 0, nonconformity: 0, observation: 0, notAudited: 0, percentage: 0 };
}

export function calculateProgress(session: AuditSession, standard: ISOStandard): ProgressInfo {
  const info = emptyProgress();
  for (const clause of standard.clauses) {
    for (const sc of clause.subClauses) {
      for (const req of sc.requirements) {
        info.total++;
        const r = session.results[req.id];
        if (r && r.result !== '미심사') {
          info.audited++;
          if (r.result === '적합') info.conformity++;
          else if (r.result === '부적합') info.nonconformity++;
          else if (r.result === '관찰사항') info.observation++;
        } else {
          info.notAudited++;
        }
      }
    }
  }
  info.percentage = info.total > 0 ? Math.round((info.audited / info.total) * 100) : 0;
  return info;
}

export function calculateSubClauseProgress(session: AuditSession, subClause: SubClause): ProgressInfo {
  const info = emptyProgress();
  for (const req of subClause.requirements) {
    info.total++;
    const r = session.results[req.id];
    if (r && r.result !== '미심사') {
      info.audited++;
      if (r.result === '적합') info.conformity++;
      else if (r.result === '부적합') info.nonconformity++;
      else if (r.result === '관찰사항') info.observation++;
    } else {
      info.notAudited++;
    }
  }
  info.percentage = info.total > 0 ? Math.round((info.audited / info.total) * 100) : 0;
  return info;
}

export function calculateClauseProgress(session: AuditSession, clause: Clause): ProgressInfo {
  const info = emptyProgress();
  for (const sc of clause.subClauses) {
    const scInfo = calculateSubClauseProgress(session, sc);
    info.total += scInfo.total;
    info.audited += scInfo.audited;
    info.conformity += scInfo.conformity;
    info.nonconformity += scInfo.nonconformity;
    info.observation += scInfo.observation;
    info.notAudited += scInfo.notAudited;
  }
  info.percentage = info.total > 0 ? Math.round((info.audited / info.total) * 100) : 0;
  return info;
}
