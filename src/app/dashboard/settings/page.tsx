'use client';
import React from 'react';
import { Settings } from 'lucide-react';

export default function OrgSettingsPage() {
  return (
    <div className="card glass" style={{ padding: 'var(--space-6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <Settings size={28} color="var(--primary)" />
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Settings</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Manage your organization preferences and configurations.</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: 'var(--space-10)', color: 'var(--text-muted)' }}>
        <Settings size={48} style={{ margin: '0 auto var(--space-4)', opacity: 0.3 }} />
        <h2>Settings Coming Soon</h2>
        <p>Organization settings, branding, and notification preferences will be available here.</p>
      </div>
    </div>
  );
}
