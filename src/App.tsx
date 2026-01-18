// import React from 'react';
import { songs } from "./songs";
import { SongGrid } from "./SongGrid";
import { useAudioPlayer } from "./useAudioPlayer";

export default function App() {
  const player = useAudioPlayer(songs[0]);

  const handlePlaySong = (song: any) => {
    // If clicking the same song that's playing, toggle pause
    if (player.currentSong.id === song.id && player.isPlaying) {
      player.togglePlay();
    } else if (player.currentSong.id === song.id && !player.isPlaying) {
      // If same song but paused, resume
      player.togglePlay();
    } else {
      // Different song: switch and play
      player.setCurrentSong(song);
      setTimeout(() => {
        if (player.audioRef.current) {
          player.audioRef.current.play().catch(err => console.error('Play error:', err));
          player.setIsPlaying(true);
        }
      }, 100);
    }
  };

  return (
    <div className="app-grid-layout p-3">
      <SongGrid
        songs={songs}
        currentSongId={player.currentSong.id}
        isPlaying={player.isPlaying}
        onPlay={handlePlaySong}
        onDownload={player.downloadSong}
        audioRef={player.audioRef}
        onTimeUpdate={player.onTimeUpdate}
        onEnded={() => player.setIsPlaying(false)}
      />
    </div>
  );
}