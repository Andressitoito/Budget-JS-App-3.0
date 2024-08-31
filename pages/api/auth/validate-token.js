import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export default function handler(req, res) {
 if (req.method === 'POST') {
  const { token } = req.body;

  try {
   const decoded = jwt.verify(token, JWT_SECRET);
   res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
   res.status(401).json({ valid: false });
  }
 } else {
  res.status(405).json({ message: 'Method Not Allowed' });
 }
}
