import React from "react";
import CardEventComponent from "@page/components/events/cardEventComponent.tsx";

const EventsComponent: React.FC = () =>{
    return (
        <>
            {[...Array(2)].map((_x, i) =>
                <CardEventComponent key={i}/>
            )}

        </>
    )
}

export default EventsComponent;