
import '@/src/page/Page.css'
import '@styles/main.scss'
import BannerComponent from "@page/components/banner/bannerComponent.tsx";
import video5 from "@assets/videos/video5.mp4";
import useWindowSize from "@utils/useWindowSize.tsx";
import MusicPlayer from "@page/components/radio/musicPlayer.tsx";
import {Container} from "@mui/material";
import NewsComponent from "@page/components/news/newsComponent.tsx";
import EventsComponent from "@page/components/events/eventsComponent.tsx";
import AdvertsComponent from "@page/components/adverts/advertsComponent.tsx";
import ImportantComponent from "@page/components/important/importantComponent.tsx";
import {Button} from "@nextui-org/react";
import {WhatsappBoldIcon} from "@icons/outline/icons.tsx";
import Footer from "@page/components/footer/footer.tsx";
import DailyVerses from "@page/components/dailyVersesComponent.tsx";
function Page() {
    const {width} = useWindowSize();
    const videoUrls = [video5];
    const url = "https://a1.asurahosting.com:8410/radio.mp3"



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
                    <DailyVerses />
                </p>
                <ImportantComponent/>
                <p className={"kito-subtitle"}>&nbsp;&nbsp;Noticias</p>
                <hr/>
                <NewsComponent/>
                <p className={"kito-subtitle"}>&nbsp;&nbsp;Eventos</p>
                <hr/>
                <EventsComponent/>
                <p className={"kito-subtitle"}>&nbsp;&nbsp;Anuncios</p>
                <hr/>
                <AdvertsComponent/>
                <p style={{marginTop: '4em'}} className={"kito-subtitle"}>&nbsp;&nbsp;Peticiones de Oracion /
                    Contactanos</p>
                <hr/>
                <p className={"kito-info"}>
                    Envía tus peticiones de oración o Contactanos Directamente por Whatsapp
                    <br/>
                    <a href="https://wa.link/svx1xj" target={'_blank'}>
                        <Button style={{
                            marginTop: '.4em',
                            backgroundColor: 'white',
                            color: 'black',
                            display: 'flex',
                            alignContent: 'center',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            Whatsapp
                            <WhatsappBoldIcon size={30} className={'icon-whatsapp'}></WhatsappBoldIcon>
                        </Button>
                    </a>
                </p>
                <Footer/>
            </Container>

        </div>
  )
}

export default Page
