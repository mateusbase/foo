"use client";

import { useEffect } from "react";
import { Play, Pause, Volume2, Maximize, Volume1, VolumeX } from "lucide-react";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";
import useVideoPlayer from "@/hooks/useVideoPlayer";
import { memo } from "react";
import { CustomVideoPlayerProps } from "./types";

function CustomVideoPlayer({ src }: CustomVideoPlayerProps): JSX.Element {
  const {
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
    debouncedShowControls,
    togglePlay,
    toggleMute,
    handleFullscreen,
    handleSeekMouseDown,
    handleSeekChange,
    handleSeekMouseUp,
    formatTime,
    getVolumeIcon,
    setPlayed,
    setPlayedSeconds,
    setDuration,
    setIsBuffering,
    setSeekValue,
    hasStarted,
    setHasStarted,
    showPlayerControls,
    setPlaying,
    handleVolumeChange,
  } = useVideoPlayer();

  useEffect(() => {
    if (hasMounted && playerRef.current) {
      playerRef.current.seekTo(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMounted]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        if (hasStarted) showPlayerControls();
      }}
      onMouseMove={() => {
        if (hasStarted) debouncedShowControls();
      }}
      className="relative aspect-video w-full max-w-3xl bg-black"
    >
      {hasMounted && (
        <ReactPlayer
          ref={playerRef}
          key={src}
          url={src}
          playing={playing}
          volume={volume}
          muted={isMuted}
          width="100%"
          height="100%"
          controls={false}
          progressInterval={100}
          onProgress={({ played: p, playedSeconds: ps }) => {
            if (!seeking && played < 0.999) {
              setPlayed(p);
              setPlayedSeconds(ps);
            }
          }}
          onDuration={setDuration}
          onReady={() => {
            setIsBuffering(false);

            if (played === 0 && !playing) {
              setPlaying(false);
            }
          }}
          onBuffer={() => {
            if (playing) setIsBuffering(true);
          }}
          onBufferEnd={() => setIsBuffering(false)}
          onEnded={() => {
            togglePlay();
            setPlayed(0);
            setPlayedSeconds(0);
            setSeekValue(0);
            setHasStarted(false);
            playerRef.current?.seekTo(0);
          }}
        />
      )}

      <div
        onClick={togglePlay}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      {isBuffering && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="size-10 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
        </div>
      )}

      {(!playing || played === 0) && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-lg">
            <Play className="size-10 fill-secondary stroke-secondary" />
          </div>
        </button>
      )}

      <AnimatePresence>
        {showControls && hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute inset-x-0 bottom-0 z-20 flex w-full items-center gap-4 bg-black/60 px-4 py-3 text-sm text-white"
          >
            <button type="button" onClick={togglePlay}>
              {playing ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <div className="flex w-full items-center gap-2">
              <input
                ref={progressRef}
                type="range"
                min={0}
                max={1}
                step="any"
                aria-valuetext={`${Math.round(volume * 100)}%`}
                value={seeking ? seekValue : played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
                className="w-full accent-secondary"
              />

              <span className="whitespace-nowrap">
                {formatTime(playedSeconds)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label="Toggle mute"
              >
                {
                  {
                    muted: <VolumeX size={20} />,
                    low: <Volume1 size={20} />,
                    high: <Volume2 size={20} />,
                  }[getVolumeIcon()]
                }
              </button>

              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-secondary"
              />
            </div>

            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Enter fullscreen"
            >
              <Maximize size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(CustomVideoPlayer);
