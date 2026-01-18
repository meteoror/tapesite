import React from 'react';
import type { Song } from './songs';

interface PlayerProps {
  song: Song;
  isPlaying: boolean;
  togglePlay: () => void;
  skip: (seconds: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onTimeUpdate: () => void;
  onEnded: () => void;
}

export const Player: React.FC<PlayerProps> = ({
  song,
  isPlaying,
  togglePlay,
  skip,
  audioRef,
  onTimeUpdate,
  onEnded,
}) => {
  const handleSkipBackward = () => {
    skip(-15);
  };

  const handleSkipForward = () => {
    skip(15);
  };

  return (
    <div className="player-view d-flex flex-column align-items-center text-center flex-grow-1 p-5">
      {/* Album Cover */}
      {song.cover ? (
        <img 
          src={song.cover} 
          className="cover mb-4" 
          alt={`${song.title} cover`}
        />
      ) : (
        <div className="cover mb-4 d-flex align-items-center justify-content-center">
          <span style={{ fontSize: '60px' }}>♪</span>
        </div>
      )}
      
      <h2>{song.title}</h2>
      <h5 className="text-muted">{song.artist}</h5>

      <p className="mt-3">{song.description}</p>

      <div className="controls mt-4">
        <button onClick={handleSkipBackward}>
          ⏮
        </button>

        <button onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>

        <button onClick={handleSkipForward}>
          ⏭
        </button>
      </div>

      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
};