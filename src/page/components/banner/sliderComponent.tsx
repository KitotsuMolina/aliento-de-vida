import React from 'react';

import Slider from 'react-slick';
import {Container} from "@mui/material";


import {ArrowNextBoldIcon, ArrowPrevBoldIcon} from "@icons/outline/icons.tsx";
import {anunciosImplement} from "@utils/implements.tsx";

const SliderComponent: React.FC = () => {

    const customPaging =  (i:number) => {
        return (
            <a className={'kito-img-slider-preview-a'}>
                <img className={'kito-img-slider-preview'} src={`${anunciosImplement[i]}`} alt={`${i}`}/>
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
                    {anunciosImplement.map((anuncio,index) => (
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