import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { AuditSession, AuditResult, StorageSchema } from '../types/audit';
import { getStandardByKey } from '../data/standards';
import { calculateProgress, type ProgressInfo } from '../utils/progress';

const STORAGE_KEY = 'iso-audit-sessions';
const DEFAULT_SCHEMA: StorageSchema = { schemaVersion: 1, sessions: [] };

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

export function useAuditSession(resolveStandard?: (key: string) => import('../types/standard').ISOStandard | undefined) {
  const [storage, setStorage] = useLocalStorage<StorageSchema>(STORAGE_KEY, DEFAULT_SCHEMA);

  const sessions = storage.sessions;

  const createSession = useCallback(
    (standardKey: string, name: string, auditorName: string, auditTarget: string): string => {
      const id = generateId();
      const now = new Date().toISOString();
      const newSession: AuditSession = {
        id,
        standardKey,
        name,
        auditorName,
        auditTarget,
        createdAt: now,
        updatedAt: now,
        results: {},
      };
      setStorage((prev) => ({
        ...prev,
        sessions: [newSession, ...prev.sessions],
      }));
      return id;
    },
    [setStorage]
  );

  const getSession = useCallback(
    (id: string): AuditSession | undefined => {
      return sessions.find((s) => s.id === id);
    },
    [sessions]
  );

  const updateResult = useCallback(
    (sessionId: string, requirementId: string, result: AuditResult, memo: string) => {
      const now = new Date().toISOString();
      setStorage((prev) => ({
        ...prev,
        sessions: prev.sessions.map((s) =>
          s.id === sessionId
            ? {
                ...s,
                updatedAt: now,
                results: {
                  ...s.results,
                  [requirementId]: {
                    requirementId,
                    result,
                    memo,
                    updatedAt: now,
                  },
                },
              }
            : s
        ),
      }));
    },
    [setStorage]
  );

  const deleteSession = useCallback(
    (id: string) => {
      setStorage((prev) => ({
        ...prev,
        sessions: prev.sessions.filter((s) => s.id !== id),
      }));
    },
    [setStorage]
  );

  const getProgress = useCallback(
    (sessionId: string): ProgressInfo => {
      const session = sessions.find((s) => s.id === sessionId);
      if (!session) return { total: 0, audited: 0, conformity: 0, nonconformity: 0, observation: 0, notAudited: 0, percentage: 0 };
      const standard = (resolveStandard ?? getStandardByKey)(session.standardKey);
      if (!standard) return { total: 0, audited: 0, conformity: 0, nonconformity: 0, observation: 0, notAudited: 0, percentage: 0 };
      return calculateProgress(session, standard);
    },
    [sessions]
  );

  return { sessions, createSession, getSession, updateResult, deleteSession, getProgress };
}
