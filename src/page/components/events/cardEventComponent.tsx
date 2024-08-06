import React from "react";
import {WhatsappBoldIcon} from "@icons/outline/icons.tsx";


const CardEventComponent: React.FC = () =>{
    return (
        <>
            <div className="kito-card-fit">
                <p className="kito-card-fit-title">Evento</p>
                <p className="kito-small-desc-fit">
                    Descripcion del evento
                </p>
                <div className={"kito-card-icon-fit"}>
                    <p className={'kito-text-card-icon'}>Mas información aquí!!!</p>
                    <a className={'kito-link-card'} href={"https://wa.me/+543007764995?text="+"mas info del Evento"} target="_blank">
                        <WhatsappBoldIcon size={100} className={"kito-card-icon-whatsapp"} />
                    </a>
                </div>
                <div className="kito-go-corner-fit">
                    <div className="kito-go-arrow-fit">→</div>
                </div>
            </div>
        </>
    )
}

export default CardEventComponent;