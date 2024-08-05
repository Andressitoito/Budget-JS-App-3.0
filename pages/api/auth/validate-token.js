import jwt from 'jsonwebtoken'; // or any other library you're using for token handling

const secret = process.env.JWT_SECRET; // Ensure this is set in your environment variables

export default function handler(req, res) {
 const { token } = req.body;

 if (!token) {
  return res.status(400).json({ valid: false, message: "Token is required" });
 }

 try {
  jwt.verify(token, secret);
  return res.status(200).json({ valid: true });
 } catch (error) {
  return res.status(401).json({ valid: false, message: "Invalid token" });
 }
}