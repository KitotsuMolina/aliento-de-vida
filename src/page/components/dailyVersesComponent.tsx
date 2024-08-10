import { useEffect } from 'react';

const DailyVerses = () => {
    useEffect(() => {
        // Crear un elemento script
        const script = document.createElement('script');
        script.src = 'https://dailyverses.net/get/verse.js?language=nvi';
        script.async = true;
        script.defer = true;

        // Añadir el script al body del documento
        document.body.appendChild(script);

        // Limpiar el script al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };
    }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

    return (
        <div>
            <p style={{margin: '5px'}} className={"kito-subtitle"}>Versiculo Diario</p>
            <div id="dailyVersesWrapper"></div>
        </div>
    );
};

export default DailyVerses;
