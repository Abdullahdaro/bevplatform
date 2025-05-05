export const tokens = {
    // Color palette
    colors: {
      primary: {
        50: '#f5f8ff',
        100: '#eaf1ff',
        200: '#d9e3ff',
        300: '#bccbff',
        400: '#94a6ff',
        500: '#6b7eff', // Primary brand color
        600: '#4556ff',
        700: '#2c3af0',
        800: '#2832d4',
        900: '#2730a6',
        950: '#171b5c',
      },
      secondary: {
        50: '#f4f9fd',
        100: '#e9f3fa',
        200: '#d2e7f5',
        300: '#afd5ed',
        400: '#82b9e0',
        500: '#5c9cd3', // Secondary brand color
        600: '#3c7fc5',
        700: '#3168ac',
        800: '#2c578d',
        900: '#294a74',
        950: '#1a2e4a',
      },
      accent: {
        50: '#fff7ed',
        100: '#ffecd3',
        200: '#ffd4a5',
        300: '#ffb76d',
        400: '#ff8e38',
        500: '#fd6b15', // Accent color
        600: '#eb4f08',
        700: '#c33b09',
        800: '#9a3110',
        900: '#7d2c11',
        950: '#431305',
      },
    },
    
    // Spacing scale
    spacing: {
      '4xs': '0.125rem', // 2px
      '3xs': '0.25rem',  // 4px
      '2xs': '0.375rem', // 6px
      'xs': '0.5rem',    // 8px
      'sm': '0.75rem',   // 12px
      'md': '1rem',      // 16px
      'lg': '1.25rem',   // 20px
      'xl': '1.5rem',    // 24px
      '2xl': '2rem',     // 32px
      '3xl': '2.5rem',   // 40px
      '4xl': '3rem',     // 48px
      '5xl': '4rem',     // 64px
      '6xl': '5rem',     // 80px
    },
    
    // Font sizes
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    
    // Z-index scale
    zIndex: {
      'behind': -1,
      'default': 0,
      'dropdown': 10,
      'sticky': 20,
      'fixed': 30,
      'modal': 40,
      'popover': 50,
      'tooltip': 60,
    },
    
    // Transition duration
    transition: {
      'fast': '150ms',
      'default': '300ms',
      'slow': '500ms',
    },
    
    // Border width
    borderWidth: {
      'none': '0',
      'hairline': '0.5px',
      'thin': '1px',
      'thick': '2px',
      'heavy': '4px',
    },
    
    // Border radius
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.25rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      'pill': '9999px',
    },
    
    // Shadows
    shadows: {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };
  
  // Use this to get proper TS typing for your design tokens
  export type DesignTokens = typeof tokens;