// services/ai/jobMatcher.js
import cohere from './cohereClient.js'; // Make sure this exists

export default async function matchJobs(profile) {
  const prompt = `Given this candidate profile:\n${JSON.stringify(profile, null, 2)}\n\nSuggest 3 relevant job titles and explain why they are a good match.`;

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt,
      max_tokens: 500,
      temperature: 0.4,
    });

    return response.body.generations[0].text.trim();
  } catch (err) {
    console.error('Cohere Job Matcher Error:', err);
    throw new Error('AI job matcher failed.');
  }
}
