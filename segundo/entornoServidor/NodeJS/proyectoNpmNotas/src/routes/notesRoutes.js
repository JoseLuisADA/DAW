import express from 'express';
import notesController from '../controllers/notesController.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.get('/notes', (req, res) => {
  
});

router.get('/notes/:title', (req, res) => {
  console.log('Entrando en GET /notes/:title');
  try {
    const content = notesController.readNote(req.params.title);
    res.status(200).send(content);
  } catch (error) {
    res.status(404).send('No existe la nota buscada');
  }
});

router.post('/notes', (req, res) => {
  console.log('Entrando en POST /notes');
  notesController.createNote(req.body.title, req.body.content);
  res.status(201).send('Note created');
});

router.put('/notes/:title', (req, res) => {
  console.log('Entrando en PUT /notes/:title');
  notesController.updateNote(req.params.title, req.body.content);
  res.status(200).send('Note updated');
});

router.delete('/notes/:title', (req, res) => {
  console.log('Entrando en DELETE /notes/:title');
  notesController.deleteNote(req.params.title);
  res.status(200).send('Note deleted');
});

export default router;
