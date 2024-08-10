import React from "react";
import CardEventComponent from "@page/components/events/cardEventComponent.tsx";

const EventsComponent: React.FC = () =>{
    const eventos = [
        {
            title: 'Estudio Bíblico Online',
            desc: 'Únete a nosotros cada semana para explorar la palabra de Dios.',
            link: 'https://us02web.zoom.us/j/86311872783?pwd=c1hLVnJINkVvMXhwQW5YbGxCVXAzQT09',
            aplication: 'zoom'
        }
    ]

    return (
        <>
            {eventos.map((evento, i) =>
                <CardEventComponent key={i} title={evento.title} desc={evento.desc} link={evento.link} aplication={evento.aplication}/>
            )}

        </>
    )
}

export default EventsComponent;