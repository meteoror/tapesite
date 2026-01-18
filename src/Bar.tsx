import React from 'react';

interface ProgressBarProps {
  progress: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Bar: React.FC<ProgressBarProps> = ({ progress, onSeek }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onSeek(e);
  };

  return (
    <div className="progress-bar" onClick={handleClick}>
      <div 
        className="progress-fill" 
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};