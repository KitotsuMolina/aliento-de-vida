import React from "react";
import book from '@assets/images/book.jpg';
interface props {
    id: number
}

const CardComponent: React.FC<props> = ({id}) =>{

    const url = book
    return (
        <>
            <div style={{backgroundImage: `url(${url})`}} className="kito-card-container flex justify-end">
                <div className="kito-card">
                    <p className="kito-card-title">Noticia {id}</p>
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