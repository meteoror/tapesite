// import React from 'react';
import { songs } from "./songs";
import { SongList } from "./SongList";
import { Player } from "./Player";
import { useAudioPlayer } from "./useAudioPlayer";
import { Bar } from "./Bar";
import { Alert } from "./Alert";

export default function App() {
  const player = useAudioPlayer(songs[0]);

  return (
    <div className="vh-100 d-flex flex-column p-3">
      {/* Alert */}
      <div className="flex-shrink-0">
        <Alert />
      </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column flex-md-row overflow-hidden gap-3">
        {/* Song List */}
        <div className="flex-md-grow-1 overflow-hidden d-flex flex-column">
          <div className="overflow-auto flex-grow-1">
            <SongList
              songs={songs}
              currentSong={player.currentSong}
              onSelect={player.setCurrentSong}
            />
          </div>
        </div>

        {/* Player */}
        <div className="flex-md-grow-1 overflow-hidden d-flex align-items-center justify-content-center">
          <Player
            song={player.currentSong}
            isPlaying={player.isPlaying}
            togglePlay={player.togglePlay}
            skip={player.skip}
            audioRef={player.audioRef}
            onTimeUpdate={player.onTimeUpdate}
            onEnded={() => player.setIsPlaying(false)}
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex-shrink-0 mt-3">
        <Bar
          progress={player.progress}
          onSeek={player.seek}
        />
      </div>
    </div>
  );
}