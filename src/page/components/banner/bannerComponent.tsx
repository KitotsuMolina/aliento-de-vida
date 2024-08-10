import React from 'react';
import {Container} from "@mui/material";
import MarqueeComponent from "@page/components/marquee/marqueeComponent.tsx";
import {messagesImplement} from "@utils/implements.tsx";
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
                <MarqueeComponent className={"kito-banner-marquee"} messages={messagesImplement} delay={delay} speed={speed}/>
            </Container>
        </div>
    );
};

export default BannerComponent;