// Vercel Serverless Function for Admin Login
export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Get environment variables from Vercel
  const ADMIN_UN = process.env.ADMIN_UN;
  const ADMIN_PW = process.env.ADMIN_PW;

  // Validate credentials
  if (username === ADMIN_UN && password === ADMIN_PW) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
