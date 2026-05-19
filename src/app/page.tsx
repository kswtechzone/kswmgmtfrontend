import Link from 'next/link';
import { Hotel, UserPlus, LogIn } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-main)',
      color: 'var(--text-main)',
      textAlign: 'center',
      padding: 'var(--space-10)'
    }}>
      <div style={{ 
        display: 'inline-flex', 
        padding: 'var(--space-4)', 
        borderRadius: '50%', 
        background: 'rgba(166, 118, 83, 0.1)', 
        color: 'var(--primary)',
        marginBottom: 'var(--space-6)'
      }}>
        <Hotel size={48} />
      </div>
      
      <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: 'var(--space-2)', letterSpacing: '-0.025em' }}>
        KSW<span style={{ color: 'var(--primary)' }}>HOSPITALITY</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: 'var(--space-10)' }}>
        The world's most advanced modular hospitality management system. 
        Designed for scale, built for excellence.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/login" className="btn btn-primary" style={{ display: 'flex', gap: 'var(--space-2)', height: '56px', padding: '0 var(--space-8)' }}>
          <LogIn size={20} />
          Sign In to Portal
        </Link>
        <Link href="/register" className="btn" style={{ 
          display: 'flex', 
          gap: 'var(--space-2)', 
          height: '56px', 
          padding: '0 var(--space-8)',
          background: 'var(--bg-card)',
          color: 'var(--text-main)',
          border: '1px solid var(--border)'
        }}>
          <UserPlus size={20} />
          Register Business
        </Link>
      </div>

      <div style={{ marginTop: 'var(--space-10)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Join 2,500+ premium hospitality brands worldwide.
      </div>
    </main>
  );
}
