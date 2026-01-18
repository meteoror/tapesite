import React from 'react';
import type { Song } from './songs';

interface SongListProps {
  songs: Song[];
  currentSong: Song;
  onSelect: (song: Song) => void;
}

export const SongList: React.FC<SongListProps> = ({ songs, currentSong, onSelect }) => {
  const handleSongClick = (song: Song) => {
    onSelect(song);
  };

  return (
    <div className="song-list p-3">
      {songs.map((song) => (
        <div
          key={song.id}
          className={`song-row ${song.id === currentSong.id ? 'active' : ''}`}
          onClick={() => handleSongClick(song)}
        >
          <div className="d-flex justify-content-between">
            <span>{song.title}</span>
          </div>

          <div className="timeline">
            <div 
              className="timeline-fill" 
              style={{ 
                width: song.id === currentSong.id ? '30%' : '0%' 
              }} 
            />
          </div>

          <div className="play-hover">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      ))}
    </div>
  );
};