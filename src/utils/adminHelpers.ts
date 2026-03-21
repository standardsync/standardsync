/** 다음 조항 ID 생성 */
export function generateClauseId(existingIds: string[]): string {
  const nums = existingIds.map((id) => parseInt(id, 10)).filter((n) => !isNaN(n));
  const max = nums.length > 0 ? Math.max(...nums) : 0;
  return String(max + 1);
}

/** 다음 세부조항 ID 생성 */
export function generateSubClauseId(clauseId: string, existingIds: string[]): string {
  const prefix = clauseId + '.';
  const suffixes = existingIds
    .filter((id) => id.startsWith(prefix))
    .map((id) => {
      const rest = id.slice(prefix.length);
      const n = parseInt(rest, 10);
      return isNaN(n) ? 0 : n;
    });
  const max = suffixes.length > 0 ? Math.max(...suffixes) : 0;
  return `${clauseId}.${max + 1}`;
}

/** 다음 요구사항 ID 생성 */
export function generateRequirementId(
  standardKey: string,
  subClauseId: string,
  existingIds: string[]
): string {
  const num = standardKey.replace('iso', '');
  const base = `${num}-${subClauseId}-R`;
  const suffixes = existingIds
    .filter((id) => id.startsWith(base))
    .map((id) => {
      const rest = id.slice(base.length);
      const n = parseInt(rest, 10);
      return isNaN(n) ? 0 : n;
    });
  const max = suffixes.length > 0 ? Math.max(...suffixes) : 0;
  return `${base}${String(max + 1).padStart(2, '0')}`;
}
