import { useState } from 'react';
import { useCustomStandards } from '../../hooks/useCustomStandards';
import type { ISOStandard } from '../../types/standard';
import { AdminStandardList } from './AdminStandardList';
import { AdminEditor } from './AdminEditor';
import { AdminAddStandardModal } from './AdminAddStandardModal';

interface AdminPageProps {
  onBack: () => void;
}

type AdminView = { step: 'list' } | { step: 'edit'; standardKey: string };

export function AdminPage({ onBack }: AdminPageProps) {
  const [view, setView] = useState<AdminView>({ step: 'list' });
  const [showAddModal, setShowAddModal] = useState(false);
  const { allStandards, hasCustomOverride, isCustomOnly, resetStandard, addNewStandard } = useCustomStandards();

  const handleAddStandard = (data: {
    key: string;
    standardNumber: string;
    name: string;
    description: string;
    version: string;
  }) => {
    const newStandard: ISOStandard = {
      key: data.key,
      standardNumber: data.standardNumber,
      name: data.name,
      description: data.description,
      version: data.version,
      totalRequirements: 0,
      clauses: [],
    };
    addNewStandard(newStandard);
    setShowAddModal(false);
    setView({ step: 'edit', standardKey: data.key });
  };

  if (view.step === 'edit') {
    return (
      <AdminEditor
        key={view.standardKey}
        standardKey={view.standardKey}
        onBack={() => setView({ step: 'list' })}
      />
    );
  }

  return (
    <>
      <AdminStandardList
        standards={allStandards}
        hasCustomOverride={hasCustomOverride}
        isCustomOnly={isCustomOnly}
        onEdit={(key) => setView({ step: 'edit', standardKey: key })}
        onReset={resetStandard}
        onDelete={resetStandard}
        onAddStandard={() => setShowAddModal(true)}
        onBack={onBack}
      />
      {showAddModal && (
        <AdminAddStandardModal
          existingKeys={allStandards.map((s) => s.key)}
          onConfirm={handleAddStandard}
          onCancel={() => setShowAddModal(false)}
        />
      )}
    </>
  );
}
