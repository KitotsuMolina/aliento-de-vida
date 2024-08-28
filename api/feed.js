import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://www.faithwire.com/feed/');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8');
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}