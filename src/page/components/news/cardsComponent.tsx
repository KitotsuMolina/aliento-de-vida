import React from "react";
import book from '@assets/images/book.jpg';
interface props {
    x: number
}

const CardComponent: React.FC = ({x}:props) =>{
    return (
        <>
            <div style={{backgroundImage: `url(${book})`}} className="kito-card-container flex justify-end">
                <div className="kito-card">
                    <p className="kito-card-title">Noticia {x}</p>
                    <p className="kito-small-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                        eum nihil itaque!
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