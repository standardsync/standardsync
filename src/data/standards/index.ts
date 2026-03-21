import { iso9001 } from './iso9001';
import { iso14001 } from './iso14001';
import { iso45001 } from './iso45001';
import { iso27001 } from './iso27001';
import { iso37001 } from './iso37001';
import { iso37301 } from './iso37301';
import { iso13485 } from './iso13485';
import { iso22716 } from './iso22716';
import { iso42001 } from './iso42001';
import { iso22301 } from './iso22301';
import { iso50001 } from './iso50001';
import type { ISOStandard } from '../../types/standard';

export function computeTotal(standard: ISOStandard): ISOStandard {
  const total = standard.clauses.reduce(
    (sum, clause) =>
      sum +
      clause.subClauses.reduce((subSum, sc) => subSum + sc.requirements.length, 0),
    0
  );
  return { ...standard, totalRequirements: total };
}

export const standards: ISOStandard[] = [
  iso9001,
  iso14001,
  iso45001,
  iso27001,
  iso37001,
  iso37301,
  iso13485,
  iso22716,
  iso42001,
  iso22301,
  iso50001,
].map(computeTotal);

export const getStandardByKey = (key: string): ISOStandard | undefined =>
  standards.find((s) => s.key === key);
