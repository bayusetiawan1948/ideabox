import { ResponseError } from '../error/ResponseError';
import { NoteType } from '../types/NoteType';

export class NoteModel {
  private notes: NoteType[] = [];
  private nextId: number = 1;

  // Create a new note
  create(noteData: NoteType): NoteType {
    const newNote: NoteType = {
      id: this.nextId++,
      author: noteData.author,
      note: noteData.note,
    };

    this.notes.push(newNote);

    return newNote;
  }

  // Read all notes
  read(): NoteType[] {
    return this.notes;
  }

  // Read a note by ID
  load(id: number): NoteType | undefined {
    return this.notes.find((note) => note.id === id);
  }

  // Update a note by ID
  update(noteData: NoteType): NoteType | undefined {
    const id = noteData.id ?? undefined;
    const { author, note } = noteData;

    if (id === undefined) {
      throw new ResponseError(400, 'Id Tidak Boleh Kosong');
    }

    const noteId = this.notes.findIndex((note) => note.id === id);

    if (noteId < 0) {
      throw new ResponseError(400, 'Id tidak ditemukan');
    }

    this.notes[noteId] = {
      ...this.notes[noteId],
      author,
      note,
    };

    return this.notes[noteId];
  }

  // Delete a note by ID
  delete(id: number): boolean {
    const index = this.notes.findIndex((note) => note.id === id);

    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }

    return false;
  }
}
