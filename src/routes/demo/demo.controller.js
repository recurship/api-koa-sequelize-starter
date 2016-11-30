import Demo from './demo.model';
import winston from 'winston';

export async function post(ctx) {
  await Demo.create(Object.assign({}, ctx.request.body));
  ctx.status = 201;
  ctx.body = 'OK';
}

export async function get(ctx) {
  const demos = await Demo.findAll({});
  ctx.body = demos;
}

export async function getById(ctx) {
  const demo = await Demo.findById(ctx.params.id);
  if (!demo) ctx.status = 404;
  else ctx.body = demo;
}

export async function put(ctx) {
  const result = await Demo.update(
    Object.assign({}, ctx.request.body),
    { where: { id: ctx.params.id }, limit: 1 });
  winston.info('updated demo:', result);
  ctx.body = 'OK';
}

export async function del(ctx) {
  const result = await Demo.destroy({
    where: { id: ctx.params.id },
    limit: 1,
  });
  winston.info('destroyed demo:', result);
  ctx.body = 'OK';
}
