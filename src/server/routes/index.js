import { Router } from 'express';
import { matchPath } from 'react-router-dom';
import routes from '../../client/routes';
import buildView from '../views';

const router = Router();

// Home route
router.get('/', async (req, res) => {
  const html = buildView(req.url, {});
  res.send(html);
});

// Item detail route
router.get('/items/:id', async (req, res) => {
  const activeRoute = routes.find((route) => matchPath('/items/:id', route)) || {};
  const data = await activeRoute.fetchInitialData(req.params.id);
  const html = buildView(req.url, data);
  res.send(html);
});

// Items results route
router.get('/items', async (req, res) => {
  const activeRoute = routes.find((route) => matchPath('/items', route)) || {};
  const data = await activeRoute.fetchInitialData(req.query.search);
  const html = buildView(req.url, data);
  res.send(html);
});

export default router;
