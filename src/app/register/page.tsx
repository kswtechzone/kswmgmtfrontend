'use client';

import React, { useState } from 'react';
import { UserPlus, Building2, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    orgName: '',
    orgSlug: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      
      // Success - redirect to login
      window.location.href = '/login?registered=true';
    } catch (err: any) {
      if (err.message === 'Failed to fetch') {
        setError('Connection Failed: Ensure the backend server is running on port 4000');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'var(--bg-admin)',
      padding: 'var(--space-10)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{ 
        position: 'absolute', 
        bottom: '-10%', 
        left: '-10%', 
        width: '500px', 
        height: '500px', 
        background: 'var(--primary)', 
        filter: 'blur(100px)', 
        opacity: 0.1,
        borderRadius: '50%'
      }}></div>

      <div className="card glass" style={{ width: '100%', maxWidth: '500px', padding: 'var(--space-10)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <div style={{ 
            display: 'inline-flex', 
            padding: 'var(--space-4)', 
            borderRadius: '50%', 
            background: 'rgba(166, 118, 83, 0.1)', 
            color: 'var(--primary)',
            marginBottom: 'var(--space-4)'
          }}>
            <UserPlus size={32} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', letterSpacing: '-0.025em' }}>
            Get <span style={{ color: 'var(--primary)' }}>Started</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginTop: 'var(--space-2)' }}>
            Register your organization on KSWMS
          </p>
        </div>

        {error && (
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid rgba(239, 68, 68, 0.2)', 
            color: '#f87171', 
            padding: 'var(--space-3)', 
            borderRadius: 'var(--radius-md)', 
            fontSize: '0.875rem',
            marginBottom: 'var(--space-6)',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Your Name</label>
              <input name="name" className="input" placeholder="John Doe" onChange={handleChange} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Email</label>
              <input name="email" type="email" className="input" placeholder="john@company.com" onChange={handleChange} required />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Organization Name</label>
            <input name="orgName" className="input" placeholder="Grand Vista Resorts" onChange={handleChange} required />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Organization Slug (URL)</label>
            <input name="orgSlug" className="input" placeholder="grand-vista" onChange={handleChange} required />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Create Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                name="password" 
                type={showPassword ? 'text' : 'password'} 
                className="input" 
                placeholder="••••••••" 
                onChange={handleChange} 
                required 
                style={{ paddingRight: 'var(--space-10)' }}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 'var(--space-3)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            className="btn btn-primary" 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', height: '48px', marginTop: 'var(--space-2)' }}
          >
            {loading ? 'Creating Account...' : 'Initialize Organization'}
          </button>
        </form>

        <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Already have an account? <a href="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
