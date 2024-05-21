import { Router } from 'express';
import { NoteController } from '../controllers/NoteController';

const PublicRoutes: Router = Router();

const noteController: NoteController = new NoteController();

PublicRoutes.get('/note', (req, res, next) =>
  noteController.read(req, res, next)
);
PublicRoutes.get('/note/:id', (req, res, next) =>
  noteController.load(req, res, next)
);
PublicRoutes.post('/note', (req, res, next) =>
  noteController.create(req, res, next)
);
PublicRoutes.put('/note/:id', (req, res, next) =>
  noteController.update(req, res, next)
);
PublicRoutes.delete('/note/:id', (req, res, next) =>
  noteController.delete(req, res, next)
);

export { PublicRoutes };
