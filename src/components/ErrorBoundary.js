import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Filter out MetaMask-related errors that don't affect the app
    if (error.message && error.message.includes('MetaMask')) {
      // Reset the error state for MetaMask errors
      this.setState({ hasError: false, error: null });
      return;
    }
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for actual app errors
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          background: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          margin: '20px'
        }}>
          <h2>Something went wrong</h2>
          <p>We're sorry, but there was an error loading this page.</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
