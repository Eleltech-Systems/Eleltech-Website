import Message from '../models/message.model.js';

export const createMessage = async (req, res) => {
     const { fullname, email, subject, message } = req.body;
     const newMessage = new Message({ fullname, email, subject, message });
     try {
          await newMessage.save();
          res.status(201).json({ message: 'Message recieved successfully' });
     } catch (error) {
          res.status(500).json(error.message);
     }
};

export const getMessages = async (req, res, next) => {
     try {
          const startIndex = parseInt(req.query.startIndex) || 0;
          const limit = parseInt(req.query.limit) || 9;
          const sortDirection = req.query.sort === 'desc' ? -1 : 1;
          const messages = await Message.find()
               .sort({ createdAt: sortDirection })
               .skip(startIndex)
               .limit(limit);
          const totalMessages = await Message.countDocuments();
          res.status(200).json({ messages, totalMessages });
     } catch (error) {
          res.status(500).json(error.message);
     }
};


export const deleteMessage = async (req, res, next) => {
     try {
          const message = await Message.findById(req.params.id);

          if (!message) {
               return res.status(404).json({ message: 'Message not found' });
          }

          await message.deleteOne();

          res.status(200).json({ message: 'Message has been deleted' });
     } catch (error) {
          next(error); // better error handling
     }
};