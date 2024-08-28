import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://www.faithwire.com/feed/');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}