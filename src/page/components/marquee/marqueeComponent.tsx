import React, { useRef } from 'react';
import { Box, keyframes } from '@mui/material';

interface MarqueeProps {
    messages: string[];
    delay: number; // delay in seconds between messages
    speed: number; // speed in pixels per second
    className:string;
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ messages, delay, speed,className }) => {
    const containerRef = useRef<HTMLDivElement>(null);


    const animation = keyframes`
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    `;

    return (
        <Box
            className={className}
            sx={{

                overflow: 'hidden',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                width: '100%',
                background: 'rgba(0,0,0,0.71)',
                border: 'none',
                color: 'white',
                padding: '10px 0',
                position: 'relative',
                height: '50px', // Ajusta la altura según sea necesario
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    animation: `${animation} ${speed}s linear infinite`,
                }}
            >
                {messages.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'inline-block',
                            paddingRight: `${delay}em`, // Ajusta el espacio entre los mensajes si es necesario
                        }}
                    >
                        {message}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default MarqueeComponent;
