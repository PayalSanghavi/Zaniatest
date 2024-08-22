import { rest } from 'msw';

export const handlers = [
  rest.get('/documents', (req, res, ctx) => {
    return res(ctx.json([
      { "type":

