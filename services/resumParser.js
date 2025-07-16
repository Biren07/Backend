// services/ai/parseResume.js
import cohere from './cohereClient.js';

export default async function parseResume(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('Invalid resume text');
  }

  const prompt = `
Extract the following from the resume:
- Name
- Skills (as an array)
- Experience (list with job title, company, duration)
- Education (list with degree, institution, year)
- Certifications (if any)

Return the result in valid JSON.

Resume:
${text}
`;

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt,
      maxTokens: 500,
      temperature: 0.3,
    });

    const result = response.generations[0].text.trim();

    try {
      return JSON.parse(result);
    } catch {
      return { raw: result }; // fallback if not valid JSON
    }
  } catch (err) {
    console.error('Cohere resume parsing failed:', err);
    throw new Error('AI resume parser failed.');
  }
}
