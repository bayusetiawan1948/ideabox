import { Request, Response, NextFunction } from 'express';
import { Validator } from '../validation/Validation';

import { ResponseError } from '../error/ResponseError';
import { NoteService } from '../services/NoteService';
import { noteSchema } from '../validation/NoteValidation';
import { NoteType } from '../types/NoteType';

export class NoteController {
  private noteService: NoteService;

  private validator: Validator;
  private schema: any;

  constructor() {
    this.noteService = new NoteService();

    this.schema = noteSchema;
    this.validator = new Validator(this.schema);
  }

  // Handle creating a new note
  create(req: Request, res: Response, next: NextFunction) {
    try {
      const noteData: NoteType = this.validator.validate(req.body);
      const result = this.noteService.create(noteData);

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Handle getting all notes
  read(req: Request, res: Response, next: NextFunction) {
    try {
      const result = this.noteService.read();

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Handle getting a note by ID
  load(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id ?? undefined;
      const result = this.noteService.load(parseInt(id));

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Handle updating a note by ID
  update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id ?? undefined;
      const noteData: NoteType = this.validator.validate(req.body);
      noteData['id'] = parseInt(id);
      const result = this.noteService.update(noteData);

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Handle deleting a note by ID
  delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id ?? undefined;
      const result = this.noteService.delete(parseInt(id));

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
