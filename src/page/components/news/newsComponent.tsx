import React from "react";
import CardComponent from "@page/components/news/cardsComponent.tsx";
import {Container} from "@mui/material";
import book from '@assets/images/book.jpg';


const NewsComponent: React.FC = () =>{

    const url = book
    return (
        <>
            <Container style={{backgroundImage: `url(${url})`}} className={'kito-new'}>
                <div className={'kito-new-over '}>
                    <div className={'kito-new-info'}>
                        <p className={'kito-new-title'}>Noticia Principal</p>
                        <p className={'kito-new-text'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                            eum nihil itaque!
                        </p>
                    </div>
                </div>
            </Container>
            <div className={'kito-news-container'}
            >
                {[...Array(4)].map((_x, i) =>
                    <CardComponent key={i} id={i}/>
                )}
            </div>

        </>
    )
}

export default NewsComponent