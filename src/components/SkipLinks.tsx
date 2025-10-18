'use client';

import Link from 'next/link';

const SkipLinks = () => {
  return (
    <>
      <Link 
        href="#main-content" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: '#000',
          color: '#fff',
          padding: '8px',
          textDecoration: 'none',
          zIndex: 1000,
          borderRadius: '4px'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '6px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-40px';
        }}
      >
        Skip to main content
      </Link>
      <Link 
        href="#navigation" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: '#000',
          color: '#fff',
          padding: '8px',
          textDecoration: 'none',
          zIndex: 1000,
          borderRadius: '4px',
          marginTop: '40px'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '46px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-40px';
        }}
      >
        Skip to navigation
      </Link>
    </>
  );
};

export default SkipLinks;
