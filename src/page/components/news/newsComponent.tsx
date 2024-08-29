/*


const NewsComponent: React.FC = () =>{

    const url = book
    return (

    )
}

export default NewsComponent*/

import React, { useState, useEffect } from 'react';
import CardComponent from "@page/components/news/cardsComponent.tsx";
import {Container} from "@mui/material";
import book from '@assets/images/book.jpg';
import Parser from 'rss-parser';
import axios from 'axios';

const RSSFeedUrl = 'https://aliento-de-vida.vercel.app/api/feed'; // Reemplaza con la URL del RSS feed real
interface ArticleProps {
    creator: string;
    title: string;
    link: string;
    pubDate: string;
    content: string;
    contentSnippet: string;
    guid: string;
    categories: string[];
    isoDate: string;
    imageUrl: string | null;
}

const NewsComponent: React.FC = () =>{
    const [articles, setArticles] = useState<ArticleProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const url = book
    const DEEPL_API_KEY = 'bf16ec96-cf81-4f68-98a0-03ccad3c6db1:fx'; // Reemplaza con tu clave de API de DeepL
    const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate';
    const translateText = async (text:string) => {
        try {
            const response = await axios.post(DEEPL_API_URL, null, {
                params: {
                    auth_key: DEEPL_API_KEY,
                    text: text,
                    target_lang: 'ES',
                },
            });
            return response.data.translations[0].text;
        } catch (err) {
            console.error('Error translating text', err);
            return text; // Retorna el texto original en caso de error
        }
    };
    const extractImageUrl = (htmlContent:string) => {
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        const matches = imgRegex.exec(htmlContent);
        return matches ? matches[1] : null; // Devuelve la URL de la primera imagen encontrada
    };

    const formatUrlForGoogleTranslate = (url:string) => {
        // Extraer el dominio y la ruta del URL original
        const urlObj = new URL(url);
        const domain = urlObj.hostname.replace(/\./g, '-');
        const protocol = urlObj.protocol;
        const path = urlObj.pathname;

        // Formar la nueva URL con Google Translate
        const newUrl = `${protocol}//${domain}.translate.goog${path}?_x_tr_sl=pt&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp`;

        return newUrl;
    }
    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Obtener el feed RSS como texto
                const response = await axios.get(RSSFeedUrl, {
                    responseType: 'text',
                });
                const rssContent = response.data;

                // Limpiar contenido no deseado
                const cleanedRssContent = rssContent.replace(/^\s*[\uFEFF\xEF\xBB\xBF]*/, ''); // Remover BOM y espacios en blanco

                // Analizar el contenido limpio
                const parser = new Parser();
                const feed = await parser.parseString(cleanedRssContent);

                const translatedArticles = await Promise.all(
                    feed.items.map(async (article) => {
                        const translatedTitle = await translateText(article.title?article.title:'');
                        const translatedSnippet = await translateText(article.contentSnippet?article.contentSnippet:'');
                        const imageUrl = extractImageUrl(article.content || article.description || '');
                        const formateLink = formatUrlForGoogleTranslate(article.link?article.link:'');
                        return { ...article, title: translatedTitle, contentSnippet: translatedSnippet, imageUrl, link:formateLink };
                    })
                );


                setArticles(translatedArticles as ArticleProps[]);
                console.log(translatedArticles);
            } catch (err) {
                console.error('Error fetching news', err);
                setError("Error fetching news");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>

            <Container style={{   display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'}} className={'kito-new'}>
                <CardComponent id={999} contentSnippet={articles[0].contentSnippet} link={articles[0].link} title={articles[0].title}/>
            </Container>
            <div className={'kito-news-container'}
            >
                {articles.map((article:ArticleProps, i) =>
                    i === 0 ?<></>:<CardComponent key={i} id={i} contentSnippet={article.contentSnippet} link={article.link} title={article.title}/>
                )}
            </div>
        </>
    );
};

export default NewsComponent;
