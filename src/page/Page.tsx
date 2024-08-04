
import '@/src/page/Page.css'
import '@styles/main.scss'
import BannerComponent from "@page/components/banner/bannerComponent.tsx";
import video1 from "@assets/videos/video1.mp4";
import video2 from "@assets/videos/video2.mp4";
import useWindowSize from "@utils/useWindowSize.tsx";
import MusicPlayer from "@page/components/radio/musicPlayer.tsx";
import {Container} from "@mui/material";
function Page() {
    const {width} = useWindowSize();
    const videoUrls = [video1, video2];
    const url = "https://a1.asurahosting.com:8410/radio.mp3"

    const versic = {
        title: `Isaías 41: 10(NVI)`,
        text: `Así que no temas, porque yo estoy contigo;
        no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra
        victoriosa.`
    }

  return (
        <div className={"kitotsu-main"}>
            <MusicPlayer type={"podcast"} url={url} controls={false}/>
            <BannerComponent
                videoUrls={videoUrls}
                width={`${width}px`}
                height="360px"
                interval={10} // Change video every 10 seconds
            />
            <Container maxWidth="lg" className={"kito-content"}>
                <p className={"kito-info"}>
                    {versic.title}
                    <br/>
                    {versic.text}
                </p>
                <br/>
                <p className={"kito-subtitle"}>Noticias</p>
                <hr/>
            </Container>

        </div>
  )
}

export default Page
