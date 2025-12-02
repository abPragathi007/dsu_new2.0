import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('GEMINI_API_KEY missing. Server will use mock responses for /api/chat.');
}

// Simple rule-based mock reply generator for local testing.
function generateMockReply(message) {
  const text = message.toLowerCase();
  if (text.includes('admission')) {
    return 'Admissions are open for 2025. Please visit the Admissions page or contact admissions@dsu.edu for application details.';
  }
  if (text.includes('location') || text.includes('where') || text.includes('campus')) {
    return 'Dayananda Sagar University is located in Bangalore, India.';
  }
  if (text.includes('program') || text.includes('course') || text.includes('engineering')) {
    return 'DSU offers programs across Engineering, Medical, Management, Arts, and Law. See the Academics section for details.';
  }
  return "I'm Sagar, DSU's admissions assistant. How can I help you today?";
}

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'message is required' });

  // If an API key is configured, you can wire up a real GenAI call here.
  // For local testing we return a deterministic mock reply.
  try {
    const reply = generateMockReply(message);
    res.json({ reply });
  } catch (error) {
    console.error('Mock reply error:', error);
    res.status(500).json({ error: 'Server error generating reply' });
  }
});

app.listen(PORT, () => {
  console.log(`Server (mock) listening on http://localhost:${PORT}`);
});
