import React from "react";
import {WhatsappBoldIcon, ZoomBoldIcon} from "@icons/outline/icons.tsx";

interface props {
    title: string,
    desc: string,
    link: string,
    aplication: string
}

const CardEventComponent: React.FC<props> = (props:props) =>{
    return (
        <>
            <div className="kito-card-fit">
                <p className="kito-card-fit-title">{props.title}</p>
                <p className="kito-small-desc-fit">
                    {props.desc}
                </p>
                <div className={"kito-card-icon-fit"}>
                    {props.aplication === 'whatsapp'?(
                            <>
                                <p className={'kito-text-card-icon'}>Mas información aquí!!!</p>
                                <a className={'kito-link-card'}
                                   href={props.link} target="_blank">
                                    <WhatsappBoldIcon size={100} className={"kito-card-icon-whatsapp"}/>
                                </a>
                            </>
                        ) :
                        (
                            <></>
                        )}
                    {props.aplication === 'zoom'?(
                        <>
                            <p className={'kito-text-card-icon'}>Ingresa aquí!!!</p>
                            <a className={'kito-link-card'}
                               href={props.link} target="_blank">
                                <ZoomBoldIcon size={100} className={"kito-card-icon-zoom"}/>
                            </a>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                </div>
                <div className="kito-go-corner-fit">
                    <div className="kito-go-arrow-fit">→</div>
                </div>
            </div>
        </>
    )
}

export default CardEventComponent;