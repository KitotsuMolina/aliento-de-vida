import React, { useRef, useState, useEffect } from "react";
import {Button} from "@nextui-org/react";
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
        box-shadow: 0 0 10px 6px rgba(2,0,36,0.2), 0 0 10px 6px rgba(9,9,121,0.2);
    }
    25% {
        box-shadow: 0 0 10px 6px rgba(9,9,121,0.2), 0 0 10px 6px rgba(0,212,255,0.2);
    }
    50% {
        box-shadow: 0 0 10px 6px rgba(0,212,255,0.2), 0 0 10px 6px rgba(2,0,36,0.2);
    }
    75% {
        box-shadow: 0 0 10px 6px rgba(2,0,36,0.2), 0 0 10px 6px rgba(9,9,121,0.2);
    }
    100% {
        box-shadow: 0 0 10px 6px rgba(9,9,121,0.2), 0 0 10px 6px rgba(2,0,36,0.2);
    }
`;


/*const backgroundAnimation = keyframes`
    0% {
        color: rgba(2,0,36,1);
    }
    20% {
        color: rgba(9,9,121,1);
    }
    40% {
        color: rgba(0,212,255,1);
    }
    60% {
        color: rgba(2,0,36,1);
    }
    80% {
        color: rgba(9,9,121,1);
    }
    100% {
        color: rgba(0,212,255,1);
    }
`;*/

const waveAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(0, 128, 255, 0.7), 0 0 0 10px rgba(0, 128, 255, 0.1), 0 0 0 20px rgba(0, 128, 255, 0.1), 0 0 0 30px rgba(0, 128, 255, 0.1);
    }
    50% {
        box-shadow: 0 0 0 10px rgba(0, 128, 255, 0), 0 0 0 20px rgba(0, 128, 255, 0.7), 0 0 0 30px rgba(0, 128, 255, 0.1), 0 0 0 40px rgba(0, 128, 255, 0.1);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 128, 255, 0.7), 0 0 0 10px rgba(0, 128, 255, 0.1), 0 0 0 20px rgba(0, 128, 255, 0.1), 0 0 0 30px rgba(0, 128, 255, 0.1);
    }
`;

// Animación de Escalado del Botón
const scaleAnimation = keyframes`
    0%, 100% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(1);
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
            sx={isPlaying?{
                //background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.7455357142857143) 35%, rgba(0,212,255,0.639093137254902) 100%)',
                animation: `${boxShadowAnimation} 4s linear infinite`,

            }:{}}
        >
            <audio ref={audioRef} src={url}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

                {controls?
                    <>
                        <Button disabled={controls} onClick={handlePrevious}>
                            <PreviousBoldIcon size={24} />
                        </Button>
                        <Button   className={'kito-btn-player'}   onClick={handlePlayPause}>
                            {isPlaying ? <PauseCircleBoldIcon  size={50} /> : <PlayBoldIcon  size={50} />}
                        </Button>
                        <Button disabled={controls}  onClick={handleNext}>
                            <NextBoldIcon size={24} />
                        </Button>
                        <Button disabled={controls}  onClick={handleShuffle}>
                            <ShuffleBoldIcon size={24} />
                        </Button>
                        <Button disabled={controls}  onClick={handleRepeat}>
                            <RepeatOneBoldIcon size={24} />
                        </Button>
                    </>
                    :
                    <>
                        <Box sx={!isPlaying?{
                            animation: `${waveAnimation} 2s infinite, ${scaleAnimation} 2s infinite`,
                        }:{}}  className={'kito-btn-player'}  onClick={handlePlayPause}>
                            {isPlaying ? <PauseCircleBoldIcon size={50} /> : <PlayBoldIcon size={50} />}
                        </Box>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '60%',
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