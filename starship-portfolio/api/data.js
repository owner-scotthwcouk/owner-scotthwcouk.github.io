// API route to fetch portfolio data from Redis
import { createClient } from 'redis';

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = createClient({
    url: process.env.STORAGE_URL
  });

  try {
    await client.connect();
    
    // Fetch data from Redis
    const data = await client.get('portfolio:data');
    
    await client.disconnect();
    
    if (data) {
      // Parse and return the data
      const parsedData = JSON.parse(data);
      
      // Set cache headers for better performance
      res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
      
      return res.status(200).json(parsedData);
    } else {
      return res.status(404).json({ error: 'Portfolio data not found' });
    }
  } catch (error) {
    console.error('Redis error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch portfolio data',
      message: error.message 
    });
  }
}
