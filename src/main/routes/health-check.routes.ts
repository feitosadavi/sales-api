import { Router } from 'express';

export default (router: Router): void => {
  router.get('/health-check', (_, res) => res.send({ status: 'healthy' }));
};
