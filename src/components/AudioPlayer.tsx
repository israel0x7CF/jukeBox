"use client";

import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import ReactHowler from "react-howler";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useAudioLib } from "@/context/AudioLibProvider";

interface AudioPlayerProps {
  src?: string;
  title: string;
  artist: string;
}

export default function AudioPlayer({ title, artist }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<ReactHowler | null>(null);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioFormat, setAudioFormat] = useState("");
  const { audioLib } = useAudioLib();
  useEffect(() => {
    if (audioLib) {
      audioRef.current = audioLib;
    }
  }, [audioLib]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newValue: number[]) => {
    const newVolume = newValue[0];
    setVolume(newVolume);
  };

  const handleSeek = (newValue: number[]) => {
    const newTime = newValue[0];
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.seek(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        const format = file.name.split(".").pop() as string;
        console.log(objectUrl);
        setAudioFormat(format);
        setAudioSrc(objectUrl);
      }
    }
  };
  const handleTrackLoad = () => {
    console.log("TRACK LOADED");
    const howler = audioRef.current ? audioRef.current : null;
    if (howler && howler.duration()) {
      setDuration(howler.duration());
    }
  };
  return (
    <div className="mt-12 w-full max-w-md p-4 bg-background rounded-lg shadow-lg">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {audioSrc && (
        <ReactHowler
          src={audioSrc}
          playing={isPlaying}
          volume={volume}
          ref={audioRef}
          format={[audioFormat]}
          onLoad={handleTrackLoad}
        />
      )}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Button
          variant="ghost"
          size="icon"
          //   onClick={() =>
          //     audioRef.current && (audioRef.current.currentTime -= 10)
          //   }
        >
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={togglePlay}>
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          //   onClick={() =>
          //     audioRef.current && (audioRef.current.howler.volume(10) += 10)
          //   }
        >
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-2">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-4 ">
        {volume === 0 ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2
            className="h-4 w-4 cursor-pointer    "
            onClick={() => setVolume(0)}
          />
        )}
        <Slider
          value={[volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
}
