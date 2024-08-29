import anunciate01 from "@assets/images/anunciate01.jpg";
import anunciate02 from "@assets/images/anunciate02.png";
import anunciate03 from "@assets/images/anunciate03.jpeg";
import anunciate04 from "@assets/images/anunciospublicitariosbachoco.webp";
import libro from '@assets/images/book.jpg'

export const anunciosImplement = [anunciate01,anunciate02,anunciate03,anunciate04];

export const messagesImplement = [
    '¡Bienvenido a Radio Aliento de Vida! Escucha nuestras transmisiones en vivo y mantente informado. ' +
    'Nuestras Reuniones de Oración son transmitidas vía Zoom los días miércoles y viernes a las 3 PM Colombia.',
    'Recuerda que Si puedes creer, al que cree todo le es posible !!! Marcos cap 9:23'
];

type Section = 'home' | 'services' | 'projects';
export const  sectionsImplement: Record<Section, string> = {
    home: 'Únete a nosotros este próximo sábado para un poderoso tiempo de oración intercesora por las familias cada día.',
    services: 'No te pierdas nuestro seminario especial este mes sobre cómo vivir una vida plena en la fe..',
    projects: 'Disipulado Biblico todos los Sabados y Lunes (3pm - 4pm hora Colombiana), para ingresar dentro del horario ingresa al zoom o para agendar fuera del horario usa whatsapp '
};

export const eventosImplement = [
    {
        title: 'Estudio Bíblico Online',
        desc: 'Únete a nosotros cada semana para explorar la palabra de Dios.',
        link: 'https://us02web.zoom.us/j/86311872783?pwd=c1hLVnJINkVvMXhwQW5YbGxCVXAzQT09',
        aplication: 'zoom'
    },
    {
        title: 'Estudio Bíblico Presencial',
        desc: 'Únete a nosotros cada semana para explorar la palabra de Dios.',
        link: 'https://us02web.zoom.us/j/86311872783?pwd=c1hLVnJINkVvMXhwQW5YbGxCVXAzQT09',
        aplication: 'zoom'
    }
]

