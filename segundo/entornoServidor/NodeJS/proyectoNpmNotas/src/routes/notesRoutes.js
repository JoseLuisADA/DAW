import express from 'express';
import notesController from '../controllers/notesController.js';

const router = express.Router();



router.get('/:title', (req, res) => {
  console.log('Entrando en GET /notes/:title');
    const content = notesController.readNote(req.params.title);
    res.status(200).send(content);
});

router.post('/notes', (req, res) => {
  console.log('Entrando en POST /notes');
  notesController.createNote(req.body.title, req.body.content);
  res.status(201).send('Note created');
});

router.put('/:title', (req, res) => {
  console.log('Entrando en PUT /notes/:title');
  notesController.updateNote(req.params.title, req.body.content);
  res.status(200).send('Note updated');
});

router.delete('/:title', (req, res) => {
  console.log('Entrando en DELETE /notes/:title');
  notesController.deleteNote(req.params.title);
  res.status(200).send('Note deleted');
});

export default router;
