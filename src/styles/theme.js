// src/styles/theme.js
export const lightTheme = {
    colors: {
      primary: '#7c3aed', 
      secondary: '#f97316', 
      background: '#ffffff',
      surface: '#f8fafc',
      cardBackground: '#ffffff',
      text: {
        primary: '#1f2937',
        secondary: '#6b7280',
        muted: '#9ca3af'
      },
      border: '#e5e7eb',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      gradient: {
        primary: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        secondary: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
      }
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem'
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1280px'
    },
    transitions: {
      fast: '0.15s ease',
      normal: '0.3s ease',
      slow: '0.5s ease'
    }
  };
  
  export const darkTheme = {
    colors: {
      primary: '#7c3aed',
      secondary: '#f97316',
      background: '#111827',
      surface: '#1f2937',
      cardBackground: '#1f2937',
      text: {
        primary: '#f9fafb',
        secondary: '#d1d5db',
        muted: '#9ca3af'
      },
      border: '#374151',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      gradient: {
        primary: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        secondary: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
      }
    },
    spacing: lightTheme.spacing,
    borderRadius: lightTheme.borderRadius,
    fontSize: lightTheme.fontSize,
    fontWeight: lightTheme.fontWeight,
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
    },
    breakpoints: lightTheme.breakpoints,
    transitions: lightTheme.transitions
  };