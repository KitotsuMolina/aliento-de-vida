import React from "react";
import CardEventComponent from "@page/components/events/cardEventComponent.tsx";
import {eventosImplement} from "@utils/implements.tsx";

const EventsComponent: React.FC = () =>{


    return (
        <>
            {eventosImplement.map((evento, i) =>
                <CardEventComponent key={i} title={evento.title} desc={evento.desc} link={evento.link} aplication={evento.aplication}/>
            )}

        </>
    )
}

export default EventsComponent;