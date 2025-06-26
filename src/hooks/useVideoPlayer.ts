/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import { MutableRefObject } from "react";
import ReactPlayer from "react-player";

type VolumeIcon = "muted" | "low" | "high";

type UseVideoPlayerProps = {
  playerRef: MutableRefObject<ReactPlayer | null>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  progressRef: MutableRefObject<HTMLInputElement | null>;
  playing: boolean;
  duration: number;
  volume: number;
  isBuffering: boolean;
  isMuted: boolean;
  seeking: boolean;
  played: number;
  playedSeconds: number;
  seekValue: number;
  hasMounted: boolean;
  showControls: boolean;
  hasStarted: boolean;
  debouncedShowControls: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  handleFullscreen: () => void;
  handleSeekMouseDown: () => void;
  handleSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSeekMouseUp: () => void;
  formatTime: (secs: number) => string;
  getVolumeIcon: () => VolumeIcon;
  showPlayerControls: () => void;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setIsBuffering: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayed: React.Dispatch<React.SetStateAction<number>>;
  setPlayedSeconds: React.Dispatch<React.SetStateAction<number>>;
  setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setSeekValue: React.Dispatch<React.SetStateAction<number>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useVideoPlayer = (): UseVideoPlayerProps => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(volume);
  const [seeking, setSeeking] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hideControlsTimeout, setHideControlsTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }

  const debouncedShowControls = useRef(
    debounce(() => {
      setShowControls(true);

      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }

      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 5000);

      setHideControlsTimeout(timeout);
    }, 150),
  ).current;

  useEffect(() => {
    if (!seeking) setSeekValue(played);
  }, [played, seeking]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const showPlayerControls = (): void => {
    setShowControls(true);

    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
    }

    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    setHideControlsTimeout(timeout);
  };

  useEffect(() => {
    if (hasStarted && playing) {
      showPlayerControls();
    } else if (hasStarted) {
      setShowControls(true);
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    } else {
      setShowControls(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, hasStarted]);

  const togglePlay = useCallback((): void => {
    if (!hasStarted) setHasStarted(true);

    if (!playing && played >= 0.999) {
      setPlayed(0);
      setPlayedSeconds(0);
      setSeekValue(0);
      playerRef.current?.seekTo(0);
    }

    setPlaying((prev) => !prev);
  }, [hasStarted, played]);

  const toggleMute = useCallback((): void => {
    if (isMuted || volume === 0) {
      setVolume(lastVolume > 0 ? lastVolume : 0.8);
      setIsMuted(false);
    } else {
      setLastVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  }, [isMuted, volume, lastVolume]);

  const handleFullscreen = useCallback((): void => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }, [containerRef]);

  useEffect(() => {
    return () => {
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }
    };
  }, [hideControlsTimeout]);

  const handleSeekMouseDown = (): void => setSeeking(true);

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSeekValue(parseFloat(e.target.value));

  const handleSeekMouseUp = (): void => {
    setSeeking(false);
    if (seekValue >= 0.999) {
      setPlaying(false);
      setPlayed(0);
      setPlayedSeconds(0);
      setSeekValue(0);
      setHasStarted(false);
      setIsBuffering(false);

      playerRef.current?.seekTo(0);
      playerRef.current?.getInternalPlayer()?.pause();

      setShowControls(false);
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    } else {
      playerRef.current?.seekTo(seekValue);
    }
  };

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(parseFloat(e.target.value));
    },
    [setVolume],
  );

  const getVolumeIcon = (): VolumeIcon => {
    if (isMuted || volume === 0) return "muted";
    if (volume <= 0.5) return "low";
    return "high";
  };

  const formatTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return {
    playerRef,
    containerRef,
    progressRef,
    playing,
    duration,
    volume,
    isBuffering,
    isMuted,
    seeking,
    played,
    playedSeconds,
    seekValue,
    hasMounted,
    showControls,
    hasStarted,
    debouncedShowControls,
    togglePlay,
    toggleMute,
    handleFullscreen,
    handleSeekMouseDown,
    handleSeekChange,
    handleSeekMouseUp,
    formatTime,
    getVolumeIcon,
    showPlayerControls,
    setPlaying,
    setDuration,
    setIsBuffering,
    setPlayed,
    setPlayedSeconds,
    setVolume,
    setHasStarted,
    setSeekValue,
    handleVolumeChange,
  };
};

export default useVideoPlayer;
