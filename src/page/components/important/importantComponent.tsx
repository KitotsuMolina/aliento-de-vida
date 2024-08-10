import React, {useEffect, useState} from "react";
import {Container} from "@mui/material";
import {Button} from "@nextui-org/react";
import {WhatsappBoldIcon, ZoomBoldIcon} from "@icons/outline/icons.tsx";
import {sectionsImplement} from "@utils/implements.tsx";

const ImportantComponent: React.FC = () => {

    type Section = 'home' | 'services' | 'projects';

    const [content, setContent] = useState<string>('Únete a nosotros este próximo sábado para un poderoso tiempo de oración intercesora por las familias cada día.');
    const [currentSection, setCurrentSection] = useState<string>('home');



    useEffect(() => {
        const interval = setInterval(() => {
            changeContentAutomatically();
        }, 10000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, [currentSection]);

    const changeContent = (section: Section) => {
            setCurrentSection(section);
            setContent(sectionsImplement[section]);
    };

    const changeContentAutomatically = () => {
        const sectionKeys: Section[] = ['home', 'services', 'projects'];
        const currentIndex = sectionKeys.indexOf(currentSection as "home" | "services" | "projects");
        const nextIndex = (currentIndex + 1) % sectionKeys.length;
        setCurrentSection(sectionKeys[nextIndex]);
        setContent(sectionsImplement[sectionKeys[nextIndex]]);
    };
    return(
        <>
            <div className="App">
                <div className="nav-container">
                    <nav className="nav-bar">
                        <a className={currentSection === 'home' ? 'active' : ''} onClick={() => changeContent('home')}>Tiempo de intercesión</a>
                        <a className={currentSection === 'services' ? 'active' : ''} onClick={() => changeContent('services')}>Seminario de Vida en la Fe</a>
                        <a className={currentSection === 'projects' ? 'active' : ''} onClick={() => changeContent('projects')}>Discipulado biblico</a>
                    </nav>
                </div>
                <Container maxWidth="sm" id="content-container" className="content-container">
                    <p className={'content-text'}>{content}</p>
                    {currentSection === 'projects'?(
                        <>
                            <a href="https://us02web.zoom.us/j/86311872783?pwd=c1hLVnJINkVvMXhwQW5YbGxCVXAzQT09" target={'_blank'}>
                                <Button className={'content-btn-icon-zoom'}>
                                    <ZoomBoldIcon size={40}></ZoomBoldIcon>
                                </Button>
                            </a>
                            <a href="https://wa.link/svx1xj" target={'_blank'}>
                                <Button className={'content-btn-icon-whatsapp'}>
                                    <WhatsappBoldIcon size={40}></WhatsappBoldIcon>
                                </Button>
                            </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                </Container>
            </div>
        </>
    )
}

export default ImportantComponent;