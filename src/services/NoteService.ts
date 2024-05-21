import { NoteModel } from '../models/NoteModel';
import { NoteType } from '../types/NoteType';

export class NoteService {
  private noteModel: NoteModel;

  constructor() {
    this.noteModel = new NoteModel();
  }
  // Create a new note
  create(noteData: NoteType): NoteType {
    return this.noteModel.create(noteData);
  }

  // Read all notes
  read(): NoteType[] {
    return this.noteModel.read();
  }

  // Read a note by ID
  load(id: number): NoteType | undefined {
    return this.noteModel.load(id);
  }

  // Update a note by ID
  update(noteData: NoteType): NoteType | undefined {
    return this.noteModel.update(noteData);
  }

  // Delete a note by ID
  delete(id: number): boolean {
    return this.noteModel.delete(id);
  }
}
