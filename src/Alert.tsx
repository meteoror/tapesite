import React from 'react';

export const Alert: React.FC = () => {
  return (
    <div className="alert alert-danger mb-3">
      <p className="mb-1">no album covers use ur imagination</p>
      <p className="mb-0">audio may take a few secs to load</p>
    </div>
  );
};