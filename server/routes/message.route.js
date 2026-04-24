import express from 'express';
import { createMessage, deleteMessage, getMessages } from '../controller/message.controller.js';

const router = express.Router();

router.post("/create", createMessage)
router.get("/getmessages", getMessages);
router.delete("/deleteMessage/:id", deleteMessage);

export default router;