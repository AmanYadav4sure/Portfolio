export const SkeletonLoader = () => {
  return (
    <div style={{
      padding: '10rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center',
      opacity: 0.5
    }}>
      <div style={{
        width: '60%', height: '40px', background: 'var(--text-primary)',
        borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
        animation: 'pulse 1.5s infinite'
      }}></div>
      <div style={{
        width: '40%', height: '20px', background: 'var(--text-primary)',
        borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
        animation: 'pulse 1.5s infinite'
      }}></div>
    </div>
  );
};
