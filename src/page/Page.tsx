
import '@/src/page/Page.css'
import '@styles/main.scss'
import BannerComponent from "@page/components/banner/bannerComponent.tsx";
import video5 from "@assets/videos/video5.mp4";
import useWindowSize from "@utils/useWindowSize.tsx";
import MusicPlayer from "@page/components/radio/musicPlayer.tsx";
import {Container} from "@mui/material";
import NewsComponent from "@page/components/news/newsComponent.tsx";
import EventsComponent from "@page/components/events/eventsComponent.tsx";
function Page() {
    const {width} = useWindowSize();
    const videoUrls = [video5];
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
                <p className={"kito-subtitle"}>&nbsp;&nbsp;Noticias</p>
                <hr/>
                <NewsComponent/>
                <p className={"kito-subtitle"}>&nbsp;&nbsp;Eventos</p>
                <hr/>
                <EventsComponent />
            </Container>

        </div>
  )
}

export default Page
