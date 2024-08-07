import React from 'react';

import Slider from 'react-slick';
import {Container} from "@mui/material";

import anunciate01 from "@assets/images/anunciate01.jpg";
import anunciate02 from "@assets/images/anunciate02.png";
import anunciate03 from "@assets/images/anunciate03.jpeg";
import {ArrowNextBoldIcon, ArrowPrevBoldIcon} from "@icons/outline/icons.tsx";

const SliderComponent: React.FC = () => {
    var anuncios = [anunciate01,anunciate02,anunciate03];
    const customPaging =  (i:number) => {
        return (
            <a className={'kito-img-slider-preview-a'}>
                <img className={'kito-img-slider-preview'} src={`${anuncios[i]}`} alt={`${i}`}/>
            </a>
        );
    }

    const SamplePrevArrow  = (props:{className?:string,style?:JSON, onClick?: ()=>NonNullable<unknown>}) => {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: "block" }} onClick={onClick}><ArrowPrevBoldIcon size={50} /></div>;
    }

    const  SampleNextArrow = (props:{className?:string,style?:JSON, onClick?: ()=>NonNullable<unknown>}) => {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: "block" }} onClick={onClick}><ArrowNextBoldIcon  size={50}/></div>;
    }

    return (
        <>
            <Container maxWidth="md" >
                <Slider lazyLoad={"progressive"}
                        pauseOnHover={true}
                        dotsClass={"slick-dots slick-thumb"}
                        nextArrow={(<SampleNextArrow></SampleNextArrow>)}
                        prevArrow={(<SamplePrevArrow></SamplePrevArrow>)}
                        customPaging={customPaging} dots={true} infinite={true} autoplay={true} speed={200} slidesToShow={1} slidesToScroll={1}>
                    {anuncios.map((anuncio,index) => (
                        <div>
                            <img className={'kito-img-slider'} key={index} src={anuncio} alt={`slider ${index}`}/>
                        </div>
                    ))}
                </Slider>
            </Container>
        </>
    )
}

export default SliderComponent