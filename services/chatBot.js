
import cohere from './cohereClient.js';

export default async function chatbot(message, userType = 'job_seeker') {
  const rolePrefix = userType === 'employer' ? 'Employer' : 'Job Seeker';
  const fullMessage = `${rolePrefix}: ${message}`;

  try {
    const response = await cohere.chat({
      message: fullMessage,
      model: 'command-r-plus',
      temperature: 0.5,
    });

    return response.body.text.trim();
  } catch (err) {
    console.error('Cohere Chat Error:', err);
    throw new Error('AI chatbot service failed.');
  }
}
