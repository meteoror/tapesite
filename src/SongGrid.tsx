import React from 'react';
import type { Song } from './songs';

interface SongGridProps {
  songs: Song[];
  currentSongId: number | null;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
  onDownload: (song: Song) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onTimeUpdate: () => void;
  onEnded: () => void;
}

export const SongGrid: React.FC<SongGridProps> = ({
  songs,
  currentSongId,
  isPlaying,
  onPlay,
  onDownload,
  audioRef,
  onTimeUpdate,
  onEnded,
}) => {
  const displaySongs = songs.slice(0, 8);

  const handleDownload = (song: Song) => {
    onDownload(song);
  };

  const handlePlay = (song: Song) => {
    onPlay(song);
  };

  return (
    <div className="song-grid-container">
      <div className="song-grid">
        {displaySongs.map((song) => (
          <div
            key={song.id}
            className={`song-tile ${song.id === currentSongId ? 'playing' : ''}`}
          >
            <span className="tile-number">{song.id}</span>

            <button
              className="tile-button download-btn"
              onClick={() => handleDownload(song)}
              title="Download"
            >
              <i className="fa-solid fa-download"></i>
            </button>

            <button
              className="tile-button play-btn"
              onClick={() => handlePlay(song)}
              title="Play"
            >
              <i className={`fa-solid ${song.id === currentSongId && isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
          </div>
        ))}
      </div>

      <audio
        ref={audioRef}
        src={displaySongs.find(s => s.id === currentSongId)?.src}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
};
