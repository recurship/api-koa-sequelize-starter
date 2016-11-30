import koaRouter from 'koa-router';
import * as controller from './demo.controller';
import { validateParams } from '../../middleware/validate-params';

const match = regex => term => regex.test(term);

/**
 * A simple module to demonstrate declarative parameter validation.
 */
export const demoRouter = koaRouter()
  .get('/', controller.get)
  .post('/', validateParams(['request', 'body'], ['name']), controller.post)
  .get('/:id', validateParams(['params'], ['id'], match(/^[0-9]*$/)), controller.getById)
  .delete('/:id', validateParams(['params'], ['id'], match(/^[0-9]*$/)), controller.del)
  .put('/:id', validateParams(['params'], ['id'], match(/^[0-9]*$/)), controller.put);
