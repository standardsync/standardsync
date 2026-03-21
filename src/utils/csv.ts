import type { AuditSession } from '../types/audit';
import type { ISOStandard } from '../types/standard';

export function exportToCSV(session: AuditSession, standard: ISOStandard): void {
  const BOM = '\uFEFF';
  const headers = ['조항번호', '조항명', '요구사항ID', '요구사항 설명', '심사결과', '증거/메모', '심사원', '심사대상', '심사일'];

  const rows: string[][] = [];
  for (const clause of standard.clauses) {
    for (const subClause of clause.subClauses) {
      for (const req of subClause.requirements) {
        const result = session.results[req.id];
        rows.push([
          subClause.id,
          subClause.title,
          req.id,
          req.description,
          result?.result ?? '미심사',
          result?.memo ?? '',
          session.auditorName,
          session.auditTarget,
          session.createdAt.slice(0, 10),
        ]);
      }
    }
  }

  const csvContent =
    BOM +
    [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(','))].join(
      '\n'
    );

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${session.name}_${standard.standardNumber}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
