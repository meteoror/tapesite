import { useEffect, useRef, useState } from "react";
import type { Song } from "./songs";

/**
 * Custom React hook:
 * Encapsulates all audio + playback state so UI stays clean.
 */
export function useAudioPlayer(initialSong: Song) {
  // Ref holds a mutable value that persists across renders
  // Here, it stores the <audio> DOM element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // React state
  const [currentSong, setCurrentSong] = useState<Song>(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100 percentage

  /**
   * Runs whenever `currentSong` changes
   * Equivalent to: componentDidUpdate for this dependency
   */
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause(); // stop previous song
    audioRef.current.load();  // reload <audio> src
    setIsPlaying(false);
    setProgress(0);
  }, [currentSong]);

  /** Play / pause toggle */
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    // State updates trigger re-render
    setIsPlaying(!isPlaying);
  };

  /** Called by <audio onTimeUpdate> */
  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;

    // Convert currentTime → percentage
    setProgress((a.currentTime / a.duration) * 100);
  };

  /** Click-to-seek handler */
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    audioRef.current.currentTime =
      percent * audioRef.current.duration;
  };

  /** Skip forward/backward in seconds */
  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += seconds;
  };

  return {
    audioRef,
    currentSong,
    setCurrentSong,
    isPlaying,
    progress,
    togglePlay,
    onTimeUpdate,
    seek,
    skip,
    setIsPlaying,
  };
}
