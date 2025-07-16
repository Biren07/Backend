import { Router } from 'express';
import {
  parseResumeHandler,
  matchJobsHandler,
  chatWithBotHandler
} from '../controllers/ai.controller.js';

const router = Router();

router.post('/parse-resume', parseResumeHandler);
router.post('/match-jobs', matchJobsHandler);
router.post('/chat', chatWithBotHandler);

export default router;
