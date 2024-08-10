import React from "react";
import book from '@assets/images/book.jpg';
interface props {
    id: number,
    link:string,
    title:string,
    contentSnippet:string
}

const CardComponent: React.FC<props> = (props) =>{



    const url = book
    return (
        <>
            <div style={{backgroundImage: `url(${url})`}} className="kito-card-container flex justify-end">
                <div className="kito-card">
                    <p className="kito-card-title">{props.title}</p>
                    <p className="kito-small-desc">
                        {props.contentSnippet}
                        <a target={"_blank"} href={props.link}>
                            {"  Leer mas...."}
                        </a>
                    </p>

                    <div className="kito-go-corner">
                        <div className="kito-go-arrow">→</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CardComponent