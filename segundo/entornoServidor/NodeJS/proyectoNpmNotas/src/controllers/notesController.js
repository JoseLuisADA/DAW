import * as fs from 'fs';
import path from 'path';
import Note from '../models/noteModel.js';

const notesController = {
  createNote: (title, content) => {
    const note = new Note(title, content);
    fs.writeFileSync(`${title}.note`, note.content);
  },

  readNote: (title) => {
    const notesDirectory = path.join('./notes');
    const filePath = path.join(notesDirectory, `${title}.note`);
    return fs.readFileSync(filePath, 'utf-8');
  },

  updateNote: (title, newContent) => {
    fs.writeFileSync(`${title}.note`, newContent);
  },

  deleteNote: (title) => {
    fs.unlinkSync(`${title}.note`);
  },

  listNotes: () => {
    const directoryPath = path.resolve('./notes');
    try {
      const files = fs.readdirSync(directoryPath);
      const notes = files.filter((file) => file.endsWith('.note'));
      return notes.length > 0 ? notes : 'No hay notas creadas';
    } catch (error) {
      console.log(error);
      return 'Ha ocurrido un error';
    }
  },
};

export default notesController;
