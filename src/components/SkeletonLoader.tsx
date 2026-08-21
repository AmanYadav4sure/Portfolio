import './SkeletonLoader.css';

export function SkeletonLoader() {
  return (
    <div className='skeleton-container container'>
      <div className='skeleton-header'></div>
      <div className='skeleton-body'>
        <div className='skeleton-line'></div>
        <div className='skeleton-line short'></div>
        <div className='skeleton-block'></div>
      </div>
    </div>
  );
}
