import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Ramji Boat Services ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#0b0f19',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            backgroundColor: '#161d2d',
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚤</div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>
              RAMJI BOAT SERVICES
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
              An error occurred while loading this section.
            </p>
            <div style={{
              backgroundColor: '#090d16',
              padding: '16px',
              borderRadius: '12px',
              textAlign: 'left',
              overflowX: 'auto',
              fontSize: '12px',
              color: '#f87171',
              marginBottom: '24px',
              border: '1px solid #334155'
            }}>
              <code>{this.state.error?.toString()}</code>
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#f59e0b',
                color: '#000',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
