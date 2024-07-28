import React, { useRef, useState, useEffect } from "react";
import {Button, Card } from "@nextui-org/react";
import { Box, keyframes } from '@mui/system';
import {
    NextBoldIcon,
    PauseCircleBoldIcon,
    PreviousBoldIcon,
    RepeatOneBoldIcon,
    ShuffleBoldIcon,
    PlayBoldIcon
} from "@icons/outline/icons.tsx";

export interface MusicPlayerProps  {
    type: string;
    url:string;
    controls:boolean;
}
const boxShadowAnimation = keyframes`
    0% {
        box-shadow: 0 0 15px 8px rgba(2,0,36,0.5), 0 0 20px 15px rgba(9,9,121,0.5);
    }
    25% {
        box-shadow: 0 0 15px 8px rgba(9,9,121,0.5), 0 0 20px 15px rgba(0,212,255,0.5);
    }
    50% {
        box-shadow: 0 0 15px 8px rgba(0,212,255,0.5), 0 0 20px 15px rgba(2,0,36,0.5);
    }
    75% {
        box-shadow: 0 0 15px 8px rgba(2,0,36,0.5), 0 0 20px 15px rgba(9,9,121,0.5);
    }
    100% {
        box-shadow: 0 0 15px 8px rgba(9,9,121,0.5), 0 0 20px 15px rgba(0,212,255,0.5);
    }
`;

const MusicPlayer: React.FC<MusicPlayerProps> = ({type,url, controls}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNext = () => {
        // Logic for next track
    };

    const handlePrevious = () => {
        // Logic for previous track
    };

    const handleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const handleRepeat = () => {
        setIsRepeat(!isRepeat);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    return (
        <Box className={"kito-reproductor"}
            sx={{
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7455357142857143) 35%, rgba(0,212,255,0.639093137254902) 100%)',
                margin: '100px auto',
                animation: `${boxShadowAnimation} 4s linear infinite`,
                borderRadius: '8px', // Optional: Add rounded corners
            }}
        >
            <audio ref={audioRef} src={url}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

                {controls?
                    <>
                        <Button disabled={controls} auto flat onClick={handlePrevious}>
                            <PreviousBoldIcon size={24} />
                        </Button>
                        <Button auto flat onClick={handlePlayPause}>
                            {isPlaying ? <PauseCircleBoldIcon size={24} /> : <PlayBoldIcon size={24} />}
                        </Button>
                        <Button auto disabled={controls} flat onClick={handleNext}>
                            <NextBoldIcon size={24} />
                        </Button>
                        <Button auto disabled={controls} flat onClick={handleShuffle}>
                            <ShuffleBoldIcon size={24} />
                        </Button>
                        <Button auto disabled={controls} flat onClick={handleRepeat}>
                            <RepeatOneBoldIcon size={24} />
                        </Button>
                    </>
                    :
                    <>
                        <Button auto flat onClick={handlePlayPause}>
                            {isPlaying ? <PauseCircleBoldIcon size={24} /> : <PlayBoldIcon size={24} />}
                        </Button>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '10px'
                        }}>
                            <span>{formatTime(currentTime)}</span>
                            <input
                                type="range"
                                min="0"
                                max={type == 'podcast' ? currentTime : duration}
                                value={currentTime}
                                onChange={handleTimeChange}
                                style={{flexGrow: 1, margin: '0 10px'}}
                            />
                            <span>{formatTime(type == 'podcast' ? currentTime : duration)}</span>
                        </div>
                    </>
                }
            </div>
            {controls ? <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '10px'
            }}>
                <span>{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min="0"
                    max={type == 'podcast' ? currentTime : duration}
                    value={currentTime}
                    onChange={handleTimeChange}
                    style={{flexGrow: 1, margin: '0 10px'}}
                />
                <span>{formatTime(type == 'podcast' ? currentTime : duration)}</span>
            </div>:<></>}

        </Box>
    );
};

export default MusicPlayer;