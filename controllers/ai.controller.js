import parseResume from '../services/resumParser.js';
import matchJobs from '../services/jobMatcher.js';
import chatbot from '../services/chatBot.js';

export async function parseResumeHandler(req, res) {
  try {
    const parsed = await parseResume(req.body.resumeText);
    res.json({ parsed });
  } catch (err) {
    console.error('Resume parsing failed:', err); 
    res.status(500).json({ error: 'AI resume parser failed.', details: err.message });
  }
}


export async function matchJobsHandler(req, res) {
  try {
    const matched = await matchJobs(req.body.candidateProfile);
    res.json(matched);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export async function chatWithBotHandler(req, res) {
  try {
    const reply = await chatbot(req.body.message, req.body.userType);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
