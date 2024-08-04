import React from 'react';
import {Container} from "@mui/material";
import MarqueeComponent from "@page/components/marquee/marqueeComponent.tsx";
interface VideoPlayerProps {
    videoUrls: string[];
    width: string;
    height: string;
    interval?: number; // interval in seconds
}

const BannerComponent: React.FC<VideoPlayerProps> = ({ videoUrls, width, height }) => {
    /*const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    useEffect(() => {
        const changeVideo = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
        };

        const intervalId = setInterval(changeVideo, interval * 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [videoUrls, interval]);*/

    const messages = [
        'Mensaje 1: Este es un mensaje corto',
        '¡Bienvenido a Radio Aliento de Vida! Escucha nuestras transmisiones en vivo y mantente informado. Nuestras Reuniones de Oración son transmitidas vía Zoom los días miércoles y viernes a las 3 PM Colombia.',
        'Mensaje 3: Otro mensaje para mostrar en la barra',
    ];
    const delay = 5; // Ajusta el delay en segundos entre mensajes
    const speed = 40; // Ajusta la velocidad en pixels por segundo

    return (
        <div className={"kito-banner"} style={{ width, height }}>
            <video
                width={width}
                height={height}
                autoPlay
                muted
                loop
                playsInline={true}
                src={videoUrls[0]}
            />
            <Container className={"kito-banner-over flex justify-center justify-items-center"}>
                <p className={"kito-banner-text"}>Aliento de Vida</p>
                <MarqueeComponent className={"kito-banner-marquee"} messages={messages} delay={delay} speed={speed}/>
            </Container>
        </div>
    );
};

export default BannerComponent;